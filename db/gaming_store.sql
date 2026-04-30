-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2026 a las 03:31:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gaming_store`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Redragon', '2026-04-30 01:02:46', '2026-04-30 01:02:46'),
(2, 'Sentey', '2026-04-30 01:02:56', '2026-04-30 01:02:56'),
(3, 'JBL', '2026-04-30 01:03:15', '2026-04-30 01:03:15'),
(4, 'EA Sports', '2026-04-30 01:03:25', '2026-04-30 01:03:25'),
(5, 'Id-Colling', '2026-04-30 01:03:37', '2026-04-30 01:03:37'),
(6, 'Sony', '2026-04-30 01:04:03', '2026-04-30 01:04:03'),
(7, 'Otras Marcas', '2026-04-30 01:04:11', '2026-04-30 01:04:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Teclados', '2026-04-30 00:58:23', '2026-04-30 00:58:23'),
(2, 'Mouse', '2026-04-30 00:59:19', '2026-04-30 00:59:19'),
(3, 'Headsets', '2026-04-30 00:59:41', '2026-04-30 00:59:41'),
(4, 'Juegos PC', '2026-04-30 00:59:54', '2026-04-30 00:59:54'),
(5, 'Otras Categorías', '2026-04-30 01:00:09', '2026-04-30 01:00:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'negro', '2026-04-29 22:47:13', '2026-04-29 22:47:13'),
(2, 'blanco', '2026-04-29 22:47:13', '2026-04-29 22:47:13'),
(3, 'Negro', '2026-04-30 01:04:27', '2026-04-30 01:04:27'),
(4, 'Blanco', '2026-04-30 01:04:43', '2026-04-30 01:04:43'),
(5, 'Gris', '2026-04-30 01:04:55', '2026-04-30 01:04:55'),
(6, 'Azul', '2026-04-30 01:05:11', '2026-04-30 01:05:11'),
(7, 'Otros Colores', '2026-04-30 01:05:20', '2026-04-30 01:05:20'),
(8, 'rosa', '2026-04-29 23:41:51', '2026-04-29 23:41:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productcolors`
--

CREATE TABLE `productcolors` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `color_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productcolors`
--

