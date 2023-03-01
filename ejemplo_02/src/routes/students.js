const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudentbyId,
  createStudent,
  updateStudentById,
  deleteStudent,
} = require("../controllers/students");

router.get("/", getAllStudents);
router.get("/:id", getStudentbyId);
router.post("/", createStudent);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudent);

module.exports = router;
