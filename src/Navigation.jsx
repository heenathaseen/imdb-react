import React from 'react';
import './_navigation.scss';
import logo from './Images/logo.png';
import navsoci from './Images/navsoci.jpg';

const Logo = () => (
  <div className="logo">

    <img src={logo} alt="logo" />
  </div>
);
const Menu = ({ menu }) => (
  <div className="menu">
    <ul>
      {menu.map((m) => (<li>{m.name}</li>))}


    </ul>
  </div>

);

const Navigation = () => (
  <div className="navigation">
    <Logo />
    <Menu menu={[{ name: 'Movies' },
      { name: 'TV Series' },
      { name: 'News' },
      { name: 'Photos' },
      { name: 'Events' },
      { name: 'Trailers' }]}
    />

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
