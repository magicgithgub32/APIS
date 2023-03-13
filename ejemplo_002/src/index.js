const express = require("express");

const app = express();
app.use(express.json());

const router = express.Router();

//http://localhost:3001/api/upper?name=alberto GET
router.get("/upper", (req, res, next) => {
  //?name=alberto
  try {
    const { name } = req.query;

    const upperName = name.toUpperCase();
    res.status(200).json({ data: `Te llamas ${upperName}` });
  } catch (err) {
    res.status(500).json({ data: "Query param name is mandatory" });
  }
});

//Fake database
const students = [
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

//http://localhost:3001/api/students GET
http: router.get("/students", (req, res, next) => {
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

// router.get("/students", (req, res, next) => {
//   res.status(200).json({ data: students });
// });

// http://localhost:3001/api/students/1 GET
router.get("/students/:id", (req, res, next) => {
  const { id } = req.params;
  const student = students.find((student) => {
    return student.id.toString() === id;
  });

  res.status(200).json({ data: student });
});

// http://localhost:3001/api/student POST
router.post("/student", (req, res, next) => {
  console.log(req.body);

  const newStudent = {
    name: req.body,
    id: students.length,
  };
  students.push(newStudent);

  res.status(201).json({
    data: newStudent,
  });
});

app.use("/api", router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
