import React from "react";
// import { React } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Img() {
    return (
        <img src={require("./images/hero.jpg")} className="img-fluid img-none" alt="Responsive image" />
      )
}

export default Img;