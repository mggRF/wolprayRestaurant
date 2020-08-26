import React from 'react';

import Header from './Components/Comun/Header';
import Rutas from './Components/Comun/Rutas';
import Footer from './Components/Comun/Footer';

import ControllerMusic from './Components/Controladores/music/ControllerMusic';

function App() {
  return (
    <div >
      <Header />
      <Rutas />
      <Footer/>
      <ControllerMusic/>
    </div>
    
  );
}

export default App;
