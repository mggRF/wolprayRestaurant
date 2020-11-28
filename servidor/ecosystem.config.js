//require('dotenv').config();


module.exports = {
  apps: [
    {
      name: "API",
      script: 'index.js',
      version: "0.0.1",
      watch: true,
      "env": {
        "NODE_ENV": "development"
      },
      "env_production": {
        "NODE_ENV": "production",
        "PORT": 3800,
      },
      "env_stage": {
        "NODE_ENV": "stage",
        "PORT": 3900,
      }
    }],

  deploy: {
    production: {
      user: 'centos',
      host: '51.210.241.194',
      port:"8222",
      ref: 'origin/master',
      repo: 'git@github.com:mggRF/wolprayRestaurant/servidor.git',
      path: '/home/api/servidorRestaurant',
      key: "C:\\Users\\migarcia\\.ssh\\id_rsaCentos.pub",
      ssh_options: ["ForwardAgent=yes","Port=8222","StrictHostKeyChecking=no"],
      "post-deploy": " npm install ; pm2 startOrRestart ecosystem.config.js --env production",
      "env": {
        NODE_ENV:"production",
        //DB_PASS: process.env.DB_PASS,
      }
      // staging : {
      //   user : "node",
      //   host : "212.83.163.1",
      //   ref  : "origin/master",
      //   repo : "git@github.com:repo.git",
      //   path : "/var/www/development",
      //   ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      //   'post-deploy' : "pm2 startOrRestart ecosystem.json --env dev",
      //   env  : {
      //     NODE_ENV: "staging"
      //   }
    }
  }
};