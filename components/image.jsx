import React, { useState } from 'react';

import { Button, Grid ,Paper ,Typography } from '@mui/material';
const ImageComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const clearSelection = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <Grid container item xs={6}>
        <Typography variant="h5" style={{ marginTop: "10px" }}>Header Images</Typography>
      </Grid>
      <Paper
      elevation={0}
        style={{
          padding: "30px",
          width: "80%",
          border: "2px dashed #aaa",
          textAlign: "center",
          marginTop: "10px",

        }}
      >
        {selectedImage ? (
        <div>
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected Image"
          style={{ maxWidth: "100%" }}
        />
        <Button onClick={clearSelection} variant="outlined" color="error">remove</Button>
      </div>
        ) : (
          <div>
            Drag and drop here to upload or{' '}
            <label htmlFor="fileInput" style={{ color: 'blue', cursor: 'pointer' }}>
              browse for a file
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
)}
      </Paper>
    </div>
  
  );
};

export default ImageComponent
