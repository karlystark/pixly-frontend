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
 * - altText => string that holds altText form input data
 * - altTextReveal => boolean that tracks alt text description guide visibility
 * - isLoading => boolean that tracks form submit loading state
 *
 * RoutesList => UploadForm
 */
function UploadForm({ uploadPhoto }) {

  const [image, setImage] = useState("");
  const [altText, setAltText] = useState("");
  const [altTextReveal, setAltTextReveal] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleFileChange(evt) {
    setImage(evt.target.files[0]);
  }

  function handleTextChange(evt) {
    setAltText(evt.target.value);
  }

  function toggleAltTextInstructions() {
    altTextReveal ? setAltTextReveal(false) : setAltTextReveal(true);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("alt_text", altText);
    try {
      await uploadPhoto(formData);
      setImage("");
      setIsLoading(false);
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
          onChange={handleFileChange}
        />
        <div className="UploadFormAltText">
          <label htmlFor="altText">Input alt-text </label>
          <button className="btn btn-outline-light" onClick={toggleAltTextInstructions}>
            ?
          </button>
          <div className="input-field">
            <input type="text"
              id="altText"
              name="altText"
              onChange={handleTextChange}
            />
          </div>
        </div>
      </div>
      <button className="btn btn-outline-light" onClick={handleSubmit}>
        Submit
      </button>
      {altTextReveal &&
        <div className="altTextInstructions">
          <h2>How to write good alt-text</h2>
          <i className="close-icon bi bi-x" onClick={() => toggleAltTextInstructions()}></i>
          <ul>
            <li>
              alt-text is a short, concise, and clear description of your
              image that will provide a textual alternative for folks who use
              screen readers
            </li>
            <li>
              be sure not to include "image of" in your alt-text - this is
              repetitive for users <i className="bi bi-emoji-smile"></i>
            </li>
          </ul>
          <p>a nice example:</p>
          <img src="/21.jpg" alt="five cats sit on cement in front of a blue painted backyard garage" />
          <p>
            alt text: five cats sit on cement in front of a blue painted
            backyard garage.
          </p>
        </div>}
      {isLoading &&
        <p>uploading image now...</p>}
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