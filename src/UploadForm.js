import axios from "axios";
import React, { useState } from "react";
import PixlyApi from "./api";
import { isCompositeComponent } from "react-dom/test-utils";

function UploadForm() {

  const [image, setImage] = useState("");
  function handleChange(evt) {
    setImage(evt.target.files[0]);
  }

  function handleSubmit(evt) {

    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const data = PixlyApi.uploadImage(formData);
    return <p>{data}</p>



  }

  return (

    <div className="UploadForm">
      <label forHtml="file">Choose file to upload</label>
      <input type="file" accept=".jpg" id="file" name="file" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>

  );



}

export default UploadForm;

// method="post" enctype="multipart/form-data" action="/"