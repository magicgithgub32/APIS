const express = require("express");
const {
  loginUser,
  registerUser,
  getUser,
  updateUserAvatar,
} = require("../controllers/users");
const { hasValidAuthJwt } = require("../middlewares/authenticated");
const uploadFile = require("../middlewares/uploadFile");

const router = express.Router();

router.get("/", hasValidAuthJwt, getUser);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post(
  "/upload-avatar",
  hasValidAuthJwt,
  uploadFile.single("avatar"),
  updateUserAvatar
);
module.exports = router;
