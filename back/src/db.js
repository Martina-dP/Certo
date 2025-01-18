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

const {
  User,
  Company,
  Role,
  Feature,
  RoleFeature,
  Product,
  Category,
  Subcategory,
} = sequelize.models;

// Relaciones entre User y Company
User.belongsTo(Company, {
  foreignKey: 'companyId',
  as: 'company',
});

Company.hasMany(User, {
  foreignKey: 'companyId',
  as: 'users',
});

// Relaciones entre Role y Feature a través de RoleFeature
Role.belongsToMany(Feature, {
  through: RoleFeature,
  foreignKey: 'roleId',
  otherKey: 'featureId',
  as: 'features',
});

Feature.belongsToMany(Role, {
  through: RoleFeature,
  foreignKey: 'featureId',
  otherKey: 'roleId',
  as: 'roles',
});

// Relaciones entre Product, Category, Subcategory y Company
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category',
});

Category.hasMany(Product, {
  foreignKey: 'categoryId',
  as: 'products',
});

Product.belongsTo(Subcategory, {
  foreignKey: 'subCategoryId',
  as: 'subcategory',
});

Subcategory.hasMany(Product, {
  foreignKey: 'subCategoryId',
  as: 'products',
});

Category.hasMany(Subcategory, {
  foreignKey: 'categoryId',
  as: 'subcategories',
});

Subcategory.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category',
});

Product.belongsTo(Company, {
  foreignKey: 'companyId',
  as: 'company',
});

Company.hasMany(Product, {
  foreignKey: 'companyId',
  as: 'products',
});

// Relaciones entre Category, Subcategory y Company
Category.belongsTo(Company, {
  foreignKey: 'companyId',
  as: 'company',
});

Company.hasMany(Category, {
  foreignKey: 'companyId',
  as: 'categories',
});

Subcategory.belongsTo(Company, {
  foreignKey: 'companyId',
  as: 'company',
});

Company.hasMany(Subcategory, {
  foreignKey: 'companyId',
  as: 'subcategories',
});

module.exports = {
  ...sequelize.models, // Exportar modelos
  conn: sequelize,     // Exportar conexión
};
