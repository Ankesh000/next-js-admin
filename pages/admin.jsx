import React, { useState } from "react";
import Navbar from "../components/navbar";
import {
  Box,
  List,
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from 'next/router';
import Link from "next/link";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import CategoryIcon from "@mui/icons-material/Category";

export default function Admin() {
  const [activeButton, setActiveButton] = useState(0); // Set the initial active button to 0 (the first button)
  const router = useRouter();

  const navbarMargin = {
    marginTop: "-8px",
    marginLeft: "-8px",
    marginRight: "-8px",
  };

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
      <div style={navbarMargin}>
        <Navbar />
      </div>
      <Box sx={{ marginLeft: "40px", marginTop: "20px" }}>
        <Typography variant="h4">
          <b>Admin</b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1px",
          marginLeft: "25px",
          marginTop: "20px",
          
        }}
      >
        {[
          "Events",
          "Budget-Optimizer",
          "Company",
          "Vendors",
          "Packages",
          "Vendor-Settings",
          "Reconciliation",
        ].map((text, index) => (
            <Link href={`/admin/${text.toLowerCase()}`} key={text}>
              
          <ListItemButton
            key={text}
            onClick={() => handleButtonClick(index)}
            sx={{
              paddingBottom: "4px",
              fontWeight: activeButton === index ? "bold" : "bold",
              textDecoration: activeButton === index ? "none" : "none", 
              borderBottom: `2px solid ${
                activeButton === index ? "green" : "#ccc"
              }`, // Green underline and gray bottom border
            }}
          >
            <ListItemIcon>
              {index === 0 && <EventIcon />}
              {index === 1 && <MonetizationOnIcon />}
              {index === 2 && <BusinessIcon />}
              {index === 3 && <PeopleIcon />}
              {index === 4 && <CategoryIcon />}
              {index === 5 && <SettingsIcon />}
              {index === 6 && <MoneyOffIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
          </Link>
        ))}
      </Box>
      
    </div>
  );
}
