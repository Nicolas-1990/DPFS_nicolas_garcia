🛒 NextLevel PC - Full Stack Project

E-commerce de productos tecnológicos (hardware y videojuegos), con sistema de usuarios, carrito de compras y panel administrativo.

🚀 Tecnologías
- Node.js
- Express
- MySQL
- Sequelize
- React (dashboard administrativo)

🛠 Instalación

# Backend
npm install
nodemon app.js

# Frontend (React Dashboard)
cd dashboard
npm install
npm start

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

📸 Capturas del proyecto
- Home
![Home](public/screenshots/home.png)

- Listado de productos
![Listado de productos 1](public/screenshots/list1.png)
![Listado de productos 2](public/screenshots/list2.png)

- Detalle de producto
![Detalle de producto](public/screenshots/detail.png)

- Carrito
![Carrito 1](public/screenshots/cart1.png)
![Carrito 2](public/screenshots/cart2.png)

- Inicio de sesión
![Login](public/screenshots/login.png)

- Registro
![Registro 1](public/screenshots/register1.png)
![Registro 2](public/screenshots/register2.png)

- Dashboard
![Dashboard 1](public/screenshots/dashboard1.png)
![Dashboard 2](public/screenshots/dashboard2.png)

## Base de datos

1. Abrir phpMyAdmin
2. Crear base de datos: gaming_store
3. Importar archivo:
   /db/gaming_store.sql

## 📚 Referencias

Documentación oficial utilizada durante el desarrollo:

- Express.js Documentation: https://expressjs.com/
- Node.js Documentation: https://nodejs.org/
- MySQL 8.0 Reference Manual: https://dev.mysql.com/doc/
- React Documentation: https://react.dev/
- Sequelize ORM Documentation: https://sequelize.org/

## 👨‍💻 Autor
Nicolas Garcia
🔗 GitHub: https://github.com/Nicolas-1990  
📧 Email: nicolas_garcia1990@hotmail.com