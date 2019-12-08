import React from 'react';
import './_picks.scss';
import pbcard1 from './Images/pbcard1.jpeg';
import pbcard2 from './Images/pbcard2.jpeg';
import pbcard3 from './Images/pbcard3.jpeg';
import pbcard4 from './Images/pbcard4.jpeg';
import pbcard5 from './Images/pbcard5.jpeg';
import pbcard6 from './Images/pbcard6.jpeg';

const Picks = () => (
  <div className="picks">
    <div className="picks-block">
      <div className="pb-top">
        <p>
Imdb Picks:
          {' '}
          <span>November</span>
        </p>
      </div>
      <div className="pb-middle">
        <div className="pb-cards">
          <img src={pbcard1} alt="" />
        </div>
        <div className="pb-cards">
          <img src={pbcard2} alt="" />
        </div>
        <div className="pb-cards">
          <img src={pbcard3} alt="" />
        </div>
        <div className="pb-cards">
          <img src={pbcard4} alt="" />
        </div>
        <div className="pb-cards">
          <img src={pbcard5} alt="" />
        </div>
        <div className="pb-cards">
          <img src={pbcard6} alt="" />
        </div>
      </div>
      <div className="pb-bottom">
        <p>
The holidays are upon us.That means its the thime of year tocatch Oscar hopeful holidays are upon us. That means its the thime of year tocatch Oscar hopefuls
                            holidays are upon us.That means its the thime of year tocatch Oscar hopefuls
        </p>
        <h4>Visit the imdb picks section</h4>
      </div>
    </div>
  </div>
);
export default Picks;
