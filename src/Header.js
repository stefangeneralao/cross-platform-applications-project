import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import likeImg from './images/like-image.png';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Urban [iourbän]</h1>
      </Link>
      <Link to="/liked">
        <img src={ likeImg } alt="all likes" />
      </Link>
    </header>
  );
}

export default Header;