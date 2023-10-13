import React, { useState } from "react";
import Admin from "../admin";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgb(244, 240, 290)',
  },

};


export default function Company() {
  const [searchTerm, setSearchTerm] = useState("");
  const companyData = [
    {
      name: "Glocify 1",
      domain: "www.Glocify.com",
      numEvents: 10,
      numUsers: 1000,
    },
    {
        name: "Glocify 2",
        domain: "www.Glocify.com",
        numEvents: 15,
        numUsers: 1500,
      },
      {
        name: "Glocify 3",
        domain: "www.Glocify.com",
        numEvents: 8,
        numUsers: 800,
      },
      {
        name: "Infosis 2",
        domain: "www.Infosis.com",
        numEvents: 15,
        numUsers: 1500,
      },
      {
        name: "Space X",
        domain: "www.Space.com",
        numEvents: 15,
        numUsers: 1500,
      },
      {
        name: "Space X 2",
        domain: "www.Space.com",
        numEvents: 15,
        numUsers: 1500,
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
                <TableCell>Domain</TableCell>
                <TableCell>Number of Events</TableCell>
                <TableCell>Number of Users</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <TableRow key={index} sx={rowHoverStyle}>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Image
                          src={"/vercel.svg"}
                          alt="logo"
                          width={35}
                          height={30}
                          style={{  marginRight:"10px"}}
                         
                        />
                        {row.name}
                      </div>
                    </TableCell>
                    <TableCell>{row.domain}</TableCell>
                    <TableCell>{row.numEvents}</TableCell>
                    <TableCell>{row.numUsers}</TableCell>
                  </TableRow>
                ))
              ) : (
                <div style={{ textAlign: "right", marginTop: "20px" }}>
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
