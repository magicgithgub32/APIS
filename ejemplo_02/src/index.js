const express = require("express");
require("./config/db");
const mainRouter = require("./routes/");

const app = express();
app.use(express.json);

app.use("/api", mainRouter);

//controlador de rutas no encontradas
app.use("*", (req, res, next) => {
  res.status(404).json({ data: "Not found" });
});

//controlador de errores generales de un servidor
app.use((error, req, res, next) => {
  res.status(500).json({ data: "Internal Server error" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo: http://localhost:${PORT}`);
});
