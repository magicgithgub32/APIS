const express = require("express");
const { getAllStudents } = require("../controllers/students");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ data: [] });
});

module.exports = router;
