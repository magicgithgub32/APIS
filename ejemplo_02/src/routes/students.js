const express = require("express");
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudent,
} = require("../controllers/students");

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudent);

module.exports = router;
