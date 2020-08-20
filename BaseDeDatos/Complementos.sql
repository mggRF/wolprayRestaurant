Create database wolpraydb_v01;
use wolpraydb_v01;
CREATE USER 'wolprayusr'@'%' IDENTIFIED BY 'UsrWolpray';
GRANT ALL PRIVILEGES ON wolpraydb_v01.* TO 'wolprayusr'@'%';