require("dotenv").config();

const env = {
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_DB: process.env.MYSQL_HOST,
  MYSQL_USER: process.env.MYSQL_HOST,
  MYSQL_PASSWORD: process.env.MYSQL_HOST,
  SMTP_SERVICE: process.env.MYSQL_HOST,
  SMTP_USER: process.env.MYSQL_HOST,
  SMTP_PASS: process.env.MYSQL_HOST,
  SITE_NAME: process.env.MYSQL_HOST,
  SITE_URL: process.env.MYSQL_HOST,
  AUTHOR_EMAIL: process.env.MYSQL_HOST,
  SENDER_EMAIL: process.env.MYSQL_HOST,
  SENDER_NAME: process.env.MYSQL_HOST,
  LEVELS: process.env.MYSQL_HOST,
  DISABLE_REGION: process.env.MYSQL_HOST,
  IPQPS: process.env.MYSQL_HOST,
};

module.exports = {
  apps: [
    {
      name: "waline",
      script: "./node_modules/@waline/vercel/vanilla.js",
      max_memory_restart: "100M",
      error_file: "./pm2.error.log",
      out_file: "./pm2.out.log",
      env,
    },
  ],
};
