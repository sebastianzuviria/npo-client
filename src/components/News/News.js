import React, { useEffect, useState } from 'react';
import apiGetService from '../../services/apiGetService';
import './News.css';

const News = () => {

    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        const data = await apiGetService('news');
        if (data) setNews(data);
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
    <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 my-4'>
            {news.length > 0 &&
                news.slice(0, 3).map(({ id, createdAt, content, image, title }) => (
                    <div className='col my-3' key={id}>
                        <div className='card news__card h-100 border-0'>
                            <img
                                className='card-img-top news__img'
                                src={image}
                                alt={image}
                            />
                            <div className='card-body'>
                                <p className='news__date mb-1 ms-1'>{ new Date( createdAt ).toLocaleDateString("es-ES") }</p>
                                <h5 className='card-title news__title'>
                                    {title}
                                </h5>
                                <hr />
                                <p className='card-text text-muted text-justify'>
                                    { content.slice(0,230) } ...
                                </p>
                                {/* <button className='btn my-3 px-3 py-3 news__btn-info'>Leer Más</button> */}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    );
}

export default News;
