const express = require("express");
const { loginUser, registerUser, getUser } = require("../controllers/users");
const { hasValidAuthJwt } = require("../middlewares/authenticated");

const router = express.Router();

router.get("/", hasValidAuthJwt, getUser);

router.post("/login", loginUser);

router.post("/register", registerUser);

module.exports = router;
