require("dotenv").config();

const {
  MYSQL_HOST,
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASSWORD,
  SMTP_SERVICE,
  SMTP_USER,
  SMTP_PASS,
  SITE_NAME,
  SITE_URL,
  AUTHOR_EMAIL,
  SENDER_EMAIL,
  SENDER_NAME,
  LEVELS,
  DISABLE_REGION,
  IPQPS,
} = process.env;

module.exports = {
  apps: [
    {
      name: "waline",
      script: "./node_modules/@waline/vercel/vanilla.js",
      max_memory_restart: "100M",
      error_file: "./pm2.error.log",
      out_file: "./pm2.out.log",
      env: {
        MYSQL_HOST,
        MYSQL_DB,
        MYSQL_USER,
        MYSQL_PASSWORD,
        SMTP_SERVICE,
        SMTP_USER,
        SMTP_PASS,
        SITE_NAME,
        SITE_URL,
        AUTHOR_EMAIL,
        SENDER_EMAIL,
        SENDER_NAME,
        LEVELS,
        DISABLE_REGION,
        IPQPS,
      },
    },
  ],
};
