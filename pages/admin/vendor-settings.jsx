import React from "react";
import Admin from "../admin";
import { Grid, Typography, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

//=======================================================================================================================//

const addButtonStyle = {
  margin: "14px",
  backgroundColor: "rgb(244, 246, 248)",
  borderRadius: "6px",
  opacity: ".6",
};



export default function vendorSetting() {

  return (
    <div>
      <div>
        <Admin />
      </div>
      <Grid
        variant="h2"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        <Typography>
          <u>Hotel Amenities</u>
        </Typography>

        <Typography style={{ marginLeft: "220px"}}>
          <u>Meeting Space Amenities</u>
        </Typography>

        <Typography style={{ marginLeft: "150px" }}>
          <u>Private Dining Amenities</u>
        </Typography>
      </Grid>

      <Grid
        style={{
          display: "flex",
          marginLeft: "15px",
        }}
      >
        <Grid>
          <TextField label="Hotel Amenity..." variant="outlined" />
          <AddIcon
            style={
            addButtonStyle
            }
          />
        </Grid>

        <Grid style={{ marginLeft: "60px" }}>
          <TextField label="Meeting Space Amenity..." variant="outlined" />
          <AddIcon style={
            addButtonStyle
            }/>
        </Grid>

        <Grid style={{ marginLeft: "60px" }}>
          <TextField label="Private Dining Amenity..." variant="outlined" />
          <AddIcon style={
            addButtonStyle
            }/>
        </Grid>
      </Grid>
    </div>
  );
}

// ======================================================================================================//

