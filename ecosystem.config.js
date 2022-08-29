module.exports = {
  apps: [
    {
      name: "app1",
      script: "npm start",
    },
    {
      name: "app2",
      script: "PORT=3001 npm start",
    },
  ],
};
