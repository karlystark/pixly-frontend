import React, { useState, useEffect } from "react";
import './App.css';
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import PixlyApi from "./api";


/** App holds state for all images, processes photo upload and search by
 * camera, renders Nav and RoutesList
 *
 * props: none
 *
 * state:
 * - imageData => an array of image objects => {filename, camera, location, width, height}
 * - isLoading => boolean
 *
 * App => Nav & RoutesList
 */
function App() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("STATE => IMAGEDATA=", imageData);


  // console.log("state at 12:", imageData, isLoading)

  useEffect(function fetchImageDataOnMount() {
    async function fetchImageData() {
      const data = await PixlyApi.getImages();
      console.log("data is:", data);
      setImageData(data);
      setIsLoading(false);
    }
    fetchImageData();
  }, []);


  async function uploadPhoto(formData) {
    const data = await PixlyApi.uploadImage(formData);
    setImageData(imageData => [...imageData, data]);
  }

  async function searchByCamera(formData) {
    const data = await PixlyApi.getImageByCameraSearchTerm(formData);
    setImageData(data);
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div className="LoadingMessage">
        <p>loading images </p>
        <i className="bi bi-emoji-smile"></i>
      </div>
    );
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList imageData={imageData}
          uploadPhoto={uploadPhoto}
          searchByCamera={searchByCamera} />
      </BrowserRouter>
    </div>
  );
}

export default App;
