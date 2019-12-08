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


const Gallerycard = ({ movie, name, price }) => (
  <div className="gallery-card">
    <img src={movie} alt="" />
    <h3>{name}</h3>
    <h4>{price}</h4>
  </div>

);

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
        <Gallerycard
          movie={gbcard1}
          name="Fantastic Four"
          price="$25.7M"
        />
        <Gallerycard
          movie={gbcard2}
          name="the man fron u.n.c.l.e"
          price="$28.7M"
        />
        <Gallerycard
          movie={gbcard3}
          name="shaun the sheep movie"
          price="$11.2M"
        />
        <Gallerycard
          movie={gbcard4}
          name="The gift"
          price="$13.2M"
        />
        <Gallerycard
          movie={gbcard5}
          name="Mission:impossible5"
          price="$17.7M"
        />
        <Gallerycard
          movie={gbcard6}
          name="hotel transylvania2"
          price="$33.2M"
        />
        <Gallerycard
          movie={gbcard7}
          name="sicario"
          price="$12.2M"
        />
        <Gallerycard
          movie={gbcard8}
          name="the martian"
          price="54.3M"
        />
        <Gallerycard
          movie={gbcard9}
          name="the scorch trials"
          price="7.8M"
        />
        <Gallerycard
          movie={gbcard10}
          name="everest"
          price="33.38M"
        />


      </div>

      <div className="gb-bottom">
        <p>See More</p>
      </div>
    </div>
  </div>
);
export default Gallery;
