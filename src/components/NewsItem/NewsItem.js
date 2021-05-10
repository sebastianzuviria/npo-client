import React from 'react';
import './NewsItem.css';

// Posible modificación de props
const NewsItem = ({ title, content, type, createdAt, image }) => {
  return (
    <div className="detail-container">
      <div className="detail-item">
        <div className="detail-header">
          <span className="detail-category">
            {type}
            <span className="detail-date">
              {createdAt && createdAt.slice(0, 10)}
            </span>
          </span>
          <span className="detail-title">{title}</span>
        </div>
        <div className="detail-body">
          <div className="detail-img">
            <img src={image} alt="Novelty image" />
          </div>
          <p className="detail-content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
