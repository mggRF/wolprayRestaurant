Create database wolpraydb;
use wolpraydb;

CREATE USER 'wolprayusr'@'localhost' IDENTIFIED BY 'UsrWolpray';
GRANT ALL PRIVILEGES ON wolpraydb.* TO 'wolprayusr'@'localhost';
//ALTER USER 'wolprayusr'@'localhost' IDENTIFIED WITH mysql_native_password BY 'UsrWolpray';
//ALTER USER 'wolprayusr'@'localhost' IDENTIFIED BY 'UsrWolpray';
flush privileges;