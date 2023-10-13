import React ,{useState} from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { z, ZodError } from "zod";
import Switch from "@mui/material/Switch";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImageComponent from "../../components/image";

const VendorFormSchema = z.object({
  "Location": z.string().min(1),
  "Vendor Name": z.string().min(1),
  "Vendor Type": z.enum([
    "Hotels",
    "Events Space",
    "Activities",
    "Restaurants",
    "Services",
    "Transport",
    "Capacity",
  ]),
});

const validateForm = (data) => {
  try {
    const validatedData = VendorFormSchema.parse(data);
    return { isValid: true, data: validatedData };
  } catch (error) {
    if (error instanceof ZodError) {
      const validationErrors = error.flatten();
      return { isValid: false, errors: validationErrors };
    }
  }
};

export default function VendorForm({ onAddVendor, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const Location = register("Location");
  const lastName = register("lastName");
  const handleCancel = () => {
    onClose(); 
  };
  const onSubmit = (data) => {
    const validation = validateForm(data);

    if (validation.isValid) {
      onAddVendor(validation.data);
      reset();
      onClose();
    } else {
      console.log(validation.errors);
    }
  };

  return (
    <Grid container spacing={3} >
      <Grid item xs={11}>
        <Typography variant="h4">New Vendor</Typography>
        <Grid
          item
          xs={6}
          container
          marginLeft={80}
          justifyContent="flex-end"
          marginTop={-3}
        >
          <Button variant="outlined" color="error"  onClick={handleCancel} style={{ height: "50%" }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="success"
            onClick={onSubmit}
            style={{ height: "50%", marginLeft: "10px" }}
          >
            Create
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={6}>
        <Typography variant="h5">Main Information</Typography>
        <TextField
          style={{ marginTop: "20px" ,width:"600px" }}
          {...register("Location", { required: 'Location is required' })}
          label="Location"
          placeholder="Ex: San Francisco, California"
          onChange={(e) => {
            username.onChange(e);
            setError("username", {
              type: "manual",
              message: "Error message"
            });
          }}
          InputProps={{
            startAdornment: <LocationOnIcon style={{ color: "gray" }} />,
          }}
        />
        {errors.Location && <p className="error">{errors.Location.message}</p>}
        <TextField
          {...register("Vendor Name")}
          style={{ marginTop: "20px" ,width:"600px" }}
          label="Vendor Name"
          
        />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <FormControl style={{ marginTop: "20px", width: "600px" }}>
              <InputLabel>Vendor Type</InputLabel>
              <Select {...register("Vendor Type")}>
                <MenuItem value="Hotels">Hotels</MenuItem>
                <MenuItem value="Events Space">Events Space</MenuItem>
                <MenuItem value="Activities">Activities</MenuItem>
                <MenuItem value="Restaurants">Restaurants</MenuItem>
                <MenuItem value="Services">Services</MenuItem>
                <MenuItem value="Transport">Transport</MenuItem>
                <MenuItem value="Capacity">Capacity</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Switch />} label="Child Vendor" />
          </Grid>
        </Grid>

        <TextField
          style={{ marginTop: "20px" ,width:"600px"}}
          {...register("overview")}
          label="Overview"
          
          multiline
          rows={4}
        />
        <ImageComponent />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">Key Details</Typography>
        <Grid
          container
          spacing={3}
          style={{ margin: "10px" }}
          alignItems="center"
        >
          <Grid item xs={1}>
            <ThumbUpIcon />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="body1">No rating (0 reviews)</Typography>
          </Grid>
          <Grid item xs={1}>
            <PeopleIcon />
          </Grid>
          <Grid item xs={11}>
            <TextField {...register("Capacity")} label="Capacity" fullWidth />
          </Grid>
          <Grid item xs={1}>
            <LocationOnIcon />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="body1">No neighborhood data found</Typography>
          </Grid>
          <Grid item xs={1}>
            <LocalAirportIcon />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="body1">
              Airport travel time not available
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}


