const express = require("express");
require("./config/db");
const mainRouter = require("./routes");

const app = express();
app.use(express.json());

app.use("/api", mainRouter);

//Controlador de rutas no encontradas
app.use("*", (req, res, next) => {
  res.status(404).json({ data: "Not found" });
});

//Controlador de errores generales del servidor
app.use((error, req, res, next) => {
  console.log(">>>>>Server error:", error);
  res.status(500).json({ data: "Internal server error" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
