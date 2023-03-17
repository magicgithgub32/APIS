const mongoose = require("mongoose");

const emptySchema = new mongoose.Schema({});
const Technology = mongoose.model("Technology", emptySchema);

module.exports = { Technology };
