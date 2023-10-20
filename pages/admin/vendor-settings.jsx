import React, { useState, useEffect } from "react";
import Admin from "../admin";
import { useForm, Controller } from "react-hook-form";
import { z, object, string } from "zod";
import { Grid, Typography, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
const addButtonStyle = {
  margin: "14px",
  backgroundColor: "rgb(244, 246, 248)",
  borderRadius: "6px",
  opacity: ".6",
  cursor: "pointer",
};



const VendorSetting = () => {

  const [hotelUserInput, setHotelUserInput] = useState("");
  const [meetingSpaceUserInput, setMeetingSpaceUserInput] = useState("");
  const [privateDiningUserInput, setPrivateDiningUserInput] = useState("");
  const [hotelAmenities, setHotelAmenities] = useState([]);
  const [meetingSpaceAmenities, setMeetingSpaceAmenities] = useState([]);
  const [privateDiningAmenities, setPrivateDiningAmenities] = useState([]);


  //=========================================== EDIT====================================================//

  const handleEdit = (index, type) => {
    if (type === "1st") {
      const updatedValue = hotelAmenities[index];
      const updated = [...hotelAmenities];
      updated[index].value = updatedValue.value;
      setHotelAmenities(updated);
    } else if (type === "2nd") {
      const updatedValue = meetingSpaceAmenities[index];
      console.log("value", updatedValue);
      const updated = [...meetingSpaceAmenities];
      updated[index].value = updatedValue.value;
      setMeetingSpaceAmenities(updated);
    } else {
      const updatedValue = privateDiningAmenities[index];
      console.log("value", updatedValue);
      const updated = [...privateDiningAmenities];
      updated[index].value = updatedValue.value;
      setPrivateDiningAmenities(updated);
    }
  };


    //=========================================== DELETE====================================================//

  const handleDelete = (index, type) => {
    if (type === "1st") {
     
      let updatedAmenities = [...hotelAmenities];
      updatedAmenities.splice(index, 1);
      setHotelAmenities(updatedAmenities);
    } else if (type === "2nd") {
  
      const updatedValue = meetingSpaceAmenities[index];
      console.log("value", updatedValue);
      let updatedAmenities = [...meetingSpaceAmenities];
      updatedAmenities.splice(index, 1);
      setMeetingSpaceAmenities(updatedAmenities);
    } else {
   
      const updatedValue = privateDiningAmenities[index];
      console.log("value", updatedValue);
      let updatedAmenities = [...privateDiningAmenities];
      updatedAmenities.splice(index, 1);
      setPrivateDiningAmenities(updatedAmenities);
    }
  };

  //=========================================== UPDATE====================================================//

  const updateInput = (value, type) => {
    if (type === "hotel") {
      setHotelUserInput(value);
    } else if (type === "meetingSpace") {
      setMeetingSpaceUserInput(value);
    } else if (type === "privateDining") {
      setPrivateDiningUserInput(value);
    }
  };


  // =====================================ADD===============================================================//
  const addItem = (type) => {
    let userInput = "";
    if (type === "hotel") {
      userInput = hotelUserInput;
    } else if (type === "meetingSpace") {
      userInput = meetingSpaceUserInput;
    } else if (type === "privateDining") {
      userInput = privateDiningUserInput;
    }

    if (userInput !== "") {
      const userInputItem = {
        id: Math.random(),
        value: userInput,
      };

      if (type === "hotel") {
        setHotelAmenities([...hotelAmenities, userInputItem]);
        setHotelUserInput("");
      } else if (type === "meetingSpace") {
        setMeetingSpaceAmenities([...meetingSpaceAmenities, userInputItem]);
        setMeetingSpaceUserInput("");
      } else if (type === "privateDining") {
        setPrivateDiningAmenities([...privateDiningAmenities, userInputItem]);
        setPrivateDiningUserInput("");
      }
    }
  };

//=============================================================================================================//

  useEffect(() => {
    localStorage.setItem("hotelAmenities", JSON.stringify(hotelAmenities));
  }, [hotelAmenities]);

  useEffect(() => {
    const storedHotelAmenities = JSON.parse(
      localStorage.getItem("hotelAmenities")
    );
    if (storedHotelAmenities) {
      setHotelAmenities(storedHotelAmenities);
    }
  }, []);

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

        <Typography style={{ marginLeft: "220px" }}>
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
          <TextField
            label="Hotel Amenity..."
            variant="outlined"
            value={hotelUserInput}
            onChange={(e) => updateInput(e.target.value, "hotel") }
          />
          <AddIcon
            variant="outlined"
            style={addButtonStyle}
          
            onClick={() => addItem("hotel")}
          />
        </Grid>

        <Grid style={{ marginLeft: "60px" }}>
          <TextField
            label="Meeting Space Amenity..."
            variant="outlined"
            value={meetingSpaceUserInput}
            onChange={(e) => updateInput(e.target.value, "meetingSpace")}
          />
          <AddIcon
            variant="outlined"
            style={addButtonStyle}
            onClick={() => addItem("meetingSpace")}
          />
        </Grid>

        <Grid style={{ marginLeft: "60px" }}>
          <TextField
            label="Private Dining Amenity..."
            variant="outlined"
            value={privateDiningUserInput}
            onChange={(e) => updateInput(e.target.value, "privateDining")}
          />
          <AddIcon
            variant="outlined"
            style={addButtonStyle}
            onClick={() => addItem("privateDining")}
          />
        </Grid>
      </Grid>

      <Grid container style={{ marginLeft: "15px" }}>
        <Grid item style={{ display: "flex", flexDirection: "column" }}>
          {hotelAmenities.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <input
                value={item.value}
                onChange={(e) => {
                  const updatedAmenities = [...hotelAmenities];
                  updatedAmenities[i].value = e.target.value;
                  setHotelAmenities(updatedAmenities);
                }}
                style={{
                  height: "30px",
                  width: "200px",
                  border: "1px solid skyblue",
                  marginRight: "10px",
                }}
              />
              <CheckCircleIcon
                onClick={() => handleEdit(i, "1st")}
                style={{
                  cursor: "pointer",
                  opacity: ".6",
                  marginRight: "3px",
                
                }}
              />
              <DeleteIcon
                onClick={() => {
                  handleDelete(i, "1st");
                }}
                style={{ cursor: "pointer", opacity: ".6" }}
              />
            </div>
          ))}
        </Grid>

        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {meetingSpaceAmenities.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                marginLeft: hotelAmenities.length > 0 ? "70px" : "335px",
                marginTop: "10px",
              }}
            >
              <input
                key={i}
                value={item.value}
                onChange={(e) => {
                  const updatedAmenities = [...meetingSpaceAmenities];
                  updatedAmenities[i].value = e.target.value;
                  setMeetingSpaceAmenities(updatedAmenities);
                }}
                style={{
                  height: "30px",
                  width: "200px",
                  border: "1px solid skyblue",
                }}
              />
              <CheckCircleIcon
                onClick={() => handleEdit(i, "2st")}
                style={{ cursor: "pointer", opacity: ".6", marginRight: "3px" }}
              />
              <DeleteIcon
                onClick={() => {
                  handleDelete(i, "2nd");
                }}
                style={{ cursor: "pointer", opacity: ".6" }}
              />
            </div>
          ))}
        </Grid>

        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          {privateDiningAmenities.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                marginLeft:
                  meetingSpaceAmenities.length === 0 &&
                  hotelAmenities.length > 0
                    ? "410px" //0 and HA 1
                    : hotelAmenities.length > 0
                    ? "75px" // both pp
                    : "670px", // both 00
              }}
            >
              <input
                key={i}
                value={item.value}
                onChange={(e) => {
                  const updatedAmenities = [...privateDiningAmenities];
                  updatedAmenities[i].value = e.target.value;
                  setPrivateDiningAmenities(updatedAmenities);
                }}
                style={{
                  height: "30px",
                  width: "200px",
                  border: "1px solid skyblue",
                  marginBottom: "10px",
                }}
              />
              <CheckCircleIcon
                onClick={() => handleEdit(i, "3st")}
                style={{ cursor: "pointer", opacity: ".6", marginRight: "3px" }}
              />
              <DeleteIcon
                onClick={() => {
                  handleDelete(i, "3rd");
                }}
                style={{ cursor: "pointer", opacity: ".6" }}
              />
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default VendorSetting;
