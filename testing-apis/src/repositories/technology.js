const { Technology } = require("../models");

const getAllTechnologies = async () => {
  const technologies = await Technology.find().lean();
  return technologies;
};

const getTechnologyById = async (id) => {
  const technology = await Technology.findById(id).lean();
  return technology;
};

const createTechnology = async (payload) => {
  const newTech = new Technology(payload);
  await newTech.save();
  return newTech;
};

const editTechnologyById = async (id) => {
  const technology = await Technology.findByIdandUpdate(id, payload, {
    new: true,
  });
  return technology;
};

const deleteTechnologyById = async (id) => {
  const technology = await Technology.findbByIdAndDelete(id);
  return technology;
};

module.exports = {
  getAllTechnologies,
  getTechnologyById,
  createTechnology,
  editTechnologyById,
  deleteTechnologyById,
};
