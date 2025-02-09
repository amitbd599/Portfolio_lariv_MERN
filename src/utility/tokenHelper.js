const jwt = require("jsonwebtoken");
const { JWT_EXPIRE_TIME, JWT_KEY } = require("../config/config");

exports.EncodeToken = (email, user_id) => {
  let KEY = JWT_KEY;
  let EXPIRE = { expiresIn: JWT_EXPIRE_TIME };
  let PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

exports.DecodeToken = (token) => {
  try {
    let KEY = JWT_KEY;
    return jwt.verify(token, KEY);
  } catch (e) {
    return null;
  }
};
