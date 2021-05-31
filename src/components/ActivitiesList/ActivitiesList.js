import React, { useEffect, useState } from 'react';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import apiGetService from '../../services/apiGetService';
import './ActivitiesList.css';
import Spinner from '../Spinner/Spinner';

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);
  const fetchActivities = async () => {
    const data = await apiGetService('activities');
    if (data) setActivities(data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="activities-container">
      <div className="activities-header">
        <h1>Actividades</h1>
      </div>
      {activities.length > 0 ? (
        activities.map((item) => <ActivitiesCard {...item} key={item.id} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ActivitiesList;