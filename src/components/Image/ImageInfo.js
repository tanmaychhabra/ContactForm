import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

function ImageInfo() {
  return (
    <div>
      Upload File: <input type="file" />
      <Button variant="contained" color="secondary">
        Upload File
      </Button>
    </div>
  );
}

export default ImageInfo;
