use wolpraydb_v01;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE  `users_clubs`;
TRUNCATE TABLE  `club_music`;
TRUNCATE TABLE  `promotes`;
TRUNCATE TABLE  `promotions`;
TRUNCATE TABLE  `reservations`;
TRUNCATE TABLE  `events`;
TRUNCATE TABLE  `clubs`;
TRUNCATE TABLE  `companies`;
TRUNCATE TABLE  `products`;


TRUNCATE TABLE  `users`;
TRUNCATE TABLE  `roles`;

TRUNCATE TABLE  `categories`;
TRUNCATE TABLE  `n_category`;
TRUNCATE TABLE  `n_dressCode`;
TRUNCATE TABLE  `n_music`;

TRUNCATE TABLE  `c_country`;
TRUNCATE TABLE  `c_state`;
TRUNCATE TABLE  `c_provinces`;
TRUNCATE TABLE  `c_city`;
SET FOREIGN_KEY_CHECKS = 1;