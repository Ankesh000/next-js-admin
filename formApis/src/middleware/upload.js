const multer = require("multer");
const path = require("path");
const { ObjectId } = require("mongodb");

//==========================================================================================================================//

/* This code is setting up a file upload functionality using the multer library*/

const imageExtensionList = [
  "jpg",
  "jpeg",
  "jfif",
  "pjpeg",
  "pjp",
  "png",
  "tiff",
  "dib",
  "ico",
  "cur",
  "xbm",
  "tiff",
  "tif",
  "bmp",
  "bmpf",
  "ico",
];

const imageFilter = (req, file, cb) => {
  const fileExtension = file.originalname.split(".").pop().toLowerCase();

  if (imageExtensionList.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(
      "Please upload only image files with allowed extensions: " +
        imageExtensionList.join(", "),
      false
    );
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("hiii"), cb(null, path.join(__dirname, "../../uploads"));
  },

  filename: (req, file, cb) => {
    let galleryId = new ObjectId();
    let gallery ="profile" + galleryId + path.extname(file.originalname);
    req.file = gallery;
    console.log("gallery", gallery);
    cb(null, gallery);
  },
});

const uploadFile = multer({ storage: storage, fileFilter: imageFilter });



//======================================================================================================================//
module.exports = { uploadFile };