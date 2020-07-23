import React from 'react';
import logo from './logo.png';
import './App.css';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <h3>
          Buying. Selling. Simple.
        </h3>
        <p></p>
        <button type="button" class="btn btn-primary">Sign up</button>
        <p></p>
        <p></p>
        <h6>Already have an account?</h6>
<button type="button" class="btn btn-secondary">Log in</button>
<p></p>
<h6><a
          className="Btn-main"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Continue as a guest
        </a></h6>
        
      </header>
    </div>
  );
}

export default App;
