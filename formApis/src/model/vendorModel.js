const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    vendorName: { type: String, required: true }, 
    profileImage:{type: String, required: false},
    loc: {
      type: String,
      required:true
    },
    vendorEmail:{
      type: String,
      required:true
    },
    vendorPhone:{
      type: String,
      required:true
    },
    vendorType: {
      type: String,
      enum: [
        "Hotels",
        "Events Space",
        "Activities",
        "Restaurants",
        "Services",
        "Transport",
        "Capacity",
      ],
      default: null,
    },
    overview: { type: String, required: true },
    cancellationPolicies: { type: String, required: true },
    additionalPolicies: { type: String, required: true },
  },
  { timestamps: true }
);



const VendorModel = mongoose.model("Vendor", vendorSchema);

module.exports = VendorModel;
