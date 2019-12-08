import React from 'react';
import './_navigation.scss';
import logo from './Images/logo.png';
import navsoci from './Images/navsoci.jpg';

const Navigation = () => (
  <div className="navigation">
    <div className="logo">

      <img src={logo} alt="logo" />
    </div>
    <div className="menu">
      <ul>
        <li>Movies</li>
        <li>TV Series</li>
        <li>News</li>
        <li>Photos</li>
        <li>Events</li>
        <li>Trailers</li>
      </ul>
    </div>
    <div className="search">
      <input type="text" />
      <button>Search</button>
    </div>
    <div className="social">
      <i className="material-icons">bookmark</i>
      <i className="material-icons">save_alt</i>
      <img src={navsoci} alt="" />
    </div>
  </div>
);
export default Navigation;
