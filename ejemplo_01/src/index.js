const express = require("express");

const app = express();

const router = express.Router();

router.get("/ping", (req, res, next) => {
  res.status(200).send("Pong!");
});

app.use("/api", router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Aplicación corriendo: http://localhost:${PORT}`);
});
