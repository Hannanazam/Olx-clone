import React from "react";
// import { React } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Form from './Form';

function Header() {
    return (
        // <div className="header positionsetting fixed flex aic">
        //     <div className="logo">
        //     <img src={require("../ui/logo.png")} />
        // </div>
        // <div className="location rel">
        //     <div className="icon-search">
        //         <input className="label" placeholder="Your Location" value="pakistan"/>
        //         <button className="icon-chevron-down" />
        //     </div>
        //     <div className="search flex aic">
        //         <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="query" />
        //         <button className="icon-search" />
        //     </div>
        //     <div className="actions flex aic">
        //     <button className="icon-search">
        //         <div className="icon-plus" />
        //         <h2 className="">Sell</h2>
        //     </button>
        //     </div>
        // </div>
        // </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 margining">
            <a className="navbar-brand" href="#"><img src={require("./images/logo.png")} /></a>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
                <ul className="navbar-nav  mr-auto">
            <div className="margining">
                    <li className="nav-item dropdown">
                        <div className="input-group select">
                        <div className="input-group-prepend ">
                            <span className="input-group-text bg-transparent black" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                     
                        <select className="bg-transparent form-control black" placeholder="Search city,area or location">
                                    <option selected>Pakistan</option>
                                    <option>Sindh</option>
                                    <option>Punjab</option>
                                    <option>Balochistan</option>
                                    <option>Khyber Pakhtunkhwa</option>
                                </select>
                    </div>
                       
                      </li>
                </div>
                </ul>
                <form className="form-inline my-2 my-lg-0 mr-auto set-margin">
                    
                    <input className="form-control mr-sm-2 black select1 button-margin" type="search" placeholder="Find Cars,Mobile Phones and more..." aria-label="Search" />
                    <button className="btn login-btn my-2  my-sm-0" type="submit">Login</button>
                    <button className="btn btn-outline-info my-2 px-5 rounded my-sm-0" type="submit"><FontAwesomeIcon icon={faPlus} className="mr-2 ml-0" />SELL</button>
                </form>
        </nav>

    )
}

export default Header;