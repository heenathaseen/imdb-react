import React from 'react';
import './_slider.scss';
import snature from './Images/snature.jpg';
import poster from './Images/poster.jpg';
import navsoci from './Images/navsoci.jpg';
import pbcard1 from './Images/pbcard1.jpeg';
import pbcard2 from './Images/pbcard2.jpeg';
import pbcard3 from './Images/pbcard3.jpeg';
import pbcard5 from './Images/pbcard5.jpeg';

const Slider = () => (
  <div className="slider">
    <div className="slider-block">
      <div className="sb-left">
        <div className="sbl-heading">
          <div className="sblh-left">
            <h3>
Mad Max: Fury Road
              <span>(2015)</span>
            </h3>
            <div className="sbl-sub-heading">
              <ul>
                <li>R</li>
                <li>120 min</li>
                <li>Action, Adventure, Sci-Fi </li>
                <p>15 May 2015 (USA)</p>
              </ul>

            </div>
          </div>
          <div className="sblh-right">
            <button>
              {' '}
              <img src={snature} alt="" />
20
            </button>
          </div>
        </div>
        <div className="sbl-rating">
          <div className="sblr-left">
            <p>8.7</p>
          </div>
          <div className="sblr-right">
            <ul>
              <li>
                <p>
Your rating: 6 stars
                  {' '}
                  <span>6/10</span>
                </p>
              </li>
              <li>
                <p>Ratings: 8.7/10 from 137.182 users Metascore: 89/100</p>
              </li>
              <li>
                <p>Reviews: 697 user 502 critic 46 from Metacritic.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="sbl-summary">
          <h4>Summary</h4>
          <p>In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a women of action who is looking to make it back to her childhood homeland.</p>
          <ul>
            <li>
              <p>
Director:
                {' '}
                <span>George Miller</span>
              </p>
            </li>
            <li>
              <p>
Writers:
                {' '}
                <span>George Miller, Brendan McCarthy, Nick Lathouris</span>
              </p>
            </li>
            <li>
              <p>Stars: </p>
              <ul>
                <li>
                  <img src={navsoci} alt="" />
                </li>
                <li>
                  <img src={pbcard1} alt="" />
                </li>
                <li>
                  <img src={pbcard2} alt="" />
                </li>
                <li>
                  <img src={pbcard3} alt="" />
                </li>
                <li>
                  <img src={pbcard5} alt="" />
                </li>
                <li>
                  <button>click</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sbl-button">
          <div className="watchlist-btn">
            <p>+</p>
            <p>Watchlist</p>
           
          </div>
          <div className="watchtrailer-btn">
            <p>></p>
            <p>Watch Trailer</p>
          </div>
        </div>
      </div>
      <div className="sb-right">
        <img src={poster} alt="poster" />
      </div>
    </div>
  </div>

);
export default Slider;