INSERT INTO `productcolors` (`id`, `product_id`, `color_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2026-04-29 22:47:13', '2026-04-29 22:47:13'),
(3, 1, 2, '2026-04-29 23:05:47', '2026-04-29 23:05:47'),
(4, 2, 1, '2026-04-29 23:09:46', '2026-04-29 23:09:46'),
(5, 3, 1, '2026-04-29 23:12:05', '2026-04-29 23:12:05'),
(6, 3, 2, '2026-04-29 23:12:05', '2026-04-29 23:12:05'),
(7, 5, 1, '2026-04-29 23:29:57', '2026-04-29 23:29:57'),
(8, 6, 1, '2026-04-29 23:31:48', '2026-04-29 23:31:48'),
(9, 7, 1, '2026-04-29 23:33:26', '2026-04-29 23:33:26'),
(10, 7, 2, '2026-04-29 23:34:15', '2026-04-29 23:34:15'),
(11, 7, 7, '2026-04-29 23:34:15', '2026-04-29 23:34:15'),
(12, 9, 1, '2026-04-29 23:41:33', '2026-04-29 23:41:33'),
(13, 9, 2, '2026-04-29 23:41:33', '2026-04-29 23:41:33'),
(14, 9, 8, '2026-04-29 23:41:51', '2026-04-29 23:41:51'),
(15, 10, 1, '2026-04-29 23:44:15', '2026-04-29 23:44:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `images` text DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `images`, `stock`, `type`, `discount`, `category_id`, `brand_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Redragon Shiva K512', 'Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.\r\n\r\nDistinción a todo color\r\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.', 95975, 'teclado.jpg', '[\"teclado.jpg\",\"teclado-a.jpg\",\"teclado-b.jpg\",\"teclado-c.jpeg\",\"teclado-d.jpg\"]', 5, 'fisico', 15, 1, 1, '2026-04-29 22:47:13', '2026-04-29 23:05:47'),
(2, 'Mouse Gamer Sentey Layon Gs-3312', 'Un diseño único, que cuenta con iluminación RGB LED. 16.8 millones de colores en su RAINBOW.\r\nDiseñado para ser cómodo y práctico.\r\nPersonalización y función MACRO mediante software.\r\nIdeal para jugar todo tipo de batallas Gamer.', 25000, 'mouse.jpg', '[\"mouse.jpg\",\"mouse-a.png\",\"mouse-b.jpg\",\"mouse-c.jpg\",\"mouse-d.jpg\"]', 2, 'fisico', 0, 2, 2, '2026-04-29 23:09:46', '2026-04-29 23:09:46'),
(3, 'Auriculares Razer Barracuda', 'LIBERTAD DE SONIDO HÍBRIDA. ILUMINADA.\r\nTanto si estás en casa como de viaje, experimenta la verdadera versatilidad y estilo de audio en cualquier lugar con los Razer Barracuda X Chroma. Con Razer SmartSwitch Dual Wireless, podrás alternar entre el juego y el uso móvil al instante con unos auriculares gaming RGB inalámbricos ligeros que ofrecen lo mejor de ambos mundos.', 229999, 'headsets.jpeg', '[\"headsets.jpeg\",\"headsets-a.jpg\",\"headsets-b.jpg\",\"headsets-c.jpg\",\"headsets-d.jpg\"]', 5, 'fisico', 0, 3, 7, '2026-04-29 23:12:05', '2026-04-29 23:27:57'),
(4, 'EA Fifa 26', '¡DISPONIBLE YA! FIFA 26\r\n\r\nNo te quedes fuera de la temporada. Llévate la edición más reciente del simulador de fútbol más famoso del mundo. Optimizado con tiempos de carga mejorados y toda la emoción de las licencias oficiales (Champions League, Libertadores y más).', 46500, 'juegopc.jpg', '[\"juegopc.jpg\",\"juegopc-a.jpeg\",\"juegopc-b.jpeg\",\"juegopc-c.jpg\",\"juegopc-d.jpg\"]', NULL, 'digital', 5, 4, 4, '2026-04-29 23:15:47', '2026-04-29 23:15:47'),
(5, 'Teclado Mecánico Sentey QS-530', 'Este teclado Sentey de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.', 42000, 'teclado2.jpg', '[\"teclado2.jpg\",\"teclado2-a.jpg\",\"teclado2-b.jpg\",\"teclado2-c.jpg\",\"teclado2-d.jpg\"]', 3, 'fisico', 0, 1, 2, '2026-04-29 23:29:57', '2026-04-29 23:30:08'),
(6, 'Mouse gamer de juego Redragon Griffin M607', 'Desde su base, cuenta con pads de teflón, que ofrecen un mejor deslizamiento y mayor duración. Su chasis íntegramente compuesto de ABS reforzado aporta resistencia y durabilidad. En su interior, se encuentra un sensor óptico Pixart PWM 3212 y switches Omron, diseñados para optimizar el rendimiento. El cable mallado resiste diez mil flexiones bruscas y hasta 12 kilogramos de carga continua. Además, su ficha USB enchapada en oro asegura una terminación inoxidable y la mejor conductividad.', 35999, 'mouse2.jpg', '[\"mouse2.jpg\",\"mouse2-a.jpg\",\"mouse2-b.jpg\",\"mouse2-c.jpg\",\"mouse2-d.jpg\"]', 1, 'fisico', 0, 2, 2, '2026-04-29 23:31:48', '2026-04-29 23:31:48'),
(7, 'Auriculares Jbl Quantum', 'Sumérgete en la experiencia de juego definitiva con el Auricular Headset Gamer JBL Quantum 100 M2. Diseñado para los gamers más exigentes, este headset ofrece un sonido envolvente que te permitirá escuchar cada detalle de tus partidas, desde los pasos de tus oponentes hasta los efectos sonoros más sutiles. Su diseño ergonómico garantiza comodidad durante largas sesiones de juego, permitiéndote concentrarte en lo que realmente importa: ganar.\r\n', 80000, 'headsets2.jpg', '[\"headsets2.jpg\",\"headsets2-a.jpg\",\"headsets2-b.jpg\",\"headsets2-c.jpg\",\"headsets2-d.jpg\"]', 1, 'fisico', 0, 3, 3, '2026-04-29 23:33:26', '2026-04-29 23:34:15'),
(8, 'God Of War 2018 - PC', '- Entrega por correo electrónico una vez confirmada la compra.\r\n- Acceso a descarga directa mediante el archivo proporcionado.\r\n- Incluye instructivo de instalación detallado paso a paso.\r\n- Incluye video tutorial de instalación para facilitar todo el proceso.\r\n- Contenido previamente probado para asegurar su correcto funcionamiento.\r\n- Incluye todos los DLC disponibles del juego.\r\n- Producto 100% digital (no se envía ningún producto físico).', 39999, 'juegopc2.jpg', '[\"juegopc2.jpg\",\"juegopc2-a.jpg\",\"juegopc2-b.jpg\",\"juegopc2-c.jpg\",\"juegopc2-d.jpg\"]', NULL, 'digital', 0, 4, 6, '2026-04-29 23:38:13', '2026-04-29 23:39:13'),
(9, 'Thermaltake View 170', 'El gabinete Thermaltake View 170 TG ARGB redefine la estética de los sistemas de formato reducido con un diseño elegante en color negro. Su estructura Mini Tower es ideal para configuraciones compactas que buscan un alto rendimiento sin sacrificar el estilo visual. La combinación de acero y plástico resistente garantiza durabilidad y una base sólida para sus componentes.', 119000, 'gabinete1.jpg', '[\"gabinete1.jpg\",\"gabinete1-a.jpg\",\"gabinete1-b.jpg\",\"gabinete1-c.jpg\",\"gabinete1-d.jpg\"]', 5, 'fisico', 0, 5, 7, '2026-04-29 23:41:33', '2026-04-29 23:41:33'),
(10, 'Watercooling Id-Cooling Fx120 ARGB Intel AMD AM5 AM4 120mm 150W', 'El enfriador de CPU \'Watercooling Cpu Cooler Id-cooling Fx120 Argb\' es la solución perfecta para tus necesidades de refrigeración en sistemas Intel y AMD. Con un diseño especial que admite un TDP de hasta 150W, podrás mantener tu procesador funcionando a temperaturas óptimas durante largas sesiones de juego. Este cooler cuenta con un elegante ventilador de 120 mm que no solo mejora el rendimiento térmico, sino que también añade un toque estético gracias a su iluminación ARGB. Compatible con una amplia gama de sockets, desde Intel LGA hasta AMD AM5 y AM4, su instalación es sencilla y rápida. Además, su diseño gamer asegura que tu equipo no solo se vea bien, sino que también funcione de manera eficiente. Esta unidad, nueva y bajo la línea Frostflow X, es ideal para quienes buscan un rendimiento silencioso y efectivo. ¡No dejes pasar la oportunidad de mejorar tu refrigeración con este innovador cooler!', 97693, 'cooler1.jpg', '[\"cooler1.jpg\",\"cooler1-a.jpg\",\"cooler1-b.jpg\",\"cooler1-c.jpg\",\"cooler1-d.jpg\",\"\"]', 5, 'fisico', 10, 5, 5, '2026-04-29 23:44:15', '2026-04-29 23:45:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `avatar`, `role`) VALUES
(2, 'Administrador', 'Test', 'admin@test.com', '$2b$10$g1i9r2AgnpBtwpSDkg19aenReOZ7aOhXTrGaDAYHAzqWQzyq6cFri', 'admin.jpeg', 'admin'),
(3, 'Usuario', 'Test', 'user@test.com', '$2b$10$g1i9r2AgnpBtwpSDkg19aenReOZ7aOhXTrGaDAYHAzqWQzyq6cFri', 'user.jpeg', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productcolors`
--
ALTER TABLE `productcolors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productcolors`
--
ALTER TABLE `productcolors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
