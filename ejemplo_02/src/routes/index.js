const express = require("express");
const studentRouter = require("./students");
const petRouter = require("./pets");
const authRouter = require("./auth");

const router = express.Router();

router.use("/students", studentRouter);
router.use("/pets", petRouter);
router.use("/auth", authRouter);

module.exports = router;
