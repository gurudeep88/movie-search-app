import React from "react";
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <Link to='/' className="navbar-brand pl-5">
          MoviesSearchGround
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto d-flex align-items-center"> 
          <li className="nav-item mr-4">
              <a className="nav-link" href="/">
              <I className='fa fa-imdb'></I>
              </a>
            </li>
            <li className="nav-item active mr-4">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            
            <li className="nav-item mr-4">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


const I=styled.i`
  font-size:3rem;
  color: yellow;
`