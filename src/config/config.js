const PORT = 5000;
const DATABASE = "mongodb://127.0.0.1:27017/lariv";
const JWT_KEY = "ABC12341241234";
const JWT_EXPIRE_TIME = "30d";
const COOKIE_EXPIRE_TIME = 30 * 24 * 60 * 60 * 1000; // 30 days

const WEB_CACHE = false;
const MAX_JSON_SIZE = "10MB";
const URL_ENCODE = true;

const REQUEST_TIME = 20 * 60 * 1000;
const REQUEST_NUMBER = 2000;

module.exports = {
  PORT,
  DATABASE,
  JWT_KEY,
  COOKIE_EXPIRE_TIME,
  JWT_EXPIRE_TIME,
  WEB_CACHE,
  MAX_JSON_SIZE,
  URL_ENCODE,
  REQUEST_TIME,
  REQUEST_NUMBER,
};
