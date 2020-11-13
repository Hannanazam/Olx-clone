import React from "react";
// import { React } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SmallHeader() {
    return (
        <nav className="navbar visibilityy navbar-expand-lg">
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Mobile Phones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Motorcycle</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Houses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TV-Video-Audio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tables</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Land & Plots</a>
            </li>
          </ul>
        </div>
      </nav>
      )
}

export default SmallHeader;