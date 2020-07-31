import React from 'react';
import Header from './components/Header'
import Homepage from './pages/Homepage'
import './default.scss'

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
     <div className="main">
       <Homepage />
     </div>
    </div>
  );
}

export default App;
