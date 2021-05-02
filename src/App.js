import React, { useState } from 'react';

import GlobalStyle from './GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';
import Info from './Components/Info';
import { InfoData, InfoDataTwo } from './data/InfoData';
import Footer from './Components/Footer';


function App() {
   
  return (
      <div>
          <GlobalStyle />
          <Hero />
          <Info {...InfoData} InfoDataTwo={InfoDataTwo} />
          <Footer/>
    </div>
  );
}

export default App;
