require("dotenv").config(); //Lo primero de todo el código
require("./config/db");
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const mainRouter = require("./routes");

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
  })
);

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
  standardHeaders: false, // Disable Return rate limit info in the `RateLimit-*` headers -
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/api", limiter);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Methods", "Content-Type");
  next();
});
app.disable("x-powered-by");

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
