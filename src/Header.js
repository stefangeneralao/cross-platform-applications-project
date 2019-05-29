import React from 'react';
import './Header.css';
import { Link, Route } from 'react-router-dom';
import likeImg from './images/like-image.png';

function Header() {
  return (
    <>
      <Route exact path="/" render={() => (
        <header className="header">
          <Link to="/">
            <h1>Urban [örbän]</h1>
          </Link>
          <Link to="/liked">
            <img src={ likeImg } alt="all likes" />
          </Link>
        </header>
      )}/>
      <Route exact path="/liked" render={() => (
        <header className="header liked">
          <Link to="/">
            <h1>Urban [örbän]</h1>
          </Link>
          <Link to="/liked">
            <img src={ likeImg } alt="all likes" />
          </Link>
        </header>
      )}/>
    </>
  );
}

export default Header;