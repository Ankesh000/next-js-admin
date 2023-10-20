import { z } from "zod";

const VendorFormSchema = z.object({
  loc: z.string().min(1, { message: "Location is required and must be at least 1 character" }),
  vendorName: z.string().min(1, { message: "Vendor Name is required and must be at least 1 character" }),
  vendorPhone: z.string().refine(value => /^[0-9]{10}$/.test(value), { message: "Vendor Phone is required and must be a 10-digit number" }),
  vendorEmail: z.string().email({ message: "Vendor Email is required and must be a valid Email" }),
  vendorType: z.enum([
    "Hotels",
    "Events Space",
    "Activities",
    "Restaurants",
    "Services",
    "Transport",
    "Capacity",
  ]).refine(value => {
    if (!["Hotels", "Events Space", "Activities", "Restaurants", "Services", "Transport", "Capacity"].includes(value)) {
      return "Invalid Vendor Type";
    }
    return true;
  }),
  overview: z.string().min(20, { message: "Overview must be at least 20 characters" }),
  cancellationPolicies: z.string().min(20, { message: "Cancellation Policies must be at least 20 characters" }),
  additionalPolicies: z.string().min(20, { message: "Additional Policies must be at least 20 characters" })
  ,

});

export default VendorFormSchema;
