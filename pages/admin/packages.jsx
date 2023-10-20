import React, { useState } from "react";
import Admin from "../admin";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image"; // Import the Image component

//===============================================================================================================//

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

const rowHoverStyle = {
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgb(244, 240, 290)",
  },
};

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState("");
  

  const companyData = [
    {
      name: "AAA PROPOSAL TEMPLATE - Multiple Hotels",
      lastModified: "01/jan/2011",
      location: "India",
      vendor: "zxc",
      status:"published",
      image:"/vercel.svg"
    },
    {
      name: "AAA PROPOSAL TEMPLATE - Multiple Hotels",
      lastModified: "01/jan/2011",
      location:  "India",
      Vendor: "xyz",
      image:'/beautyclassicsteel18.jpg'
    },
    {
      name: "Glocify 3",
      lastModified: "01/jan/2011",
      location:  "India",
      vendor: "zxc",
      image:'/beautyclassicsteel18.jpg'
    },
    {
      name: "A Beachy Getaway!",
      lastModified: "01/jan/2011",
      location:  "India",
      vendor: "",
      image:'/beautycoachman12.jpg'
    },
    {
      name: "Space X",
      lastModified: "01/jan/2011",
      location:  "India",
      vendor: "",
      image:'/beautycoachman12.jpg'
    },
    {
      name: "Space X 2",
      lastModified: "01/jan/2011",
      location:  "India",
      vendor: "abc",
      image:'/beautycoachman12.jpg'
    },
  ];

  const filteredData = companyData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <Admin />
      </div>
      <Grid item xs={12} sm={6}>
        <div style={searchInputStyle2}>
          <SearchIcon style={iconStyle} />
          <input
            type="text"
            placeholder="Search..."
            style={inputStyle}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Grid>
      <Grid>
        <TableContainer
          style={{
            maxHeight: "345px",
            overflowY: "auto",
            margin: "20px",
            width: "95%",
          }}
        >
          <Table>
            <TableHead
              style={{
                position: "sticky",
                top: "0px",
                backgroundColor: "rgb(244, 246, 248)",
              }}
            >
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Last Modified</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Vendor</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <TableRow key={index} sx={rowHoverStyle}>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Image
                          src={row.image}
                          alt="logo"
                          width={35}
                          height={30}
                          style={{ marginRight: "10px" }}
                        />
                        {row.name}
                      </div>
                    </TableCell>
                    <TableCell>{row.lastModified}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.vendor}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))
              ) : (
                <div style={{ textAlign: "center", marginTop: "20px 50px" , }}>
                  No row found.
                </div>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
