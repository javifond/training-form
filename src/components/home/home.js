import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../logo.svg';

import './home.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Corona Virus Checker - Tell us your simptoms!
        </p>
        <Link
          className="App-link"
          to="/question-one"
        >
          Continue
        </Link>
      </header>
    </div>
  );
}

export default Home;
