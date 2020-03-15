import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

import './home.scss';

function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <img src={logo} className="home__logo" alt="logo" />
        <p>
          Corona Virus Checker - Tell us your symptoms!
        </p>
        <Link
          className="home__link"
          to="/question-one"
        >
          Continue
        </Link>
      </header>
    </div>
  );
}

export default Home;
