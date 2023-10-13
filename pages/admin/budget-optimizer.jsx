import React, { useState } from "react";
import Admin from "../admin";
import { Autocomplete, Grid, TextField } from "@mui/material";

const countries = [
  "USA",
  "Canada",
  "Australia",
  "United Kingdom",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Japan",
  "China",
  "India",
  "Brazil",
];

const radius = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150];

export default function Destination() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Admin />

      <Grid container style={{ display: "flex" }}>
        <Grid
          item
          style={{
            padding: "10px",
            flex: 2,
            margin: "20px",
          }}
        >
          <Autocomplete
            id="country-input"
            options={countries}
            renderInput={(params) => (
              <TextField {...params} label="Destination" variant="outlined" />
            )}
          />
        </Grid>

        <Grid
          item
          style={{
            padding: "10px",
            flex: 1,
            margin: "20px",
          }}
        >
          <TextField label="Date" variant="outlined" />
        </Grid>

        <Grid
          item
          style={{
            padding: "10px",
            flex: 1,
            margin: "20px",
          }}
        >
          <Autocomplete
            id="Miles-Radius"
            options={radius}
            renderInput={(params) => (
              <TextField {...params} label="Miles Radius" variant="outlined" />
            )}
          />
        </Grid>
        <Grid
          item
          style={{
            padding: "10px",
            flex: 1,
            margin: "20px",
          }}
        >
          <TextField label="Max Price (Optional)" variant="outlined" />
        </Grid>
      </Grid>
    </div>
  );
}
