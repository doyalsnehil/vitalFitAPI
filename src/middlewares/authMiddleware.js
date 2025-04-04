const jwt = require("jsonwebtoken");
const { sendErrorResponse } = require("../utils/errorHandler");
require("dotenv").config();

const verifyToken = function (req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    sendErrorResponse(res, 401, "invalid token");
  } else {
    try {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        next();
      });
    } catch (err) {
      if (err) {
        console.log(err);
        sendErrorResponse(res, 401, "Access Denied");
      }
    }
  }
};

module.exports = {
  verifyToken,
};
