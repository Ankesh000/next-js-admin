//vendorForm.jsx
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
import { zodResolver } from "@hookform/resolvers/zod";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PeopleIcon from "@mui/icons-material/People";
import ImageComponent from "../../components/image";
import VendorFormSchema from "../../api/vendorSchema";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import ErrorIcon from "@mui/icons-material/Error";
import Axios from "axios";
import swal from "sweetalert2";

const VendorForm = ({ addVendor, onClose }) => {

  // const [file ,setFile]=useState('')

  const createVendor = async (data) => {
    try {
     
      // data =new FormData()

      // data.set('file',file)
      console.log("data", data);
      const response = await Axios.post(
        "http://localhost:3000/api/vendors",
        data
      );

      if (response.status === 201) {
        onClose();

        swal.fire({
          title: "Success",
          text: "Vendor created successfully",
          icon: "success",
        });
        addVendor(response.data.data);
        console.log("Vendor created successfully:", response.data);
      } else {
        console.error("Vendor creation failed:", response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const handleCancel = () => {
    onClose();
  };
  // const handleImageChange = (e) => {
  //  setFile(e.target.files?.[0]);
    
  // };  

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      loc: "",
      vendorName: "",
      profileImage: null,
      vendorType: "",
      overview: "",
      cancellationPolicies: "",
      additionalPolicies: "",
      vendorPhone: "",
      vendorEmail: "",
    },

    resolver: zodResolver(VendorFormSchema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit((data) => createVendor(data))}>
        <Grid container spacing={3}>
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
              <Button
                variant="outlined"
                color="error"
                style={{ height: "50%" }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                color="success"
                style={{ height: "50%", marginLeft: "10px" }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Typography variant="h5">Main Information</Typography>
            <Controller
              name="loc"
              control={control}
              render={({ field }) => (
                <TextField
                  style={{ marginTop: "20px", width: "600px" }}
                  label="Location"
                  placeholder="Ex: San Francisco, California"
                  InputProps={{
                    startAdornment: (
                      <LocationOnIcon style={{ color: "gray" }} />
                    ),
                  }}
                  {...field}
                />
              )}
            />
            {errors.loc && <p style={{ color: "red" }}>{errors.loc.message}</p>}
            <Controller
              name="vendorName"
              control={control}
              render={({ field }) => (
                <TextField
                  style={{ marginTop: "20px", width: "600px" }}
                  label="Vendor Name"
                  {...field}
                />
              )}
            />
            {errors.vendorName && (
              <p style={{ color: "red" }}>{errors.vendorName.message}</p>
            )}
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={6}>
                <FormControl style={{ marginTop: "20px", width: "600px" }}>
                  <InputLabel>Vendor Type</InputLabel>
                  <Controller
                    name="vendorType"
                    control={control}
                    render={({ field }) => (
                      <Select {...field}>
                        <MenuItem value="Hotels">Hotels</MenuItem>
                        <MenuItem value="Events Space">Events Space</MenuItem>
                        <MenuItem value="Activities">Activities</MenuItem>
                        <MenuItem value="Restaurants">Restaurants</MenuItem>
                        <MenuItem value="Services">Services</MenuItem>
                        <MenuItem value="Transport">Transport</MenuItem>
                        <MenuItem value="Capacity">Capacity</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                {errors.vendorType && (
                  <p style={{ color: "red" }}>{errors.vendorType.message}</p>
                )}
              </Grid>
            </Grid>
            <Controller
              name="overview"
              control={control}
              render={({ field }) => (
                <TextField
                  style={{ marginTop: "20px", width: "600px" }}
                  label="Overview"
                  multiline
                  rows={4}
                  {...field}
                />
              )}
            />
            {errors.overview && (
              <p style={{ color: "red" }}>{errors.overview.message}</p>
            )}
{/*            
                <input
           
                  name="file"
                  type="file"
                  
                  onChange={handleImageChange}
              
                />
            */}
        

            {/* <Controller
              name="profileImage" 
              control={control}
              render={({ field }) => (
                <ImageComponent
                  onImageUpload={(file) => field.onChange(file)}
                />
              )}
            /> */}
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
                <Controller
                  name="capacity"
                  control={control}
                  render={({ field }) => (
                    <TextField label="Capacity" fullWidth {...field} />
                  )}
                />
                {errors.capacity && (
                  <p style={{ color: "red" }}>{errors.capacity.message}</p>
                )}
              </Grid>
              <Grid item xs={1}>
                <LocationOnIcon />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1">
                  No neighborhood data found
                </Typography>
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
        <Grid container>
          <Grid item>
            <h1>policies</h1>
            <Grid item container alignItems="center">
              <DoDisturbIcon style={{ width: "24px", height: "24px" }} />
              <Typography style={{ marginLeft: "10px" }}>
                Cancellation Policies
              </Typography>
            </Grid>
            <Controller
              name="cancellationPolicies"
              control={control}
              render={({ field }) => (
                <div>
                  <TextField
                    style={{ margin: "20px", width: "500px" }}
                    placeholder="Ex. Free cancellation 2 weeks before event..."
                    multiline
                    rows={4}
                    {...field}
                  />
                  {errors.cancellationPolicies && (
                    <p style={{ color: "red", marginLeft: "10px" }}>
                      {errors.cancellationPolicies.message}
                    </p>
                  )}
                </div>
              )}
            />
          </Grid>
        </Grid>

        <Grid item container>
          <ErrorIcon style={{ width: "24px", height: "24px" }} />
          <Typography style={{ marginLeft: "10px" }}>
            Additional Policies
          </Typography>
        </Grid>
        <Controller
          name="additionalPolicies"
          control={control}
          render={({ field }) => (
            <div>
              <TextField
                style={{ margin: "20px", width: "500px" }}
                placeholder="Ex. 50% deposit is required to secure booking..."
                multiline
                rows={4}
                {...field}
              />
              {errors.additionalPolicies && (
                <p style={{ color: "red", marginLeft: "10px" }}>
                  {errors.additionalPolicies.message}
                </p>
              )}
            </div>
          )}
        />
        <Grid
          item
          container
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Controller
            name="vendorEmail"
            control={control}
            render={({ field }) => (
              <TextField
                style={{ marginTop: "20px", width: "600px" }}
                label="Vendor Email"
                InputProps={{
                  startAdornment: <EmailIcon style={{ color: "gray" }} />,
                }}
                {...field}
              />
            )}
          />
          {errors.vendorEmail && (
            <p style={{ color: "red" }}>{errors.vendorEmail.message}</p>
          )}

          <Controller
            name="vendorPhone"
            control={control}
            render={({ field }) => (
              <TextField
                style={{ marginTop: "20px", width: "600px" }}
                label="Vendor Phone"
                InputProps={{
                  startAdornment: (
                    <PhoneEnabledIcon style={{ color: "gray" }} />
                  ),
                }}
                {...field}
              />
            )}
          />
          {errors.vendorPhone && (
            <p style={{ color: "red" }}>{errors.vendorPhone.message}</p>
          )}
        </Grid>
      </form>
    </div>
  );
};

export default VendorForm;
