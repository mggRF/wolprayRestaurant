import React from 'react';

import Header from './Components/Comun/Header';
import Rutas from './Components/Comun/Rutas';
import Footer from './Components/Comun/Footer';



function App() {
  return (
    <div className="container-fluid ">
     <div className="row">
       {<Header />}
     <div className="col-12 container-fluid principal">
       <Rutas />
     </div>

     <Footer/>
     </div>
     
    </div>
    
  );
}

export default App;
