import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SidebarItem.css';

const SidebarItem = ({ item }) => {
  return (
    <div className="sidebar-item">
      <FontAwesomeIcon icon={item.icon} />
      <p>{item.name}</p>
    </div>
  );
};

export default SidebarItem;
