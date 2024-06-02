import React from 'react';
import SidebarItem from './SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import profile from "./assets/profile.png"


const Sidebar = ({ items, shortcuts }) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={profile} alt="Profile" className="profile-pic" />
        <p>PCB</p>
      </div>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faEllipsisH} />
        <p>See more</p>
      </div>
      <div className="shortcuts">
        <h3>Your Shortcuts</h3>
        {shortcuts.map((shortcut, index) => (
          <SidebarItem key={index} item={shortcut} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
