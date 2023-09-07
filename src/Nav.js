import React from "react";

function Nav(){
  return (
  <nav className="navbar bg-body-tertiary">
  <div className="container-fluid d-flex">
    <div className="brand-container">
    <i className="pixly-icon bi bi-circle-square"></i>
    <a className="navbar-brand" href="/">Pix.ly</a>
    </div>
    <a className="navbar-upload" href="/upload">Upload Image</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </input>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
);
}

export default Nav;