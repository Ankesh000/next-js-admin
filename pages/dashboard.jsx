import React from "react";
import Navbar from "../components/navbar";

export default function Dashboard() {
  const navbarMargin = {
    marginTop: '-8px', 
    marginLeft:'-8px',
    marginRight:'-8px'
    
  };

  return (
    <>
      <div>
        <div style={navbarMargin}>
          <Navbar />
        </div>
      </div>
    </>
  );
}

