const cloudinary = require("cloudinary").v2;
const multer = require("multer");



cloudinary.config({
  cloud_name: "dmtawwssh",
  api_key: "779949263232281",
  api_secret: "Zt9ETKQeTDXRkxFuo1rUuTojMvM",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 }
 });

module.exports = { upload, imageUploadUtil };
