import React from 'react';
import './_bday.scss';
import ami from './Images/ami.jpg';
import scar from './Images/Scarlett Johansson.png';
import dwa from './Images/dwaynejohn.jpeg';
import rob from './Images/robertdowney.jpg';
import tom from './Images/tomhank.jpg';
import jen from './Images/Jennifer Lawrence.jpg';
import cha from './Images/Charlize Theron.jpg';

const Bday = () => (
  <div className="bday">
    <div className="bday-block">
      <div className="bb-top">
        <p>Born Today</p>
      </div>
      <div className="bb-middle">
        <i className="material-icons">arrow_back_ios</i>
        <div className="bday-card">
          <img src={ami} alt="" />
          <h3>Amitabh Bachchan</h3>
          <h4>(76)</h4>
        </div>
        <div className="bday-card">
          <img src={scar} alt="" />
          <h3>Scarlett Johansson</h3>
          <h4>(34)</h4>
        </div>
        <div className="bday-card">
          <img src={dwa} alt="" />
          <h3>Dwaynejohn</h3>
          <h4>(47)</h4>
        </div>
        <div className="bday-card">
          <img src={rob} alt="" />
          <h3>Robertdowney</h3>
          <h4>(54)</h4>
        </div>
        <div className="bday-card">
          <img src={tom} alt="" />
          <h3>TomHank</h3>
          <h4>(63)</h4>
        </div>
        <div className="bday-card">
          <img src={jen} alt="" />
          <h3>Jennifer Lawrence</h3>
          <h4>(28)</h4>
        </div>
        <div className="bday-card">
          <img src={cha} alt="" />
          <h3>Charlize Theron</h3>
          <h4>(43)</h4>
        </div>
        <i className="material-icons">arrow_forward_ios</i>
      </div>
      <div className="bb-bottom">
        <p>See More</p>
      </div>
    </div>
  </div>
);
export default Bday;
