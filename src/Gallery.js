import React from "react";
import "./Gallery.css";

const AWS_BASE_URL = 'https://s3.us-west-1.amazonaws.com/kk-pix.ly';

function Gallery({ imageData }) {
  return (

    <div className="Gallery">
      {imageData.map(image => {
        return (
          <div className="pics" key={image.filename}>
          <img src={`${AWS_BASE_URL}/${image.filename}`} alt={image.filename} />
          </div>
        );
      })}
    </div>
  );

}

export default Gallery;