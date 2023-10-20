const express = require("express");
const vendorController = require("../controller/vendorController");
const upload=require("../middleware/upload")
const router = express.Router();
//  upload.uploadFile.single('file'),
router.post("/vendors",  vendorController.createVendor);
router.get("/vendors", vendorController.getVendor);
router.put("/vendors/:id", vendorController.updateVendor);
router.delete("/vendors/:id", vendorController.deleteVendor);
router.get("/vendor/:id", vendorController.getVendorById);
module.exports = router;
