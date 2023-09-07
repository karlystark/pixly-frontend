import React from "react";
import Gallery from "./Gallery";
import UploadForm from "./UploadForm.js";
import { Routes, Route, Navigate } from "react-router-dom";

function RoutesList({imageData}) {
  <Routes>
    <Route path="/" element={<Gallery imageData={imageData} />} />
    <Route path="/upload" element={<UploadForm />} />
    <Route path="*" element={<Navigate to="/"/>} />
  </Routes>
}

export default RoutesList;
