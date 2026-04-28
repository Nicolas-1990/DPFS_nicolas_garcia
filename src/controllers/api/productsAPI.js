const db = require('../../database/models');

const productsAPI = {

  list: async (req, res) => {
    try {
      const products = await db.Product.findAll({
      include: ['category']
      });
      let countByCategory = {};

      products.forEach(product => {
        const categoryName = product.category ? product.category.name : 'Sin categoría';

        if (!countByCategory[categoryName]) {
        countByCategory[categoryName] = 0;
        }

        countByCategory[categoryName]++;
});

      return res.json({
        count: products.length,
        countByCategory,
        products: products.map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock,
          discount: product.discount,
          image: product.image,
          category: product.category ? product.category.name : null,
          detail: `http://localhost:3002/api/products/${product.id}`
        }))
      });

    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
  },

  detail: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id, {
      include: [
        { association: "category" },
        { association: "colors" }
      ]
      });

      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      return res.json({
        ...product.dataValues,
        category: product.category ? product.category.name : null,
        colors: product.colors ? product.colors.map(c => c.name) : [],
        image: `http://localhost:3000/images/products/${product.image}`
      });

    } catch (error) {
      console.log("ERROR DETAIL:", error);
      return res.status(500).json({ error: 'Error al obtener producto' });
    }
  }

};

module.exports = productsAPI;