ALTER TABLE `c_city` 
    ADD `city_limit_por` INT(3) NOT NULL DEFAULT '0' 
        COMMENT 'Limite en porcentaje' AFTER `longitude`, 
    ADD `city_limit_mess` VARCHAR(500) NOT NULL DEFAULT '' 
        COMMENT 'Mensaje del limite' AFTER `city_limit_por`;

ALTER TABLE `c_country` 
    ADD `country_limit_por` INT(3) NOT NULL DEFAULT '0' 
        COMMENT 'Limite en porcentaje' AFTER `countryName`, 
    ADD `country_limit_mess` VARCHAR(500) NOT NULL DEFAULT '' 
        COMMENT 'Mensaje del limite' AFTER `country_limit_por`;


ALTER TABLE `c_provinces` 
    ADD `province_limit_por` INT(3) NOT NULL DEFAULT '0' 
        COMMENT 'Limite en porcentaje' AFTER `provinceCapital`, 
    ADD `province_limit_mess` VARCHAR(500) NOT NULL DEFAULT '' 
        COMMENT 'Mensaje del limite' AFTER `province_limit_por`;

ALTER TABLE `c_state` 
    ADD `state_limit_por` INT(3) NOT NULL DEFAULT '0' 
        COMMENT 'Limite en porcentaje' AFTER `countryid`, 
    ADD `state_limit_mess` VARCHAR(500) NOT NULL DEFAULT '' 
        COMMENT 'Mensaje del limite' AFTER `state_limit_por`;

ALTER TABLE `clubs` 
    ADD `club_limit_por` INT(3) NOT NULL DEFAULT '0' 
        COMMENT 'Limite en porcentaje' AFTER `maxPeople`, 
    ADD `club_limit_mess` VARCHAR(500) NOT NULL DEFAULT '' 
        COMMENT 'Mensaje del limite' AFTER `club_limit_por`;
