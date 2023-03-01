//fake database
let students = [
  {
    id: 1,
    name: "Alberto",
  },
  {
    id: 2,
    name: "Cristian",
  },
  {
    id: 3,
    name: "Jose",
  },
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

const getStudentbyId = (req, res, next) => {
  const { id } = req.params;

  const student = students.find((student) => {
    return student.id.toString() === id;
  });

  res.status(200).json({ data: student });
};

const createStudent = (req, res, next) => {
  const newStudent = {
    name: req.body.name,
    id: students.length + 1,
  };

  students.push(newStudent);

  res.status(201).json({
    data: newStudent,
  });
};

const updateStudentById = (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  //Simulando la actualización en DB
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

  //Simulo la búsqueda del student en DB actualizada
  const updatedStudent = students.find(
    (student) => student.id.toString() === id
  );
  res.status(200).json({ data: updatedStudent });
};

const deleteStudent = (req, res, next) => {
  const { id } = params;

  students = student.filter((student) => {
    return student.id.toString() !== id;
  });
};

module.exports = {
  getAllStudents,
  getStudentbyId,
  createStudent,
  updateStudentById,
  deleteStudent,
};
