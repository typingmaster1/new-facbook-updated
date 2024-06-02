import React from 'react';
import Sponsored from './Sponsored';
import FriendRequest from './FriendRequest';

function Rightbar({ sponsoredContent, friendRequests }) {
  return (
    <div className="rightbar">
      <div className="sponsored">
        <h2>Sponsored</h2>
        {sponsoredContent.map((content, index) => (
          <Sponsored key={index} {...content} />
        ))}
      </div>
      <div className="friend-requests">
        <h2>Friend Requests</h2>
        {friendRequests.map((request, index) => (
          <FriendRequest key={index} {...request} />
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
