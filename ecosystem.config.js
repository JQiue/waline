module.exports = {
  apps: [
    {
      name: "waline",
      script: "./node_modules/@waline/vercel/vanilla.js",
      max_memory_restart: "100M",
      error_file: "./pm2.error.log",
      out_file: "./pm2.out.log",
    },
  ],
};
