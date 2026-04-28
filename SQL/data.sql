-- CATEGORIES
INSERT INTO categories (name) VALUES
('keyboard'),
('mouse'),
('headset'),
('games');

-- BRANDS
INSERT INTO brands (name) VALUES
('Redragon'),
('Sentey'),
('Razer'),
('JBL');

-- COLORS
INSERT INTO colors (name) VALUES
('Negro'),
('Blanco');

-- PRODUCTS
INSERT INTO products (name, description, price, stock, type, category_id, brand_id)
VALUES
('Teclado Redragon Shiva', 'Teclado gamer RGB', 114800, 9, 'fisico', 1, 1),
('Mouse Sentey Layon', 'Mouse RGB', 23000, 5, 'fisico', 2, 2);

-- PRODUCT_COLORS
INSERT INTO product_colors (product_id, color_id) VALUES
(1,1),
(1,2),
(2,1);