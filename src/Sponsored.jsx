import React from 'react';

function Sponsored({ imageUrl, title, url }) {
  return (
    <div className="sponsored-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
      </a>
    </div>
  );
}

export default Sponsored;
