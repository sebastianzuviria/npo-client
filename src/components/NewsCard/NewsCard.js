import React from 'react';
import { useHistory } from 'react-router';
import './NewsCard.css';

const NewsCard = ({ title, image, id }) => {
  const history = useHistory();
  const viewMore = () => {
    history.push(`/news/${id}`);
  };

  return (
    <div className="news-item" onClick={viewMore}>
      <div className="news-img">
        <div style={{width:'auto', height: '20vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '100%', alignSelf: 'center'}}></div>
      </div>
      <span className="news-title">{title}</span>
    </div>
  );
};

export default NewsCard;
