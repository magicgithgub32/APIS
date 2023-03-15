const mongoose = require("mongoose");

mongoose.set("strict", false);
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

mongoose
  .connect(
    "mongodb+srv://Rubcs:magic32@learningmongo.infj7gl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectado a mongoDB");
  })
  .catch((err) => {
    console.log("Ha ocurrido un error al conectar con Mongo:", err);
  });

//Ejemplo de query para mongoose:
//const students = await.Student.find().lean()
//res.status(200).json({data: students})
