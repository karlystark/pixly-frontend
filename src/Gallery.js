import React, { useState } from "react";
import "./Gallery.css";
import ImageDetail from "./ImageDetail";

const AWS_BASE_URL = 'https://s3.us-west-1.amazonaws.com/kk-pix.ly';


/** Gallery renders all photos and holds state and functions to
 * render ImageDetail
 *
 * props:
 * - imageData => an array of image objects =>
 *                {filename, camera, location, width, height}
 *
 * state:
 * - isDetailOpen => boolean value
 * - selectedImg => string representing filename of image that has been selected
 *
 * RoutesList => Gallery => ImageDetail
 */
function Gallery({ imageData }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");


  function openImage(clickedImg) {
    setSelectedImg(clickedImg);
    setIsDetailOpen(true);
  }

  function closeImage() {
    setIsDetailOpen(false);
    setSelectedImg("");
  }

  return (
    <>
      {isDetailOpen &&
        <div className="detail open" >
          <ImageDetail selectedImg={selectedImg} closeImage={closeImage}
            imageData={imageData} />
        </div>
      }
      <div className="Gallery">
        {imageData.toReversed().map(image => {
          return (
            <div className="pics" key={image.filename}
              onClick={() => openImage(image.filename)}>
              <img src={`${AWS_BASE_URL}/${image.filename}`}
                alt={image.alt}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;