require("dotenv").config();

const express = require("express");

const cors = require("cors");

const router = require("./Routes/router");

require("./DB/connection");

const studServer = express();

studServer.use(cors());

studServer.use(express.json());

studServer.use(router);

const PORT = 3000 || process.env.PORT

studServer.listen(PORT, () => {
  console.log(`Project fair Server running on PORT: ${PORT}`);
});

studServer.get("/", (req, res) => {
  res.send("<h1>Project fair Server running... wating for client<h1/>");
});
