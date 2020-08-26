Create database wolpraydb;


use wolpraydb;
DROP user 'wolprayusr';
CREATE USER 'wolprayusr'@'localhost' IDENTIFIED BY  'UsrWolpray';
GRANT ALL PRIVILEGES ON `wolpraydb`.* TO 'wolprayusr'@'localhost';