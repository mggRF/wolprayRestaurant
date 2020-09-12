require('dotenv').config();


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
      user: 'wolpray',
      host: 'wolpray.es',
      ref: 'origin/master',
      repo: 'https://github.com/mggRF/servidor.git',
      path: '/home/wolpraynode/servidor',
      ssh_options: "StrictHostKeyChecking=no",
      "post-deploy": ". ~/npm install && pm2 startOrRestart ecosystem.json --env production",
      "env": {
        DB_HOST: process.env.DB_HOST,
        DB_PASS: process.env.DB_PASS,
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
