const express = require("express");

const students = require('../data/studentsModel')

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/students", async (req, res) => {
  const rows = await students.getAll();
  res.status(200).json(rows);
});

module.exports = server;
