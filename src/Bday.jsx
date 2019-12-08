import React from 'react';
import './_bday.scss';
import ami from './Images/ami.jpg';
import scar from './Images/Scarlett Johansson.png';
import dwa from './Images/dwaynejohn.jpeg';
import rob from './Images/robertdowney.jpg';
import tom from './Images/tomhank.jpg';
import jen from './Images/Jennifer Lawrence.jpg';
import cha from './Images/Charlize Theron.jpg';

const Bdaycard = ({ photo, name, age }) => (
  <div className="bday-card">
    <img src={photo} alt="" />
    <h3>{name}</h3>
    <h4>{age}</h4>
  </div>
);
const Bday = () => (
  <div className="bday">
    <div className="bday-block">
      <div className="bb-top">
        <p>Born Today</p>
      </div>
      <div className="bb-middle">
        <i className="material-icons">arrow_back_ios</i>

        <Bdaycard
          photo={ami}
          name="Sharuk Khan"
          age="(76)"
        />
        <Bdaycard
          photo={scar}
          name="Scarlett Johansson"
          age="(34)"
        />
        <Bdaycard
          photo={dwa}
          name="Dwaynejohn"
          age="(47)"
        />
        <Bdaycard
          photo={rob}
          name="Robertdowney"
          age="(54"
        />
        <Bdaycard
          photo={tom}
          name="TomHank"
          age="(64)"
        />
        <Bdaycard
          photo={jen}
          name="Jennifer Lawrence"
          age="(24)"
        />
        <Bdaycard
          photo={cha}
          name="Charlize Theron"
          age="(43)"
        />


        <i className="material-icons">arrow_forward_ios</i>
      </div>
      <div className="bb-bottom">
        <p>See More</p>
      </div>
    </div>
  </div>
);
export default Bday;
