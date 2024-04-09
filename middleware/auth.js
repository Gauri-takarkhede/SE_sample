const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (role) {
  return function (req, res, next) {
    // Get a token from a header
    // const {token } = req.header('x-auth-token'); //old method deprecated
    // const token = req.headers['x-auth-token'];//new method and should be used
    const token = req.header("x-auth-token");

    // Check if token doesnt exists
    if (!token) {
      return res
        .status(401)
        .json({ msg: "Unauthorized request , no token found" });
    }
    try {
      const decoded = jwt.verify(token, config.get("jwtsecret"));
      // req.student = decoded.user;
      switch (role) {
        case "student":
          req.student = decoded.Student;
          break;

        case "faculty":
          req.faculty = decoded.Faculty;
          break;

        case "others": //other refers student section
          req.others = decoded.Others;
          break;
        default:
          throw new Error("Invalid role specified");
      }
      next(); //Next function is used to pass control to the next middleware function in the request-response
      // cycle.
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid!" });
    }
  };
};
