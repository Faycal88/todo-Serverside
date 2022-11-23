const jwt = require("jsonwebtoken");
const User = require("../models/users");

function verifyToken(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    const user = jwt.decode(token);
    User.findOne({ email: user.email }).then((user) => {
      if (!user) {
        res.status(308).json({
          access: "NOT Allowed",
        });
      } else {
        next();
      }
    });
  } else {
    res.status(404).json({
      access: "NOT Allowed",
    });
  }
}

module.exports = {
  verifyToken,
};
