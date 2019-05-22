import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Header</h1>
      <Link to="liked">Liked</Link>
    </header>
  );
}

export default Header;