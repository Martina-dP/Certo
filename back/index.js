const server = require('./src/app.js');
const { conn, Category, Subcategory } = require('./src/db.js');

// Syncing all the models at once.

conn.sync({force: true}).then(async() => {
  // const dataCategory = [ 
  //   { categoryId: 1 , categoty_name: "remera", active: true },
  //   { categoryId: 2 , categoty_name: "short", active: true },
  //   { categoryId: 3 , categoty_name: "pantalon", active: true },
  //   { categoryId: 4 , categoty_name: "top", active: true },
  //   { categoryId: 5 , categoty_name: "compera", active: true },
  // ]
  // const dataSubCategory = [ 
  //   { subcategoryId: 1 , sub_categoty_name: "Mujer", active: true },
  //   { subcategoryId: 2 , sub_categoty_name: "Hombre", active: true },
  //   { subcategoryId: 3 , sub_categoty_name: "Niños", active: true },
  // ]
  // await Category.bulkCreate(dataCategory);
  // await Subcategory.bulkCreate(dataSubCategory);
  server.listen({ port: process.env.PORT || 3001 }, () => {
    console.log('%s listening at 3000 ESTOY DENTRO'); // eslint-disable-line no-console
  });
});