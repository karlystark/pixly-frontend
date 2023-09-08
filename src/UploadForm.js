import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadForm.css";


/** UploadForm displays a photo upload form and redirects to homepage on submit
 *
 * props:
 * - uploadPhoto => function
 *
 * state:
 * - image => string that holds file data
 * - errorMessages => an array of error messages
 *
 * RoutesList => UploadForm
 */
function UploadForm({ uploadPhoto }) {

  const [image, setImage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

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
      setErrorMessages(err);
    }
  }

  return (

    <div className="UploadForm">
      <label htmlFor="file">Choose file to upload</label>
      <div className="input-field">
        <input type="file"
          accept=".jpg"
          id="file"
          name="file"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-outline-light" onClick={handleSubmit}>
        Submit
      </button>
      {errorMessages &&
        <div className="UploadForm-errors">
          {errorMessages.map(err => <p>{err}</p>)}
        </div>
      }
    </div>

  );



}

export default UploadForm;

// method="post" enctype="multipart/form-data" action="/"