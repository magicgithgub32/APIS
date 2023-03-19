const express = require("express");
require("./src/config/db");
const techRepository = require("./src/repositories/technology");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get("/technologies", async (req, res, next) => {
  const technologies = await techRepository.getAllTechnologies();
  res.status(200).json({ data: technologies });
});

router.get("/technologies/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const technology = await techRepository.getTechnologyById(id);
    res.status(200).json({ data: technology });
  } catch (err) {
    next(err);
  }
});

router.post("/technologies", async (req, res) => {
  const newTech = await techRepository.createTechnology({
    name: req.body.name,
    docs: req.body.docs,
    learnt: false,
  });
  res.status(200).json({ data: newTech });
});

router.put("/technologies/:id", async (req, res, next) => {
  const { id } = req.params;

  const updatedTechnology = {
    ...(req.body.name ? { name: req.body.name } : {}),
    ...(req.body.docs ? { name: req.body.docs } : {}),
    ...(req.body.learnt ? { name: req.body.learnt } : {}),
  };

  try {
    const technology = await techRepository.editTechnologyById(
      id,
      updatedTechnology
    );
    res.status(200).json({ data: technology });
  } catch (err) {
    next(err);
  }
});

router.delete("/technologies/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const technology = await techRepository.deleteTechnologyById(id);
    res.status(200).json({ data: technology });
  } catch (err) {
    next(err);
  }
});

app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).json({ data: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ data: err.message });
});

module.exports = app;
