const mongoose = require("mongoose");

mongoose.set("strict", false);
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

mongoose
  .connect(
    "mongodb+srv://Rubcs:magic32@learningmongo.infj7gl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
