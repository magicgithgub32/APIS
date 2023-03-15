const {
  getAllStudentsFromDB,
  getStudentbyIdFromDB,
  createStudentInDB,
  updateStudentByIdInDB,
  deleteStudentFromDB,
} = require("../repositories/students");

const getAllStudents = async (req, res, next) => {
  const { filter } = req.query;

  const students = await getAllStudentsFromDB(filter);
  res.status(200).json({ data: students });
};

const getStudentById = async (req, res, next) => {
  const { id } = req.params;
  const student = await getStudentbyIdFromDB(id);
  res.status(200).json({ data: student });
};

const createStudent = async (req, res, next) => {
  const newStudent = await createStudentInDB({
    name: req.body.name,
  });
  res.status(201).json({ data: newStudent });
};

const updateStudentById = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const student = await updateStudentByIdInDB(id, { name });
  res.status(200).json({ data: student });
};

const deleteStudent = async (req, res, next) => {
  const { id } = req.params;

  await deleteStudentFromDB(id);
  res.status(200).json({ data: "ok" });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudent,
};
