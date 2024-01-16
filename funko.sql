-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-07-2023 a las 23:49:29
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `funko_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `funko_db`.`category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'Funkos', 'Figuras coleccionables Funko Pop'),
(2, 'Remeras', 'Remeras de anime, series, peliculas y más'),
(3, 'LLaveros', 'Llaveros coleccionables');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `licence`
--

CREATE TABLE `funko_db`.`licence` (
  `licence_id` int(11) NOT NULL,
  `licence_name` varchar(45) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `licence`
--

INSERT INTO `licence` (`licence_id`, `licence_name`, `licence_description`, `licence_image`) VALUES
(1, 'Pokemon', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.', '/img/pokemon/pk-cover.jpg'),
(2, 'Star Wars', 'Disfruta de una saga que sigue agregando personajes a su colección.', '/img/star-wars/st-cover.jpg'),
(3, 'Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto.', '/img/harry-potter/hp-cover.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `funko_db`.`product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `sku` varchar(30) NOT NULL,
  `dues` int(11) DEFAULT NULL,
  `image_front` varchar(200) DEFAULT NULL,
  `image_back` varchar(200) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  `licence_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `price`, `stock`, `discount`, `sku`, `dues`, `image_front`, `image_back`, `create_time`, `licence_id`, `category_id`) VALUES
(1,'Baby Yoda Blueball','Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.',1799.99,5,5,'STW001001',6,'/star-wars/baby-yoda-1.webp','/star-wars/baby-yoda-box.webp','2023-11-27 23:33:21',2,1);
(2,'Boba Fett Fighter','Figura coleccionable de Boba Fett Fighter - The Mandalorian Saga.',1499.99,8,10,'STW001002',3,'/star-wars/bobbafeth-1.webp','/star-wars/bobbafeth-box.webp','2023-06-27 23:33:21',2,1);
(3,'Luke Skylwalker & Grogu','Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.',2399.99,8,15,'STW001003',12,'/star-wars/luke-1.webp','/star-wars/luke-box.webp','2023-10-27 23:33:21',2,1);
(4,'Stormtrooper Lightsaber','Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.',2199.99,6,15,'STW001004',9,'/star-wars/trooper-1.webp','/star-wars/trooper-box.webp','2023-09-27 23:33:21',2,1);
(5,'Charmander Smiley','Figura coleccionable de Charmander - Pokemon Saga.',2099.99,9,15,'PKM001001',12,'/pokemon/charmander-1.webp','/pokemon/charmander-box.webp','2023-07-27 23:33:21',1,1);
(6,'Dragonite Hi!','Figura coleccionable de Dragonite - Pokemon Saga.',1799.99,10,10,'PKM001002',6,'/pokemon/dragonite-1.webp','/pokemon/dragonite-box.webp','2023-12-27 23:33:21',1,1);
(7,'Pidgeotto Flying','Figura coleccionable de Pidgeotto - Pokemon Saga.',1799.99,4,5,'PKM00103',3,'/pokemon/pidgeotto-1.webp','/pokemon/pidgeotto-box.webp','2023-06-27 23:33:21',1,1);
(8,'Pikachu Smiley','Figura coleccionable de Pikachu - Pokemon Saga.',1899.99,3,10,'PKM001004',12,'/pokemon/pikachu-1.webp','/pokemon/pikachu-box.webp','2023-05-27 23:33:21',1,1);
(9,'Vulpix Fancy','Figura coleccionable de Vulpix - Pokemon Saga.',1599.99,8,5,'PKM001005',3,'/pokemon/vulpix-1.webp','/pokemon/vulpix-box.webp','2023-08-27 23:33:21',1,1);
(10,'Harry Potter & Hegwid','Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.',1799.99,4,10,'HPT0',6,'/harry-potter/harry-1.webp','/harry-potter/harry-box.webp','2023-09-27 23:33:21',3,1);
(11,'Herminione Ball Dress','Figura coleccionable de Herminione - Harry Potter Saga.',2099.99,7,15,'HPT001002',9,'/harry-potter/hermione-1.webp','/harry-potter/hermione-box.webp','2023-12-27 23:33:21',3,1);
(12,'Luna Lovegood Lion Mask','Figura coleccionable de Luna Lovegood - Harry Potter Saga.',1699.99,12,5,'HPT001003',9,'/harry-potter/luna-1.webp','/harry-potter/luna-box.webp','2023-10-27 23:33:21',3,1);
(13,'Snape Patronus','Figura coleccionable de Snape Patronus - Harry Potter Saga.',1999.99,13,20,'HPT001004',3,'/harry-potter/snape-patronus-1.webp','/harry-potter/snape-patronus-box.webp','2023-11-27 23:33:21',3,1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `funko_db`.`role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `funko_db`.`user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_has_role`
--

CREATE TABLE `funko_db`.`user_has_role` (
  `user_user_id` int(11) NOT NULL,
  `role_role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indices de la tabla `licence`
--
ALTER TABLE `licence`
  ADD PRIMARY KEY (`licence_id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `sku_UNIQUE` (`sku`),
  ADD KEY `fk_product_licence1_idx` (`licence_id`),
  ADD KEY `fk_product_category1_idx` (`category_id`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indices de la tabla `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD PRIMARY KEY (`user_user_id`,`role_role_id`),
  ADD KEY `fk_user_has_role_role1_idx` (`role_role_id`),
  ADD KEY `fk_user_has_role_user_idx` (`user_user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `licence`
--
ALTER TABLE `licence`
  MODIFY `licence_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `fk_product_licence1` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`);

--
-- Filtros para la tabla `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD CONSTRAINT `fk_user_has_role_role1` FOREIGN KEY (`role_role_id`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `fk_user_has_role_user` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
