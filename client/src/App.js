import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";

import Comparador from './components/18-Comparador';
import Hola from './components/hola';
// import Map from './components/03-Map';
// import PLaces from './components/30-Places';
// import MyComponent from './components/27-ReactGMaps';
// import PlacesAutocomplete from './components/32-Address';


function App() {

  return (
    <div className="App">
      <Router>
        <Route path='/' component={Hola} />
      </Router>
    </div>
  );
}

export default App;
