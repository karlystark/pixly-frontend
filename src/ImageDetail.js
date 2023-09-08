import React from "react";
import "./ImageDetail.css";

const AWS_BASE_URL = 'https://s3.us-west-1.amazonaws.com/kk-pix.ly';

function ImageDetail({ selectedImg, closeImage, imageData }) {

  return (
    <div className="ImageDetail">
      <div className="img-container">
        <i className="close-icon bi bi-x" onClick={() => closeImage()}></i>
        <img src={`${AWS_BASE_URL}/${selectedImg}`} alt={selectedImg} />
        {imageData.filter(img => img.filename === selectedImg).map(filteredImg => (
          <div className="image-details" key={filteredImg.filename}>
            {filteredImg.camera &&
              <div className="camera-details">
               <i className="bi bi-camera"></i><h5>{filteredImg.camera}</h5>
              </div>
            }
            {filteredImg.location &&
              <div className="location-container">
                <i className="bi bi-geo-alt"></i><h4>{filteredImg.location}</h4>
              </div>
            }
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="btn btn-outline-light edit-button">edit</button>
        <button className="btn btn-outline-light download-button">download</button>
      </div>
    </div>
  );

}

export default ImageDetail;