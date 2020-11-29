-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2020 a las 12:44:17
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wolprayrestaurant`
--
CREATE DATABASE IF NOT EXISTS `wolprayrestaurant` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `wolprayrestaurant`;

-- --------------------------------------------------------
DROP user 'wolprayusr';
CREATE USER 'wolprayusr'@'localhost' IDENTIFIED BY  'UsrWolpray';
GRANT ALL PRIVILEGES ON `wolprayrestaurant`.* TO 'wolprayusr'@'localhost';
--
-- Estructura de tabla para la tabla `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE `companies` (
  `idCompany` int(11) NOT NULL,
  `companyName` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companyAddress` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCity` int(11) NOT NULL,
  `company_CIF` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companyTlfo` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companyMail` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companiContact` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `companyWeb` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `companies`
--

INSERT INTO `companies` (`idCompany`, `companyName`, `companyAddress`, `idCity`, `company_CIF`, `companyTlfo`, `companyMail`, `companiContact`, `companyWeb`) VALUES
(1, 'Gastronomundo', '', 881, 'B63809271', '607247850', 'migarcia@dopc.com', 'Miguel', 'http://www.gastronomundo.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `custId` int(11) NOT NULL,
  `custName` varchar(250) NOT NULL,
  `custMail` varchar(250) NOT NULL,
  `custPass` varchar(250) NOT NULL,
  `custPhone` varchar(20) NOT NULL,
  `custCity` int(11) NOT NULL,
  `custValidateMail` tinyint(1) NOT NULL DEFAULT 0,
  `custValidatePhone` tinyint(1) NOT NULL DEFAULT 0,
  `custAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  `custModifVal` timestamp NULL DEFAULT NULL,
  `custTDoc` tinyint(4) NOT NULL COMMENT '1-DNI,2-NIF, 3-NIE, 4-Passport',
  `custNDoc` int(11) NOT NULL,
  `custTemporal` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Si esta marcado, se eliminara 48 horas despues del alta'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `c_city`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `c_city`;
CREATE TABLE `c_city` (
`cityid` int(11)
,`provinceid` int(11)
,`cityName` varchar(100)
,`latitude` double(12,9)
,`longitude` double(12,9)
,`city_limitClubs_porInt` int(3)
,`city_limitClubs_porExt` int(11)
,`city_limitClubs_mess` varchar(500)
,`city_limitOthers_porInt` int(11)
,`city_limitOthers_porExt` int(11)
,`city_limitOthers_mess` varchar(500)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `c_country`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `c_country`;
CREATE TABLE `c_country` (
`countryId` int(11)
,`countryName` varchar(100)
,`country_limitClubs_porInt` int(3)
,`country_limitClubs_porExt` int(11)
,`country_limitClubs_mess` varchar(500)
,`country_limitOthers_porInt` int(11)
,`country_limitOthers_porExt` int(11)
,`country_limitOthers_mess` varchar(500)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `c_provinces`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `c_provinces`;
CREATE TABLE `c_provinces` (
`provinceid` int(11)
,`provinceName` varchar(255)
,`stateid` int(11)
,`provinceCapital` varchar(255)
,`province_limitClubs_porInt` int(3)
,`province_limitClubs_porExt` int(11)
,`province_limitClubs_mess` varchar(500)
,`province_limitOthers_porInt` int(11)
,`province_limitOthers_porExt` int(11)
,`province_limitOthers_mess` varchar(500)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `c_state`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `c_state`;
CREATE TABLE `c_state` (
`stateid` int(11)
,`stateName` varchar(255)
,`countryid` int(11)
,`state_limitClubs_porInt` int(3)
,`state_limitClubs_porExt` int(11)
,`state_limitClubs_mess` varchar(500)
,`state_limitOthers_porInt` int(11)
,`state_limitOthers_porExt` int(11)
,`state_limitOthers_mess` varchar(500)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locals`
--

DROP TABLE IF EXISTS `locals`;
CREATE TABLE `locals` (
  `idCompany` int(11) NOT NULL,
  `idLocals` int(11) NOT NULL,
  `locName` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locStreet` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locNumbre` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locCPostal` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCity` int(11) NOT NULL,
  `locDescription` varchar(5000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locPhone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locImage` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locLatitude` double DEFAULT NULL,
  `locLongitude` double DEFAULT NULL,
  `locPath` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locMaxPeopleInt` int(11) NOT NULL DEFAULT 0,
  `locMaxPeopleExt` int(11) NOT NULL DEFAULT 0 COMMENT 'Terrazas',
  `loc_limit_porInt` int(3) NOT NULL DEFAULT 0 COMMENT 'Limite en porcentaje zona interna',
  `loc_limit_porExt` int(11) NOT NULL DEFAULT 0 COMMENT 'Limite en porcentaje para  plazas externas',
  `loc_limit_mess` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'Mensaje del limite',
  `locTokem` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Tokem Seguridad',
  `locCommMail` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Mail para enviar pedidos',
  `locCommSMS` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Telefono movil para enviar pedidos'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de restaurantes';

--
-- Volcado de datos para la tabla `locals`
--

INSERT INTO `locals` (`idCompany`, `idLocals`, `locName`, `locStreet`, `locNumbre`, `locCPostal`, `idCity`, `locDescription`, `locPhone`, `locImage`, `locLatitude`, `locLongitude`, `locPath`, `locMaxPeopleInt`, `locMaxPeopleExt`, `loc_limit_porInt`, `loc_limit_porExt`, `loc_limit_mess`, `locTokem`, `locCommMail`, `locCommSMS`) VALUES
(1, 1, 'barconfinao', 'sin nombre', '0', '08000', 881, 'Demostracion de posibilidades', '', NULL, NULL, NULL, NULL, 0, 0, 0, 0, '', 'abcdefghijklmnopqrstuvxz1234567890ABCDEFGHIJKLMNOP', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `idmenu` int(11) NOT NULL,
  `idLocal` int(11) NOT NULL,
  `menuName` varchar(100) NOT NULL,
  `menuDescription` varchar(500) DEFAULT NULL,
  `menuPrecio` double NOT NULL,
  `menuSeq` varchar(45) DEFAULT NULL COMMENT 'Lu,Ma,Mi,Ju,Vi,Sa,Do    dias de la semana en que esta disponible\n* Diario\nF Festivos\nN Noche'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Controlador menus';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu_platos`
--

DROP TABLE IF EXISTS `menu_platos`;
CREATE TABLE `menu_platos` (
  `idmenu_platos` int(11) NOT NULL,
  `idMenu` int(11) NOT NULL,
  `mpGrupo` int(11) NOT NULL,
  `mpPlato` int(11) DEFAULT NULL COMMENT 'Si el plato se tomo de la carta, aparecera el numero; si no quedara en null',
  `mpPlatoName` varchar(45) DEFAULT NULL COMMENT 'Nombre del plato, ya sea manual o desde carta',
  `mpPlatoDescri` varchar(200) DEFAULT NULL COMMENT 'descripcion del plato, ta sea manual o desde carta'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='platos correspondientes a un menu';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `n_category`
--

DROP TABLE IF EXISTS `n_category`;
CREATE TABLE `n_category` (
  `idCategory` int(11) NOT NULL,
  `idLocal` int(11) NOT NULL,
  `categoryName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryDescription` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `n_category`
--

INSERT INTO `n_category` (`idCategory`, `idLocal`, `categoryName`, `categoryDescription`) VALUES
(1, 1, 'Entrantes', NULL),
(2, 1, 'Primeros', NULL),
(3, 1, 'Segundos', NULL),
(4, 1, 'Postres', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `n_localcity`
--

DROP TABLE IF EXISTS `n_localcity`;
CREATE TABLE `n_localcity` (
  `idLocalCity` int(11) NOT NULL,
  `idCity` int(11) NOT NULL,
  `idLocal` int(11) NOT NULL,
  `lcName` varchar(200) NOT NULL COMMENT 'Nombre de la poblacion o area en donde se puede suministrar'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Ciudades a la que se puede atender';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `idProduct` int(11) NOT NULL,
  `idLocal` int(11) NOT NULL,
  `productName` varchar(45) NOT NULL,
  `productDescri` varchar(300) NOT NULL,
  `productPrice` double NOT NULL,
  `productImage` varchar(300) DEFAULT NULL,
  `idCategory` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `roleid` int(11) NOT NULL,
  `roleName` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roleDescription` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`roleid`, `roleName`, `roleDescription`) VALUES
(1, 'Client', ''),
(3, 'Gestor local', ''),
(5, 'Manager', 'Mantenimiento informacion de club, eventos, productos, slots (si es para un club, ha de ser los suyos,)'),
(7, 'Gestor empresa', 'Acceso a todas las tablas relacionadas con la empresa'),
(9, 'Administrador', 'Acceso a todas las tablas de la base de datos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `userName` varchar(250) NOT NULL,
  `mail` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `userPhone` varchar(250) NOT NULL,
  `birthdate` date NOT NULL,
  `roleid` int(11) NOT NULL,
  `companyid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userid`, `userName`, `mail`, `password`, `userPhone`, `birthdate`, `roleid`, `companyid`) VALUES
(2, 'Lewis Méndez', 'lewismendez@wolpray.com', '2222', '658855555', '1990-08-19', 9, NULL),
(3, 'Miguel Profe', 'miguel@wolpray.com', '1111', '632444444', '1980-08-19', 9, NULL),
(4, 'Jaume Quintana Méndez', 'jaumequintana@wolpray.com', '1111', '633224477', '1997-08-19', 9, NULL);

-- --------------------------------------------------------

--
-- Estructura para la vista `c_city`
--
DROP TABLE IF EXISTS `c_city`;

DROP VIEW IF EXISTS `c_city`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `c_city`  AS  select `wolpraydb`.`c_city`.`cityid` AS `cityid`,`wolpraydb`.`c_city`.`provinceid` AS `provinceid`,`wolpraydb`.`c_city`.`cityName` AS `cityName`,`wolpraydb`.`c_city`.`latitude` AS `latitude`,`wolpraydb`.`c_city`.`longitude` AS `longitude`,`wolpraydb`.`c_city`.`city_limitClubs_porInt` AS `city_limitClubs_porInt`,`wolpraydb`.`c_city`.`city_limitClubs_porExt` AS `city_limitClubs_porExt`,`wolpraydb`.`c_city`.`city_limitClubs_mess` AS `city_limitClubs_mess`,`wolpraydb`.`c_city`.`city_limitOthers_porInt` AS `city_limitOthers_porInt`,`wolpraydb`.`c_city`.`city_limitOthers_porExt` AS `city_limitOthers_porExt`,`wolpraydb`.`c_city`.`city_limitOthers_mess` AS `city_limitOthers_mess` from `wolpraydb`.`c_city` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `c_country`
--
DROP TABLE IF EXISTS `c_country`;

DROP VIEW IF EXISTS `c_country`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `c_country`  AS  select `wolpraydb`.`c_country`.`countryId` AS `countryId`,`wolpraydb`.`c_country`.`countryName` AS `countryName`,`wolpraydb`.`c_country`.`country_limitClubs_porInt` AS `country_limitClubs_porInt`,`wolpraydb`.`c_country`.`country_limitClubs_porExt` AS `country_limitClubs_porExt`,`wolpraydb`.`c_country`.`country_limitClubs_mess` AS `country_limitClubs_mess`,`wolpraydb`.`c_country`.`country_limitOthers_porInt` AS `country_limitOthers_porInt`,`wolpraydb`.`c_country`.`country_limitOthers_porExt` AS `country_limitOthers_porExt`,`wolpraydb`.`c_country`.`country_limitOthers_mess` AS `country_limitOthers_mess` from `wolpraydb`.`c_country` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `c_provinces`
--
DROP TABLE IF EXISTS `c_provinces`;

DROP VIEW IF EXISTS `c_provinces`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `c_provinces`  AS  select `wolpraydb`.`c_provinces`.`provinceid` AS `provinceid`,`wolpraydb`.`c_provinces`.`provinceName` AS `provinceName`,`wolpraydb`.`c_provinces`.`stateid` AS `stateid`,`wolpraydb`.`c_provinces`.`provinceCapital` AS `provinceCapital`,`wolpraydb`.`c_provinces`.`province_limitClubs_porInt` AS `province_limitClubs_porInt`,`wolpraydb`.`c_provinces`.`province_limitClubs_porExt` AS `province_limitClubs_porExt`,`wolpraydb`.`c_provinces`.`province_limitClubs_mess` AS `province_limitClubs_mess`,`wolpraydb`.`c_provinces`.`province_limitOthers_porInt` AS `province_limitOthers_porInt`,`wolpraydb`.`c_provinces`.`province_limitOthers_porExt` AS `province_limitOthers_porExt`,`wolpraydb`.`c_provinces`.`province_limitOthers_mess` AS `province_limitOthers_mess` from `wolpraydb`.`c_provinces` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `c_state`
--
DROP TABLE IF EXISTS `c_state`;

DROP VIEW IF EXISTS `c_state`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `c_state`  AS  select `wolpraydb`.`c_state`.`stateid` AS `stateid`,`wolpraydb`.`c_state`.`stateName` AS `stateName`,`wolpraydb`.`c_state`.`countryid` AS `countryid`,`wolpraydb`.`c_state`.`state_limitClubs_porInt` AS `state_limitClubs_porInt`,`wolpraydb`.`c_state`.`state_limitClubs_porExt` AS `state_limitClubs_porExt`,`wolpraydb`.`c_state`.`state_limitClubs_mess` AS `state_limitClubs_mess`,`wolpraydb`.`c_state`.`state_limitOthers_porInt` AS `state_limitOthers_porInt`,`wolpraydb`.`c_state`.`state_limitOthers_porExt` AS `state_limitOthers_porExt`,`wolpraydb`.`c_state`.`state_limitOthers_mess` AS `state_limitOthers_mess` from `wolpraydb`.`c_state` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`idCompany`),
  ADD UNIQUE KEY `companyMail_UNIQUE` (`companyMail`),
  ADD UNIQUE KEY `company_CIF_UNIQUE` (`company_CIF`),
  ADD KEY `company_city_idx` (`idCity`);

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`custId`);

--
-- Indices de la tabla `locals`
--
ALTER TABLE `locals`
  ADD PRIMARY KEY (`idLocals`,`idCompany`,`idCity`),
  ADD UNIQUE KEY `tokem` (`locTokem`),
  ADD KEY `locals_City_idx` (`idCity`),
  ADD KEY `locals_company_idx` (`idCompany`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`idmenu`),
  ADD KEY `menu_local_idx` (`idLocal`);

--
-- Indices de la tabla `menu_platos`
--
ALTER TABLE `menu_platos`
  ADD PRIMARY KEY (`idmenu_platos`),
  ADD KEY `plato_menu_idx` (`idMenu`),
  ADD KEY `plato_grupo_idx` (`mpGrupo`);

--
-- Indices de la tabla `n_category`
--
ALTER TABLE `n_category`
  ADD PRIMARY KEY (`idCategory`,`idLocal`);

--
-- Indices de la tabla `n_localcity`
--
ALTER TABLE `n_localcity`
  ADD PRIMARY KEY (`idLocalCity`),
  ADD KEY `local_city_idx` (`idCity`),
  ADD KEY `local_local_idx` (`idLocal`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProduct`,`idLocal`),
  ADD KEY `product_category_idx` (`idLocal`,`idCategory`),
  ADD KEY `product_category_idx1` (`idCategory`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roleid`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `username` (`userName`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD KEY `user_role_fk` (`roleid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `custId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `locals`
--
ALTER TABLE `locals`
  MODIFY `idLocals` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `idmenu` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `menu_platos`
--
ALTER TABLE `menu_platos`
  MODIFY `idmenu_platos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `n_category`
--
ALTER TABLE `n_category`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `n_localcity`
--
ALTER TABLE `n_localcity`
  MODIFY `idLocalCity` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `company_city` FOREIGN KEY (`idCity`) REFERENCES `c_city` (`cityid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `locals`
--
ALTER TABLE `locals`
  ADD CONSTRAINT `locals_City` FOREIGN KEY (`idCity`) REFERENCES `c_city` (`cityid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `locals_company` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`idCompany`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_local` FOREIGN KEY (`idLocal`) REFERENCES `locals` (`idLocals`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `menu_platos`
--
ALTER TABLE `menu_platos`
  ADD CONSTRAINT `plato_grupo` FOREIGN KEY (`mpGrupo`) REFERENCES `n_category` (`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `plato_menu` FOREIGN KEY (`idMenu`) REFERENCES `menu` (`idmenu`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `n_localcity`
--
ALTER TABLE `n_localcity`
  ADD CONSTRAINT `local_city` FOREIGN KEY (`idCity`) REFERENCES `c_city` (`cityid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `local_local` FOREIGN KEY (`idLocal`) REFERENCES `locals` (`idLocals`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `product_category` FOREIGN KEY (`idCategory`) REFERENCES `n_category` (`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `user_role_fk` FOREIGN KEY (`roleid`) REFERENCES `roles` (`roleid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
