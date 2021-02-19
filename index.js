// server.js
const jsonServer = require("json-server");
const YAML = require("yamljs");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load("./spec.swagger.yaml");

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use(middlewares);
server.use(router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running in port: ${port}`);
});
