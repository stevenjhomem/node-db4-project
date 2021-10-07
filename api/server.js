const express = require("express");
const router = require("express").Router();
const recipesRouter = require("../api/recipes/recipes-router");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);

router.use("*", (req, res) => {
    res.json({ api: "is up and running!" });
  });

module.exports = server;
