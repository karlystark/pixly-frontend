import React from "react";
import "./Nav.css";

/** Nav displays nav bar links
 *
 * props: none
 *
 * state: none
 *
 * App => Nav
 */
function Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex">
        <div className="brand-container">
          <i className="pixly-icon bi bi-circle-square"></i>
          <a className="navbar-brand" href="/">Pix.ly</a>
        </div>
        <a className="navbar-upload" href="/upload">Upload Image</a>
      </div>
    </nav>
  );
}

export default Nav;