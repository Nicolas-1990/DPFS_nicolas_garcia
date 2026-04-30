const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { view } = require("./cartController");

const productsPath = path.join(__dirname, "../data/products.json");

function saveUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
};

module.exports = {
  
  home: async function(req, res) {

  let destacados = await db.Product.findAll({
    limit: 4,
    order: [["id", "ASC"]],
    include: [
      { association: "category" },
      { association: "brand" }
    ]
  });

  destacados = destacados.map(product => {
    let images = [];

    if (product.images) {
      try {
        images = JSON.parse(product.images);
      } catch (e) {
        images = [];
      }
    }

    if (images.length === 0 && product.image) {
      images = [product.image];
    }

    return {
      ...product.toJSON(),
      images
    };
  });

  res.render("home", { destacados });
},

index: async function(req, res) {

  let where = {};

  if (req.query.category) {
    where.category_id = req.query.category;
  }

  if (req.query.type) {
    where.type = req.query.type;
  }

  let products = await db.Product.findAll({
    where,
    include: [
      { model: db.Category, as: "category" },
      { model: db.Brand, as: "brand" }
    ],
    subQuery: false
  });

  products = products.map(product => {
  let images = [];

  if (product.images) {
    try {
      images = JSON.parse(product.images);
    } catch (e) {
      images = [];
    }
  }

  if (images.length === 0 && product.image) {
    images = [product.image];
  }

  return {
    ...product.toJSON(),
    images
  };
});

  res.render("products/productsList", { 
    products,
    category: req.query.category || null,
    type: req.query.type || null
  });

},

detail: async (req, res) => {
  try {
    const product = await db.Product.findByPk(req.params.id, {
      include: [
        { association: "category" },
        { association: "brand" },
        { association: "colors" }
      ]
    });

    if (!product) {
      return res.send("Producto no encontrado");
    }

    let productParsed = product.toJSON();

    let images = [];

    if (productParsed.images) {
      try {
      images = JSON.parse(productParsed.images);
      } catch (e) {
      images = [];
      }
    }

    if (images.length === 0 && productParsed.image) {
      images = [productParsed.image];
    }

    productParsed.images = images;

    let relatedProducts = await db.Product.findAll({
    where: {
    category_id: product.category_id
    },
    limit: 4
});

    relatedProducts = relatedProducts.map(p => {
  let images = [];

  if (p.images) {
    try {
      images = JSON.parse(p.images);
    } catch (e) {
      images = [];
    }
  }

  if (images.length === 0 && p.image) {
    images = [p.image];
  }

  return {
    ...p.toJSON(),
    images
  };
});

    res.render("products/productDetail", {
    product,
    images,
    relatedProducts
});

  } catch (error) {
    console.error("❌ ERROR EN DETALLE:", error);
    return res.status(500).send("Error interno");
  }
},

createForm: function(req, res) {
  res.render("products/productsCreate", {
    oldData: {},
    errors: {}
  });
},

store: async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("products/productsCreate", {
      errors: errors.mapped(),
      oldData: req.body
    });
  }

  try {

    const imagesArray = req.body.images
      ? req.body.images.split(",").map(i => i.trim())
      : [];

    let colorsArray = [];

    if (req.body.colors) {
      colorsArray = Array.isArray(req.body.colors)
        ? req.body.colors
        : req.body.colors.split(",").map(c => c.trim().toLowerCase());
    }

    const colorsDB = [];

    for (let colorName of colorsArray) {
      let color = await db.Color.findOne({
        where: { name: colorName }
      });

      if (!color) {
        color = await db.Color.create({ name: colorName });
      }

      colorsDB.push(color);
    }

    const product = await db.Product.create({
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price) || 0,
      image: imagesArray[0] || "default.png",
      images: JSON.stringify(imagesArray),
      stock: req.body.type === "digital" ? null : Number(req.body.stock) || 0,
      type: req.body.type || "fisico",
      discount: Number(req.body.discount) || 0,
      category_id: Number(req.body.category_id) || null,
      brand_id: Number(req.body.brand_id) || null
    });

    if (colorsDB.length > 0) {
      await product.setColors(colorsDB);
    }

    return res.redirect("/products");

  } catch (error) {
    console.error("❌ ERROR STORE:", error);
    return res.status(500).send("Error interno");
  }
},

editForm: async (req, res) => {
  console.log("SESSION USER:", req.session.userLogged);

  const product = await db.Product.findByPk(req.params.id, {
  include: [
      { association: "category" },
      { association: "brand" },
      { association: "colors" }
]
});

  if (!product) return res.redirect("/products");

  res.render("products/productsEdit", { 
  product,
  oldData: {},
  errors: {}
});
},

update: async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("products/productsEdit", {
      errors: errors.mapped(),
      product: req.body
    });
  }

  try {

    const product = await db.Product.findByPk(req.params.id);

    if (!product) {
      return res.send("Producto no encontrado");
    }

    const imagesArray = req.body.images
      ? req.body.images.split(",").map(i => i.trim())
      : [];

    let colorsArray = [];

    if (req.body.colors) {
      colorsArray = Array.isArray(req.body.colors)
        ? req.body.colors
        : req.body.colors.split(",").map(c => c.trim().toLowerCase());
    }

    const colorsDB = [];

    for (let colorName of colorsArray) {
      let color = await db.Color.findOne({
        where: { name: colorName }
      });

      if (!color) {
        color = await db.Color.create({ name: colorName });
      }

      colorsDB.push(color);
    }

    await product.update({
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price) || 0,
      image: imagesArray[0] || product.image,
      images: JSON.stringify(imagesArray),
      stock: req.body.type === "digital" ? null : Number(req.body.stock) || 0,
      type: req.body.type || product.type,
      discount: Number(req.body.discount) || 0,
      category_id: Number(req.body.category_id) || null,
      brand_id: Number(req.body.brand_id) || null
    });

    if (colorsDB.length > 0) {
      await product.setColors(colorsDB);
    } else {
      await product.setColors([]); // limpia si no mandan colores
    }

    return res.redirect("/products/" + req.params.id);

  } catch (error) {
    console.error("❌ ERROR UPDATE:", error);
    return res.status(500).send("Error interno");
  }
},

destroy: async (req, res) => {

  await db.Product.destroy({
    where: { id: req.params.id }
  });

  res.redirect("/products");

},

};