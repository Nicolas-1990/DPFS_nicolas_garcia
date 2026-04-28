const fs = require("fs");
const path = require("path");
const db = require("./src/database/models");

const productsPath = path.join(__dirname, "./src/data/products.json");

async function seedProducts() {
  try {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

    for (let product of products) {
      await db.Product.create({
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image || (product.images ? product.images[0] : null),
        category_id: product.category_id || 1,
        brand_id: product.brand_id || 1
      });
    }

    console.log("✅ Productos migrados correctamente");
    process.exit();
  } catch (error) {
    console.error("❌ Error al migrar:", error);
    process.exit();
  }
}

seedProducts();