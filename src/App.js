import React, { useState, useEffect } from "react";
import './App.css';
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import PixlyApi from "./api";

function App() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("STATE => IMAGEDATA=", imageData);


  // console.log("state at 12:", imageData, isLoading)

  useEffect(function fetchImageDataOnMount() {
    async function fetchImageData() {
      const data = await PixlyApi.getImages();
      console.log("data is:", data)
      setImageData(data);
      setIsLoading(false);
    }
    fetchImageData();
  }, []);

  async function uploadPhoto(formData){
    const data = await PixlyApi.uploadImage(formData);
    console.log("HERE'S WHAT WE GET BACK FROM API POST REQUEST=", data);
    console.log("IMAGE DATA=", imageData);
    setImageData(imageData => [...imageData, data]);
  }


  if (isLoading){return "loading images :)"};


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList imageData={imageData} uploadPhoto={uploadPhoto} />
      </BrowserRouter>
    </div>
  );
}

export default App;
