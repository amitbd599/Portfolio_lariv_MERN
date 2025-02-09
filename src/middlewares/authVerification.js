const { DecodeToken } = require("../utility/TokenHelper");
module.exports = (req, res, next) => {
  // Receive Token
  let token = req.headers["token"];
  if (!token) {
    token = req.cookies["token"];
  }

  // Token Decode
  let decoded = DecodeToken(token);

  console.log(decoded);

  // Request Header Email+UserID Add
  if (decoded === null) {
    return res.status(401).json({ status: false, message: "Unauthorized" });
  } else {
    let email = decoded["email"];
    let user_id = decoded["user_id"];
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
