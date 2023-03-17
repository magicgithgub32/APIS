var jwt = require("jsonwebtoken");
const { verifyToken } = require("../config/jwt");

const isAuthenticated = (req, res, next) => {
  const { token } = req.query;

  if (token === process.env.QUERY_AUTH_TOKEN) {
    next();
    return;
  } else {
    res.status(401).json({ data: "Wrong token authentication" });
  }
};

// El front debería mandar así el token:
// fetch("URL", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

const hasValidAuthJwt = (req, res, next) => {
  try {
    // const { token } = req.query;
    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");

    const payload = verifyToken(token);

    req.user = payload;

    next();
  } catch (err) {
    res.status(401).json({ data: "No authenticated!" });
  }
};

module.exports = {
  isAuthenticated,
  hasValidAuthJwt,
};
