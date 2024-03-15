import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="carefinder-logo">C A R E F I N D E R</div>
      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/search">Search Hospitals</Link>
        <Link to="/dashboard/favorites">Favorite Hospitals</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;
