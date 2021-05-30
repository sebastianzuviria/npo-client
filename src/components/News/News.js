import React, { useEffect, useState } from 'react';
import apiGetService from '../../services/apiGetService';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {

    const [news, setNews] = useState([]);
    const [loadedNews, setLoadedNews] = useState(3);

    const fetchNews = async () => {
        const data = await apiGetService('news');
        if (data) setNews(data);
    };

    useEffect(() => {
        fetchNews();
    }, [ loadedNews ]);

    return (
    <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 my-4'>
            {news.length > 0 &&
                news.slice(0, loadedNews).map(({ id, createdAt, image, title }) => (
                    <div className='col my-3' key={id}>
                        <div className='card news__card h-100 border-0 shadow animate__animated animate__fadeIn'>
                            <Link to={ `/news/${ id }` }>
                                <img
                                    className='card-img-top news__img'
                                    src={image}
                                    alt={image}
                                />
                            </Link>
                            <div className='card-body'>
                                <p className='news__date my-2 ms-1'>
                                    { new Date( createdAt ).toLocaleDateString("es-ES", {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }) }
                                </p>
                                <h5 className='card-title news__title'>
                                    {title}
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        <button 
            className='btn news__btn-more mt-3 mb-5 p-3 mx-auto d-block'
            onClick={ ()  => setLoadedNews( loadedNews + 3 ) }
        >
            VER MAS NOTICIAS
        </button>
    </div>
    );
}

export default News;
