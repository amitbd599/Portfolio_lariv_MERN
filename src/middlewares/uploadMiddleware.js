const multer = require("multer");
const fileStorageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, "api-img__" + Date.now() + "__" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/json") {
    cb(null, true);
  } else {
    cb(new Error("Only JSON files are allowed"), false);
  }
};

module.exports.upload = multer({ storage: fileStorageEngine, fileFilter });
