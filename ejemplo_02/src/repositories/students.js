const { Student } = require("../models/mongo");

const getAllStudentsFromDB = async (filter) => {
  const nameFilterOption = {
    name: { $regex: new RegExp(filter, "i") },
  };

  const students = await Student.find(filter ? nameFilterOption : {});
  return students;
};

const getStudentbyIdFromDB = async (id) => {
  const student = await Student.findById(id);
  return student;
};

const createStudentInDB = async (payload) => {
  const newStudent = new Student(payload);
  await newStudent.save();

  return newStudent;
};

const updateStudentByIdInDB = async (id, payload) => {
  const student = await Student.findByIdAndUpdate(id, payload, { new: true });
  return student;
};

const deleteStudentFromDB = async (id) => {
  await Student.deleteOne({ _id: id });
};

module.exports = {
  getAllStudentsFromDB,
  getStudentbyIdFromDB,
  createStudentInDB,
  updateStudentByIdInDB,
  deleteStudentFromDB,
};
