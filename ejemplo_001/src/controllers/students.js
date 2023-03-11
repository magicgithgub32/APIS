//fake database
let students = [
  { id: 1, name: "Alberto" },
  { id: 2, name: "Cristian" },
  { id: 3, name: "Jose" },
];

const getAllStudents = (req, res, next) => {
  const { filter } = req.query;

  if (filter) {
    const filteredStudents = students.filter((student) => {
      return student.name.toUpperCase() === filter.toUpperCase();
    });
    res.status(200).json({ data: filteredStudents });
  } else {
    res.status(200).json({ data: students });
  }
};

const getStudentById = (req, res, next) => {
  const { id } = req.params;

  const student = students.find((student) => {
    return student.id.toString() === id;
  });
  res.status(200).json({ data: student });
};

const createStudent = (req, res, next) => {
  console.log(req.body);

  const newStudent = {
    name: req.body.name,
    id: Date.now(),
  };
  students.push(newStudent);

  res.status(201).json({ data: newStudent });
};

const updateStudentById = (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  // Simulando la actualización en la DB
  students = students.map((student) => {
    if (student.id.toString() === id) {
      return {
        ...student,
        name,
      };
    } else {
      return student;
    }
  });

  // Simulando la búsqueda del elemento en DB atualizada.
  const updatedStudent = students.find(
    (student) => student.id.toString() === id
  );

  res.status(200).json({ data: updatedStudent });
};

const deleteStudent = (req, res, next) => {
  const { id } = req.params;

  students = students.filter((student) => {
    return student.id.toString() !== id;
  });

  res.status(200).json({ data: "Deleted ok" });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudent,
};
