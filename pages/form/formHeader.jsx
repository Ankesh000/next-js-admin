import React from "react";
import { Button, Grid } from "@mui/material";

export default function FormHeader() {
  return (
    <Grid container style={{ border: "1px solid #e0e0e0" ,justifyContent:'space-around'}}>
      <Grid item xs={6} >
        <h2>New Vendor</h2>
      </Grid>

      <Grid item xs={6 } container justifyContent="flex-end">
        <Button variant="outlined" color="error" style={{ margin: "15px", height: "50%" }}>
          Cancel
        </Button>
        <Button variant="contained" color="success" style={{ margin: "15px", height: "50%" }}>
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
