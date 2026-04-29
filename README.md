🛒 NextLevel PC - Full Stack Project

Ecommerce de productos tecnológicos (hardware y videojuegos), con sistema de usuarios, carrito de compras y panel administrativo.

🚀 Tecnologías
- Node.js
- Express
- MySQL
- Sequelize
- React (dashboard administrativo)

📦 Funcionalidades
- Registro y login de usuarios
- CRUD de productos
- API REST (/api/products - /api/users)
- Dashboard en React consumiendo la API

📊 Dashboard
Panel administrativo con:
- Total de productos
- Total de usuarios
- Categorías
- Último producto
- Listado de productos

🔐 Roles de usuario
- Admin: gestión de productos y acceso al dashboard
- Usuario: navegación, carrito y compra

📸 Capturas
- Home
- Listado de productos
- Carrito
- Dashboard

🛠 Instalación

# Backend
npm install
nodemon app.js

# Frontend (React Dashboard)
cd dashboard
npm install
npm start

🔗 Endpoints
- http://localhost:3002/api/products
- http://localhost:3002/api/users

🗂️ Estructura del proyecto
├── controllers/     # Lógica de cada ruta
├── middlewares/     # Autenticación, validaciones
├── routes/          # Definición de rutas Express
├── views/           # Plantillas EJS
├── public/          # Archivos estáticos (CSS, imágenes)
├── database/        # Modelos Sequelize y configuración DB
├── app.js           # Entry point
└── package.json

# Referentes
Razer → Diseño minimalista oscuro y enfoque en producto.
Logitech → Presentación técnica clara.
Corsair → Estética moderna y branding fuerte.
Amazon → Flujo de carrito y experiencia de compra.
Mercado Libre → Adaptación al mercado latino y usabilidad.

## 👨‍💻 Autor
Nicolas Garcia
🔗 GitHub: https://github.com/Nicolas-1990  
📧 Email: nicolas_garcia1990@hotmail.com