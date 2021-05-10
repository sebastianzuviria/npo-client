import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import apiGetService from '../../services/apiGetService';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';

const NewsDetail = () => {
  const { id } = useParams();
  const [novelty, setNovelty] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const getNew = async () => {
    try {
      const data = await apiGetService('news', id);
      if (data) setNovelty(data);
      setLoading(false);
    } catch (err) {
      setNotFound(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNew();
  }, []);

  return (
    <React.Fragment>
      {Object.keys(novelty).length > 0 && <NewsItem {...novelty} />}
      {loading && <Spinner />}
      {notFound && <NotFound />}
    </React.Fragment>
  );
};

export default NewsDetail;
