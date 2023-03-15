const express = require("express");
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudent,
} = require("../controllers/students");
const { isAuthenticated } = require("../middlewares/authenticated");

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", isAuthenticated, createStudent);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudent);

module.exports = router;
