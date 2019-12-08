import React from 'react';
import './_gallery.scss';
import gbcard1 from './Images/gbcard1.jpg';
import gbcard2 from './Images/gbcard2.jpg';
import gbcard3 from './Images/gbcard3.jpeg';
import gbcard4 from './Images/gbcard4.jpeg';
import gbcard5 from './Images/gbcard5.jpeg';
import gbcard6 from './Images/gbcard6.jpeg';
import gbcard7 from './Images/gbcard7.jpeg';
import gbcard8 from './Images/gbcard8.jpeg';
import gbcard9 from './Images/gbcard9.jpeg';
import gbcard10 from './Images/gbcard10.jpeg';

const Gallery = () => (
  <div className="gallery">
    <div className="gallery-block">
      <div className="gb-top">
        <ul>
          <li>Now Playing</li>
          <li>Box Office</li>
        </ul>
      </div>
      <div className="gb-middle">
        <div className="gallery-card">
          <img src={gbcard1} alt="" />
          <div className="hover-content">
            <i className="material-icons">play_circle_filled</i>
            <h5>Watch Trailer</h5>
          </div>
          <h3>Fantastic Four</h3>
          <h4>$25.7M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard2} alt="" />
          <h3>the man from u.n.c.l.e</h3>
          <h4>$28.7M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard3} alt="" />
          <h3>shaun the sheep movie</h3>
          <h4>$11.2M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard4} alt="" />
          <h3>The gift</h3>
          <h4>$13.2M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard5} alt="" />
          <h3>Mission:impossible5</h3>
          <h4>$17.7M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard6} alt="" />
          <h3>hotel transylvania2</h3>
          <h4>$33.2M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard7} alt="" />
          <h3>sicario</h3>
          <h4>$12.1M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard8} alt="" />
          <h3>the martian</h3>
          <h4>$54.3M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard9} alt="" />
          <h3>the scorch trials</h3>
          <h4>$7.8M</h4>
        </div>
        <div className="gallery-card">
          <img src={gbcard10} alt="" />
          <h3>everest</h3>
          <h4>$33.31M</h4>
        </div>
      </div>
      <div className="gb-bottom">
        <p>See More</p>
      </div>
    </div>
  </div>
);
export default Gallery;
