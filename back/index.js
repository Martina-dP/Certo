const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Role, User } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  await Role.bulkCreate([
    {roleId: 1, description: "superAdmin"},
    {roleId: 2, description: "Admin"},
    {roleId: 3, description: "Employer"},
]);await User.bulkCreate([
  {id: 1, name: "Martina", lastName: "del Pino", user: "martuDP", password: "delpinoR", active: "true", role: 1},
]);
  server.listen({ port: process.env.PORT || 3001 }, () => {
    console.log('%s listening at 3000 ESTOY DENTRO'); // eslint-disable-line no-console
  });
});