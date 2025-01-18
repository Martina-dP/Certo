require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME) {
  throw new Error('Missing required environment variables for database connection');
}
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // Deshabilitar logs de SQL
  native: false,  // Usa pg-native para mejorar el rendimiento
});

// Autenticar conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1);
  }
})();

const basename = path.basename(__filename);
const modelDefiners = [];

// Cargar modelos dinámicamente desde la carpeta 'models'
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectar Sequelize en los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizar nombres de los modelos
sequelize.models = Object.fromEntries(
  Object.entries(sequelize.models).map(([name, model]) => [name[0].toUpperCase() + name.slice(1), model])
);

const { User, Company } = sequelize.models;

// Definir relaciones
// Un usuario pertenece a una compañía
User.belongsTo(Company, {
  foreignKey: 'companyId', // Llave foránea en la tabla User
  as: 'company', // Alias para acceder a la relación
});

// Una compañía puede tener muchos usuarios
Company.hasMany(User, {
  foreignKey: 'companyId', // Llave foránea en la tabla User
  as: 'users', // Alias para acceder a la relación
});

module.exports = {
  ...sequelize.models, // Exportar modelos
  conn: sequelize,     // Exportar conexión
};
