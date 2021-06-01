import React from 'react';
import './ShowData.css';

const ShowData = ({ name, value }) => {
  return (
    <>
      <div className="show-data">
        <span className="fs-5 text-primary">{name}:</span>
        <span className="fs-6">{value}</span>
      </div>
      <hr className="mt-2 mb-4" />
    </>
  );
};

export default ShowData;
