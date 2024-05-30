import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTv, faStore, faUsers, faGamepad, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import profilePic from './assets/profile.png'; // Your profile picture path
import './Navbar.css'; // Ensure you create this CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <FontAwesomeIcon icon={faFacebook} size="2x" className="navbar-icon" />
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="navbar-center">
        <FontAwesomeIcon icon={faHome} size="lg" className="navbar-icon active" />
        <FontAwesomeIcon icon={faTv} size="lg" className="navbar-icon" />
        <FontAwesomeIcon icon={faStore} size="lg" className="navbar-icon" />
        <FontAwesomeIcon icon={faUsers} size="lg" className="navbar-icon" />
        <FontAwesomeIcon icon={faGamepad} size="lg" className="navbar-icon" />
      </div>
      <div className="navbar-right">
        <div className="navbar-profile-pic">
          <img src={profilePic} alt="Profile" />
          <div className="notification-bubble">20+</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
