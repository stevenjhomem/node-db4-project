require("dotenv").config();

const { config } = require("dotenv");
const server = require("./api/server");

const port = process.env.PORT;

server.listen(port, () => {
  `\n API running on Port ${port}`;
});
