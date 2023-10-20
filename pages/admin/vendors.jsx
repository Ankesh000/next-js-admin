//vendors.jsx
import React, { useState, useEffect } from "react";
import Admin from "../admin";
import {
  Grid,
  Button,
  Checkbox,
  TableRow,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import VendorForm from "../form/vendorForm";
import EditVendorForm from "../form/editForm";
import Dialog from "@mui/material/Dialog";
import Axios from "axios";
import DialogContent from "@mui/material/DialogContent";
import swal from "sweetalert2";
//========================================================================================================//

const searchInputStyle1 = {
  display: "flex",
  alignItems: "left",
  margin: "20px 10px 0px 30px",
  height: "40px",
  position: "relative",
};

const searchInputStyle2 = {
  display: "flex",
  alignItems: "left",
  margin: "20px",
  height: "40px",
  position: "relative",
};

const iconStyle = {
  position: "absolute",
  left: "5px",
  top: "50%",
  transform: "translateY(-50%)",
};

const inputStyle = {
  paddingLeft: "30px",
};

const vendorButton = {
  margin: "17px 0px 0px 0px",
};

const buttonStyle = {
  borderRadius: "3px",
  marginLeft: "150px",
  cursor: "pointer",
};

const rowHoverStyle = {
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgb(244, 240, 290)",
  },
};

//========================================================================================================//

