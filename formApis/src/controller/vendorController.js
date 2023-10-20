const vendorModel = require("../model/vendorModel");

const createVendor = async (req, res) => {
  try {
    const {
      vendorName,
      loc,
      vendorEmail,
      vendorPhone,
      vendorType,
      overview,
      cancellationPolicies,
      additionalPolicies,
    } = req.body;
    // console.log("gallery file", req.file);


    const createUser = await vendorModel.create({
      vendorName,
      loc,
      // profileImage: `/uploads/`+req.file.filename,
      vendorEmail,
      vendorPhone,
      vendorType,
      overview,
      cancellationPolicies,
      additionalPolicies,
    });
    await createUser.save();
    return res.status(201).json({
      status: 201,
      data: createUser,
      message: "vendor created successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

const getVendor = async (req, res) => {
  try {
    const getVendorData = await vendorModel.find();

    return res.status(200).json({
      status: 200,
      data: getVendorData,
      message: "get vendor successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

const deleteVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const getVendorData = await vendorModel.findByIdAndDelete(id);

    return res.status(200).json({
      status: 200,
      message: " vendor deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

const updateVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const vendorData = req.body;
    const updateVendor = await vendorModel.findByIdAndUpdate(
      { _id: id },
      vendorData,
      { new: true }
    );
    await updateVendor.save();
    return res.status(200).json({
      status: 200,
      data: updateVendor,
      message: " vendor deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

const getVendorById = async (req, res) => {
  try {
    const id = req.params.id;
    const getVendorData = await vendorModel.findById(id);

    return res.status(200).json({
      status: 200,
      data: getVendorData,
      message: " get vendor successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = {
  createVendor,
  getVendor,
  deleteVendor,
  updateVendor,
  getVendorById,
};
