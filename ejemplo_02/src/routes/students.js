const express = require("express");

const {
  getAllStudents,
  getStudentbyId,
  createStudent,
  updateStudentById,
  deleteStudent,
} = require("../controllers/students");

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentbyId);
router.post("/", createStudent);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudent);

module.exports = router;
