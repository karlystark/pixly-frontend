import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadForm.css";

function UploadForm({ uploadPhoto }) {

  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);

  const navigate = useNavigate();

  function handleChange(evt) {
    setImage(evt.target.files[0]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    try {
      await uploadPhoto(formData);
      setImage("");
      navigate("/");
    } catch (err) {
      setErrorMessage(err);
    }
  }

  return (

    <div className="UploadForm">
      <label htmlFor="file">Choose file to upload</label>
      <div className="input-field">
        <input type="file" accept=".jpg" id="file" name="file" onChange={handleChange} />
      </div>
      <button className="btn btn-outline-light" onClick={handleSubmit}>Submit</button>
      {errorMessage &&
        <div className="UploadForm-errors">
          {errorMessage.map(err => <p>{err}</p>)}
        </div>
      }
    </div>

  );



}

export default UploadForm;

// method="post" enctype="multipart/form-data" action="/"