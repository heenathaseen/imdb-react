import React from 'react';

import './App.scss';
import Navigation from './Navigation';
import Slider from './Slider';
import Gallery from './Gallery';
import Bday from './Bday';
import Picks from './Picks';
import Footer from './Footer';

const App = () => (
  <div className="container">
    <Navigation />
    <Slider />
    <Gallery />
    <Bday />
    <Picks />
    <Footer />
  </div>
);

export default App;
