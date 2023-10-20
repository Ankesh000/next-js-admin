import React from "react";

const ImageComponent = ({ onImageUpload }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    onImageUpload(file);
  };

  return (
    <input name="file" type="file" accept="image/*" onChange={handleImageChange} />
  );
};

export default ImageComponent;
