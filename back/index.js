const server = require('./src/app.js');
const { conn, Category, Subcategory } = require('./src/db.js');

const PORT = process.env.PORT || 3001;
const SYNC_FORCE = process.env.SYNC_FORCE === 'true';
const INITIALIZE_DATA = process.env.INITIALIZE_DATA === 'true';

conn.sync({ force: SYNC_FORCE }).then(async () => {
  // console.log(`✅ Database synchronized. SYNC_FORCE=${SYNC_FORCE}`);

  // if (INITIALIZE_DATA) {
  //   console.log('🟡 Initializing sample data...');
  //   const categories = [
  //     { categoryId: 1, category_name: "remera", active: true },
  //     { categoryId: 2, category_name: "short", active: true },
  //     { categoryId: 3, category_name: "pantalon", active: true },
  //     { categoryId: 4, category_name: "top", active: true },
  //     { categoryId: 5, category_name: "campera", active: true },
  //   ];

  //   const subcategories = [
  //     { subcategoryId: 1, sub_category_name: "Mujer", active: true },
  //     { subcategoryId: 2, sub_category_name: "Hombre", active: true },
  //     { subcategoryId: 3, sub_category_name: "Niños", active: true },
  //   ];

  //   await Category.bulkCreate(categories);
  //   await Subcategory.bulkCreate(subcategories);

  //   console.log('✅ Sample data initialized successfully.');
  // }

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Error syncing the database:', err.message);
});