const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  server.listen({ port: process.env.PORT || 3001 }, () => {
    console.log('%s listening at 3000 ESTOY DENTRO'); // eslint-disable-line no-console
  });
});