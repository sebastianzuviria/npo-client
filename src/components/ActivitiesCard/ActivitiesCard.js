import React from 'react';
import { useHistory } from 'react-router';
import './ActivitiesCard.css';

const ActivitiesCard = ({ name, image, id }) => {
  const history = useHistory();
  const viewMore = () => {
    history.push(`/activities/${id}`);
  };

  return (
    <div className="activities-item" onClick={viewMore}>
      <div className="activities-img">
        <div style={{width:'auto', height: '20vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '100%', alignSelf: 'center'}}></div>
      </div>
      <span className="activities-title">{name}</span>
    </div>
  );
};

export default ActivitiesCard;