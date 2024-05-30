// FacebookPost.js
import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import './FacebookPost.css';

const FacebookPost = ({ profilePic, author, time, post }) => {
  return (
    
    <div className="facebook-post">
      <div className="post-header">
        <div className="profile-picture">
          <img src={profilePic} alt="Profile Picture" />
        </div>
        <div className="post-info">
          <span className="post-author">{author}</span>
          <span className="post-time">{time}</span>
        </div>
      </div>
      <div className="post-content">
        <img src={post} alt="" srcset="" />
      </div>

      
      <div className="post-actions">
        <FontAwesomeIcon icon={faThumbsUp} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faShare} />
      </div>
    </div>
  );
};

export default FacebookPost;