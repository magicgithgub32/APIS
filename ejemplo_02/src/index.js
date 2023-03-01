const express = require("express");
const mainRouter = require("./routes/");

const app = express();
app.use(express.json);

app.use("/api", mainRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo: http://localhost:${PORT}`);
});
