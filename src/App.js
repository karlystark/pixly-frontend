import React, { useState, useEffect } from "react";
import './App.css';
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import PixlyApi from "./api";

function App() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading){return "loading images :)"};


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList imageData={imageData} />
      </BrowserRouter>
    </div>
  );
}

export default App;