export default function Vendors() {
  const [searchByName, setSearchByName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // Store the selected image file

  const handleEditClick = (vendorId) => {
    console.log("vendorId", vendorId);
    setEditId(vendorId);
    setEditFormOpen(true);
  };

  const addVendor = (newVendor) => {
    const formData = new FormData();
    formData.append('file', selectedFile); // 'file' should match the field name expected by your server
    formData.append('vendorName', newVendor.vendorName);
    formData.append('loc', newVendor.loc);
    formData.append('additionalPolicies', newVendor.additionalPolicies);
    formData.append('cancellationPolicies', newVendor.cancellationPolicies);
    formData.append('vendorType', newVendor.vendorType);
    formData.append('overview', newVendor.overview);
    setVendors((prevVendors) => [...prevVendors, newVendor]);
  };

  const deleteVendor = async (id) => {
    try {
      console.log("delete vendor id", id);
      
      const response = await Axios.delete(
        `http://localhost:3000/api/vendors/${id}`
      );

      if (response.status === 200) {
        swal.fire({
          title: "Success",
          text: "Vendor Deleted successfully",
          icon: "success",
        });

        // Remove the deleted vendor from the vendors state
        setVendors((prevVendors) =>
          prevVendors.filter((vendor) => vendor._id !== id)
        );
      } else {
        console.error("Vendor deletion failed:", response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/api/vendors")
      .then((response) => {
        if (response.status === 200) {
          const newVendors = response.data.data;
          setVendors(newVendors);
          console.log("Vendor get successfully:", newVendors);
        } else {
          console.error("Vendor retrieval failed:", response.data.data.message);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  const handleAddVendorClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleImageUpload = (file) => {
    // This function is passed to the ImageComponent to set the selected image file
    setSelectedFile(file);
  };
  const handleEditClose = () => {
    setEditFormOpen(false);
  };
  return (
    <div>
      <div>
        <Admin />
      </div>

      <Grid container spacing={10}>
        <Grid item xs={12} sm={2}>
          <div style={searchInputStyle1}>
            <SearchIcon style={iconStyle} />
            <input
              type="text"
              placeholder="Search by Vendor Name"
              style={inputStyle}
              value={searchByName}
              onChange={(e) => setSearchByName(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={searchInputStyle2}>
            <LocationOnIcon style={iconStyle} />
            <input
              type="text"
              placeholder="Search by Location"
              style={inputStyle}
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div style={vendorButton}>
            <Button
              variant="contained"
              color="secondary"
              style={buttonStyle}
              onClick={handleAddVendorClick}
            >
              + Add Vendor
            </Button>
          </div>
          <Dialog open={open} onClose={handleClose} maxWidth="custom">
            <DialogContent style={{ maxWidth: "96%", borderRadius: "5px" }}>
              <VendorForm onClose={handleClose} addVendor={addVendor} />
              
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: "20px",
          fontFamily: "sans-serif",
        }}
      >
        {[
          "Hotels",
          "Events Space",
          "Activities",
          "Restaurants",
          "Services",
          "Transport",
          "Capacity",
        ].map((text, index) => (
          <button
            key={text}
            style={{
              width: "100px",
              height: "50px",
              margin: "6px",
              cursor: "pointer",
            }}
          >
            {text}
          </button>
        ))}
        <Checkbox label="Preferred" />
        <h4>Preferred</h4>
      </Grid>
      <Grid>
        <TableContainer
          style={{
            // maxHeight: "250px",
            // overflowY: "auto",
            margin: "20px",
            width: "98%",
          }}
        >
          <TableContainer
            style={{
              maxHeight: "250px",
              overflowY: "auto",
              margin: "10px",
              width: "95%",
            }}
          >
            <Table style={{ marginRight: "15px" }}>
              <TableHead
                style={{
                  position: "sticky",
                  top: "0px",
                  backgroundColor: "rgb(244, 246, 248)",
                }}
              >
                <TableRow>
                  {/* <TableCell>Profile</TableCell> */}
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>AdditionalPolicy</TableCell>

                  <TableCell>CancelPolicy</TableCell>
                  <TableCell>VendorType</TableCell>
                  <TableCell>Overview</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ marginRight: "10px" }}>
                <Dialog
                  open={isEditFormOpen}
                  onClose={handleEditClose}
                  maxWidth="custom"
                >
                  <DialogContent
                    style={{ maxWidth: "96%", borderRadius: "5px" }}
                  >
                    <EditVendorForm
                      editFormId={editId}
                      onClose={handleEditClose}
                      setVendors={setVendors}
                      setEditFormOpen={setEditFormOpen}
                    />
                  </DialogContent>
                </Dialog>
                {vendors.length > 0 ? (
                  vendors.map((vendor) => {
                    return (
                      <TableRow key={vendor._id} style={rowHoverStyle}>
                        {/* <TableCell>
                          <a
                        
                            href={`http://localhost:3000${vendor.profileImage}`}
                            target="_blank"
                          >
                            <Image
                              src={`http://localhost:3000${vendor.profileImage}`}
                              alt="logo"
                              width={35}
                              height={30}
                              style={{ marginRight: "10px" }}
                            />
                          </a>
                        </TableCell> */}
                        <TableCell>{vendor.vendorName}</TableCell>
                        <TableCell>{vendor.vendorPhone}</TableCell>
                        <TableCell>{vendor.loc}</TableCell>
                        <TableCell>{vendor.additionalPolicies}</TableCell>

                        <TableCell>{vendor.cancellationPolicies}</TableCell>
                        <TableCell>{vendor.vendorType}</TableCell>
                        <TableCell>{vendor.overview}</TableCell>
                        <TableCell>
                          {" "}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <EditIcon
                              onClick={() => handleEditClick(vendor._id)}
                              style={{ cursor: "pointer", marginRight: "10px" }}
                            />
                            <DeleteIcon
                              onClick={() => deleteVendor(vendor._id)}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow key="no-vendors">
                    <TableCell colSpan={7} style={{ textAlign: "center" }}>
                      No vendors available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </TableContainer>
      </Grid>
    </div>
  );
}

// {
//   selectedVendor && (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogContent>
//         <VendorForm
//           vendor={selectedVendor}
//           onEditVendor={handleEditVendor}
//           onClose={handleClose}
//         />
//       </DialogContent>
//     </Dialog>
//   );
// }

// {
//   deleteConfirmation && (
//     <Dialog
//       open={deleteConfirmation}
//       onClose={() => setDeleteConfirmation(false)}
//     >
//       <DialogContent>
//         <p>Are you sure you want to delete this vendor?</p>
//         <Button onClick={handleConfirmDelete}>Yes, Delete</Button>
//         <Button onClick={() => setDeleteConfirmation(false)}>Cancel</Button>
//       </DialogContent>
//     </Dialog>
//   );
// }
