const {
  getUSerByIdFromDB,
  updateUserWithAvatarInDB,
} = require("../repositories/users");
const { hashPassword, verifyPassword } = require("../config/password");
const { signToken } = require("../config/jwt");
const {
  createUsertInDB,
  getUSerByEmailFromDB,
} = require("../repositories/users");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await hashPassword(password);

    const newUser = await createUsertInDB({ email, password: hash });
    res.status(201).json({ data: newUser });
  } catch (err) {
    console.log("Error creating user:", err);
    res.status(400).json({ data: "Error registering user" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await getUSerByEmailFromDB(email);

  if (!user) {
    res.status(401).json({ data: "User doesn't exist" });
    return;
  }

  const isValidPassword = await verifyPassword(password, user.password);

  if (!isValidPassword) {
    res.status(401).json({ data: "Incorrect email or password" });
    return;
  }
  const token = signToken({ id: user._id });
  const { password: unusedPassword, ...restUser } = user;
  res.status(200).json({
    data: {
      token,
      user: restUser,
    },
  });
};

const getUser = async (req, res) => {
  const { id } = req.user;

  const user = await getUSerByIdFromDB(id);
  res.status(200).json({ data: user });
};

const updateUserAvatar = async (req, res, next) => {
  const { path } = req.file;
  const { id } = req.user;

  const user = await updateUserWithAvatarInDB(id, path);
  res.status(201).json({ data: path });
};

module.exports = { registerUser, loginUser, getUser, updateUserAvatar };
