var jwt = require("jsonwebtoken");
const { verifyToken } = require("../config/jwt");
const TOKEN_SECRET = "supersecret_123456?!";

const AUTH_TOKEN = "MY_SECRET_TOKEN";

const isAuthenticated = (req, res, next) => {
  const { token } = req.query;

  if (token === AUTH_TOKEN) {
    next();
    return;
  } else {
    res.status(401).json({ data: "Wrong token authentication" });
  }
};

const hasValidAuthJwt = (req, res, next) => {
  (req, res, next) => {
    try {
      const { token } = req.query;
      const payload = verifyToken(token);

      req.user = payload;

      next();
    } catch (err) {
      res.status(401).json({ data: "No authenticated!" });
    }
  };
};

module.exports = {
  isAuthenticated,
  hasValidAuthJwt,
};
