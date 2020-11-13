import React from 'react';
import { Component }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './comps/Home';
import Header from './comps/Header';
import SmallHeader from './comps/SmallHeader';
import Img from './comps/Image';
import Footer from './comps/Footer';
import Smallfooter from './comps/Smallfooter';
import Form from './comps/Form';
import AppRouter from './config/router';



class App extends Component {
  render() {
      return (
        <div>
        <Header />
        <SmallHeader />
        <Img />
        <HomePage />
        <Form />
        <Smallfooter />
        <Footer />
        </div>
      )
  }
}

export default App;
