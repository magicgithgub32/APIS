const express = require("express");

const app = express();
app.use(express.json);

const router = express.Router();

// http://localhost:3001/api/upper?name=Leo GET
router.get("/upper", (req, res, next) => {
  try {
    const { name } = req.query;

    const upperName = name.toUpperCase();
    res.status(200).json({ data: `Te llamas ${upperName}` });
  } catch (err) {
    res.status(500).json({ data: "Query param is mandatory" });
  }
});

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

//Misma funcionalidad que abajo pero con SEARCH QUERY PARAMS

// http://localhost:3001/api/students GET
router.get("/students", (req, res, next) => {
  const { filter } = req.query;

  if (filter) {
    const filteredStudents = students.filter((student) => {
      return student.name.toUpperCase() === filter.toUpperCase();
    });
    res.status(200).json({ data: filteredStudents });
  } else {
    res.status(200).json({ data: students });
  }
});

//Misma funcionalidad de arriba pero con URL PARAMS
// router.get("/students/", (req, res, next) => {
//   res.status(200).json({ data: students });
// });

// http://localhost:3001/api/students/cristian GET
router.get("/students/:id", (req, res, next) => {
  const { id } = req.params;

  const student = students.find((student) => {
    return student.id.toString() === id;
  });

  res.status(200).json({ data: student });
});

// http://localhost:3001/api/student POST
router.post("/student", (req, res, next) => {
  const newStudent = {
    name: req.body.name,
    id: students.length,
  };

  students.push(newStudent);

  res.status(201).json({
    data: newStudent,
  });
});

router.put("/student/:id", (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

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

  const updatedStudent = students.find(
    (student) => student.id.toString() === id
  );
  res.status(200).json({ data: updatedStudent });
});

app.use("/api", router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo: http://localhost:${PORT}`);
});
