import React from "react";
import Gallery from "./Gallery";
import UploadForm from "./UploadForm";
import { Routes, Route, Navigate } from "react-router-dom";
import SearchForm from "./SearchForm";

/** RoutesList defines possible routes in App and renders components for each
 * route
 *
 * props:
 * - imageData => an array of image objects =>
 *                {filename, camera, location, width, height}
 * - uploadPhoto => function
 * - searchByCamera => function
 *
 * state: none
 *
 * App => RoutesList
 */
function RoutesList({ imageData, uploadPhoto, searchByCamera }) {
  return (
    <Routes>
      <Route path="/" element={<Gallery imageData={imageData} />} />
      <Route path="/upload" element={<UploadForm uploadPhoto={uploadPhoto} />} />
      <Route path="/search" element={<SearchForm searchByCamera={searchByCamera} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

}

export default RoutesList;
