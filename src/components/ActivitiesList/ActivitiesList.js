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
    <div className="container py-5">
      <div className="activities-header">
        <h2 className='mb-1'>Actividades</h2>
        <p className="lead border-bottom pb-3 mt-0">Encontrá los próximos eventos de la fundación</p>
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