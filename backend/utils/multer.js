import multer from "multer";
import path from "path";

const limits = {
  fileSize: 1024 * 1024 * 13, //=> 13mb
};

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  let validExtensions = [".jpg", ".png", ".jpeg", ".svg", ".webp", ".avif"];
  let originalname = file.originalname; // user le panda.jpg upload garyo originalname le panda.jpg store garyo
  let fileExtension = path.extname(originalname); // originalname bata extension extract garera fileExtension le .jpg store garyo

  let isValidExtension = validExtensions.includes(fileExtension); // return boolean if the fileExtension is inlcuded in validExtentions array or not
  if (isValidExtension) {
    callback(null, true);
  } else {
    callback(new Error("Invalid Extension"));
  }
};

export const upload = multer({
  storage: storage,
  limits: limits,
  fileFilter: fileFilter,
});

// .jpg , .jpeg, .svg, .png , .webp, .avif,
