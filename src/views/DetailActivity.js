import React from 'react';
import Detail from '../components/DetailActivity/Detail';
import BasicLayout from '../Layouts/BasicLayout';

const DetailActivity = ({ match }) => {
  return (
    <BasicLayout>
      <Detail id={match.params.id} />
    </BasicLayout>
  );
};

export default DetailActivity;
