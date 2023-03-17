const { User } = require("../models/mongo");

//El payload será { email, password } donde el password será el hash
const createUsertInDB = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw new Error("User already exists with that email");
  }

  const newUser = new User(payload);
  await newUser.save();

  const { password, ...rest } = newUser.toObject();

  return rest;
};

const getUSerByEmailFromDB = async (email) => {
  const user = await User.findOne({ email }).lean();
  return user;
};

const getUSerByIdFromDB = async (id) => {
  const user = await User.findById({ id }).lean();
  const { password, ...rest } = user;
  return rest;
};

const updateUserWithAvatarInDB = async (id, path) => {
  await User.updateOne({ _id: id }, { avatar: path });
};

module.exports = {
  createUsertInDB,
  getUSerByEmailFromDB,
  getUSerByIdFromDB,
  updateUserWithAvatarInDB,
};
