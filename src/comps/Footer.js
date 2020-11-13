import React from "react";
// import { React } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter , faFacebook , faYoutube , faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter } from '@fortawesome/free-brand-svg-icons';

function Footer() {
    return (
        <footer>
          <hr />
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-2 my-2">
            <h6>POPULAR CATEGORIES</h6>
              <a className="nav-link light"><p>Cars</p></a>
              <a className="nav-link light"><p>Flats for rent</p></a>
              <a className="nav-link light"><p>Jobs</p></a>
              <a className="nav-link light"><p>Mobile Phones</p></a>
            </div>
            <div className="col-md-2 my-2">
              <h6>TRENDING SEARCHES</h6>
              <a className="nav-link light"><p>Bikes</p></a>
              <a className="nav-link light"><p>Watches</p></a>
              <a className="nav-link light"><p>Books</p></a>
              <a className="nav-link light"><p>Dogs</p></a>
            </div>
            <div className="col-md-2 my-2">
              <h6>ABOUT US</h6>
              <a className="nav-link light"><p>About OLX Group</p></a>
              <a className="nav-link light"><p>OLX Blog</p></a>
              <a className="nav-link light"><p>Contact Us</p></a>
              <a className="nav-link light"><p>OLX for Businesses</p></a>
            </div>
            <div className="col-md-2 my-2">
              <h6>OLX</h6>
              <a className="nav-link light"><p>Help</p></a>
              <a className="nav-link light"><p>Sitemap</p></a>
              <a className="nav-link light"><p>Legal & Privacy information</p></a>
            </div>
             <div className="col-md-4 my-2">
              <h6>FOLLOW US</h6>
              <div className="inline-elements">
              <a className="nav-link light"><p><FontAwesomeIcon icon={faFacebook} size="2x" /></p></a>
              <a className="nav-link light ml-3"><p><FontAwesomeIcon icon={faTwitter} size="2x" /></p></a>
              <a className="nav-link light ml-3"><p><FontAwesomeIcon icon={faYoutube} size="2x" /></p></a>
              <a className="nav-link light ml-3"><p><FontAwesomeIcon icon={faInstagram} size="2x" /></p></a>
            </div>
            <div className="row">
              <img src={require("./images/appstore.png")} className="img-fluid pointer ml-2 mr-3 mt-3" width="90" height="15" alt="Responsive image" />
              <img src={require("./images/googleplay.png")} className="img-fluid pointer mt-3" width="90" height="15" alt="Responsive image" />
            </div>
            </div>
            <div className="col-12 footermain py-3 mb-0">
            <div className="container">
              <div className="row">
              <p className="marginone">Other Countries</p><p className="ml-3"> <a>India</a> - <a>South Africa</a> - <a>Indonesia</a></p>
              <p className="ml-auto marginfooter"> Free Classifieds in Pakistan. © 2006-2020 OLX</p>
              </div>
            </div>
            </div>
            <div className="col-12">
              <hr className="light-100" />
              <h5>Made with &#10084; By Hannan</h5>
            </div>
           
          </div>
        </div>
      </footer>
      // ©
      )
}

export default Footer;