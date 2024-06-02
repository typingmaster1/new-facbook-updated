import React from 'react';

function FriendRequest({ name, mutualFriends, imageUrl, time }) {
  return (
    <div className="friend-request">
      <img src={imageUrl} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{mutualFriends} mutual friends</p>
        <p>{time}</p>
        <div>
          <button>Confirm</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
