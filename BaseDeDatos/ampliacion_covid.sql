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
-- fase 2 --
ALTER TABLE `clubs` CHANGE `maxPeople` `maxPeopleInt` INT(11) NULL DEFAULT NULL; 
ALTER TABLE `clubs` ADD `maxPeopleExt` INT NOT NULL COMMENT 'Terrazas' AFTER `maxPeopleInt`; 
ALTER TABLE `clubs` CHANGE `maxPeopleInt` `maxPeopleInt` INT(11) NULL DEFAULT '0'; 
ALTER TABLE `clubs` CHANGE `maxPeopleExt` `maxPeopleExt` INT(11) NOT NULL DEFAULT '0' COMMENT 'Terrazas'; 
ALTER TABLE `clubs` CHANGE `club_limit_por` `club_limit_porInt` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje zona interna'; 
ALTER TABLE `clubs` ADD `club_limit_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para  plazas externas' AFTER `club_limit_porInt`; 

ALTER TABLE `c_city` CHANGE `city_limit_por` `city_limitClubs_por` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs'; 
ALTER TABLE `c_city` CHANGE `city_limit_mess` `city_limitClubs_mess` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL DEFAULT '' COMMENT 'Mensaje del limite para clubs'; 
ALTER TABLE `c_city` CHANGE `city_limitClubs_por` `city_limitClubs_porInt` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs plazas internas'; 
ALTER TABLE `c_city` ADD `city_limitClubs_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs plazas externas' AFTER `city_limitClubs_porInt`; 
ALTER TABLE `c_city` ADD `city_limitOthers_porInt` INT NOT NULL DEFAULT '0' COMMENT 'Limite Otros (bares, restaurantes, interno' AFTER `city_limitClubs_mess`; 
ALTER TABLE `c_city` ADD `city_limitOthers_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite Otros (bares, restaurantes, externo' AFTER `city_limitOthers_porInt`; 
ALTER TABLE `c_city` ADD `city_limitOthers_mess` VARCHAR(500) NOT NULL DEFAULT '' AFTER `city_limitOthers_porExt`; 

ALTER TABLE `c_country` CHANGE `country_limit_por` `country_limitClubs_por` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs'; 
ALTER TABLE `c_country` CHANGE `country_limit_mess` `country_limitClubs_mess` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL DEFAULT '' COMMENT 'Mensaje del limite para clubs'; 
ALTER TABLE `c_country` CHANGE `country_limitClubs_por` `country_limitClubs_porInt` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs plazas internas'; 
ALTER TABLE `c_country` ADD `country_limitClubs_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs plazas externas' AFTER `country_limitClubs_porInt`; 
ALTER TABLE `c_country` ADD `country_limitOthers_porInt` INT NOT NULL DEFAULT '0' COMMENT 'Limite Otros (bares, restaurantes, interno' AFTER `country_limitClubs_mess`; 
ALTER TABLE `c_country` ADD `country_limitOthers_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite Otros (bares, restaurantes, externo' AFTER `country_limitOthers_porInt`; 
ALTER TABLE `c_country` ADD `country_limitOthers_mess` VARCHAR(500) NOT NULL DEFAULT '' AFTER `country_limitOthers_porExt`; 

ALTER TABLE `c_provinces` CHANGE `province_limit_por` `province_limitClubs_por` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs'; 
ALTER TABLE `c_provinces` CHANGE `province_limit_mess` `province_limitClubs_mess` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL DEFAULT '' COMMENT 'Mensaje del limite para clubs'; 
ALTER TABLE `c_provinces` CHANGE `province_limitClubs_por` `province_limitClubs_porInt` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs plazas internas'; 
ALTER TABLE `c_provinces` ADD `province_limitClubs_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs plazas externas' AFTER `province_limitClubs_porInt`; 
ALTER TABLE `c_provinces` ADD `province_limitOthers_porInt` INT NOT NULL DEFAULT '0' COMMENT 'Limite Otros (bares, restaurantes, interno' AFTER `province_limitClubs_mess`; 
ALTER TABLE `c_provinces` ADD `province_limitOthers_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite Otros (bares, restaurantes, externo' AFTER `province_limitOthers_porInt`; 
ALTER TABLE `c_provinces` ADD `province_limitOthers_mess` VARCHAR(500) NOT NULL DEFAULT '' AFTER `province_limitOthers_porExt`; 

ALTER TABLE `c_state` CHANGE `state_limit_por` `state_limitClubs_por` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs'; 
ALTER TABLE `c_state` CHANGE `state_limit_mess` `state_limitClubs_mess` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL DEFAULT '' COMMENT 'Mensaje del limite para clubs'; 
ALTER TABLE `c_state` CHANGE `state_limitClubs_por` `state_limitClubs_porInt` INT(3) NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs plazas internas'; 
ALTER TABLE `c_state` ADD `state_limitClubs_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite en porcentaje para clubs plazas externas' AFTER `state_limitClubs_porInt`; 
ALTER TABLE `c_state` ADD `state_limitOthers_porInt` INT NOT NULL DEFAULT '0' COMMENT 'Limite Otros (bares, restaurantes, interno' AFTER `state_limitClubs_mess`; 
ALTER TABLE `c_state` ADD `state_limitOthers_porExt` INT NOT NULL DEFAULT '0' COMMENT 'Limite Otros (bares, restaurantes, externo' AFTER `state_limitOthers_porInt`; 
ALTER TABLE `c_state` ADD `state_limitOthers_mess` VARCHAR(500) NOT NULL DEFAULT '' AFTER `state_limitOthers_porExt`; 
