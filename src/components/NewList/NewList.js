import React, { useEffect } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import apiGetService from '../../services/apiGetService';
import './NewList.css';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';

const NewList = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const data = await apiGetService('news');
    if (data) setNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <div className="news-header">
        <h1>Novedades</h1>
      </div>
      {news.length > 0 ? (
        news.map((item) => <NewsCard {...item} key={item.id} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default NewList;
