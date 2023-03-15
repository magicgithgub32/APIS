const mongoose = require("mongoose");

mongoose.set("strict", false);
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

mongoose.connect("mongodb://localhost:27017/express-learning-01").then(() => {
  console.log("Conectado a MongoDB");
});

const students = await Student.find().lean();
res.status(200).json({ data: students });
