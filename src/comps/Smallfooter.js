import React from "react";
// import { React } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Smallfooter() {
    return (
        <footer>
          <hr />
        <div className="container-fluid padding">
          <div className="row text-center firstone">
            <div className="col-md-4">
            <img src={require("./images/phone-app.webp")} className="img-fluid " alt="Responsive image" />
            </div>
            <div className="col-md-5 text-left">
              <h1 className="basiccolor">TRY THE OLX APP</h1>
              <h4 className="mt-3 basiccolor">Buy, sell and find just about anything using the app on your mobile.</h4>
            </div>
            <div className="col-md-3">
              <h5 className="basiccolor mt-4">GET YOUR APP TODAY</h5>
              <img src={require("./images/appstore.png")} className="img-fluid pointer mr-3 mt-3" width="120" height="15" alt="Responsive image" />
              <img src={require("./images/googleplay.png")} className="img-fluid pointer mt-3" width="120" height="15" alt="Responsive image" />
            </div>
          </div>
        </div>
      </footer>
      )
}

export default Smallfooter;