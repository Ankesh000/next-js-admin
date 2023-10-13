import React, { useState } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VendorForm from "../form/vendorForm";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

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

const tableData = [
  {
    Name: "Vendor 1",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
  { Name: "Vendor 2", City: "City B", Rating: 9, Capacity: 1000 },
  { Name: "Vendor 3", City: "City C", Rating: 9, Capacity: 1000 },
  {
    Name: "Vendor 1",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
  {
    Name: "Vendor 1",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
  {
    Name: "Vendor 1",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
  {
    Name: "Vendor 1",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
  {
    Name: "Vendor z",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
  {
    Name: "Vendor 1",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
  {
    Name: "Vendor 1",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
  {
    Name: "Vendor 1",
    City: "City A",
    Rating: 10,
    Capacity: 1000,
    status: "Preferred",
  },
];

//========================================================================================================//

export default function Vendors() {

  const [searchByName, setSearchByName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddVendorClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleAddVendor = (data) => {
   
    console.log("Adding vendor:", data);
  };
  

  const filteredData = tableData.filter((row) => {
    if (
      row.Name.toLowerCase().includes(searchByName.toLowerCase()) &&
      (!searchLocation ||
        row.City.toLowerCase().includes(searchLocation.toLowerCase()))
    ) {
      return true;
    }
    return false;
  });

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
            <DialogContent style={{ maxWidth: "96%" , borderRadius:"5px"}}>
            <VendorForm onAddVendor={handleAddVendor} onClose={handleClose} />

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
        {filteredData.length > 0 ? (
          <TableContainer
            style={{
              maxHeight: "250px",
              overflowY: "auto",
              margin: "20px",
              width: "95%",
            }}
          >
            <Table style={{}}>
              <TableHead
                style={{
                  position: "sticky",
                  top: "0px",
                  backgroundColor: "rgb(244, 246, 248)",
                }}
              >
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Capacity</TableCell>
                  <TableCell>Time fr. Airport</TableCell>
                  <TableCell>Dist. fr Anchor</TableCell>
                  <TableCell>Vendor status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, index) => (
                  <TableRow key={index} sx={rowHoverStyle}>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell>{row.City}</TableCell>
                    <TableCell>{row.Rating}</TableCell>
                    <TableCell>{row.Capacity}</TableCell>
                    <TableCell>{}</TableCell>
                    <TableCell>{}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            No row found.
          </div>
        )}
      </Grid>
    </div>
  );
}
