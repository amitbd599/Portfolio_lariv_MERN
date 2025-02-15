const multer = require("multer");
const fileStorageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const sanitizedName = file.originalname.replace(/\s+/g, "");
    cb(null, "api-file_" + Date.now() + "__" + sanitizedName);
  },
});

module.exports.upload = multer({ storage: fileStorageEngine });
