import React, { useEffect } from 'react';
import apiGetService from '../../services/apiGetService';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import noimage from '../../assets/no_image.jpg';
import './NewsPage.css';


const NewsPage = () => {

  const [news, setNews] = useState([]);
  const [categoryState, setCategoryState] = useState();
  const [compareState, setCompareState] = useState();

  const fetchNews = async () => {
    const data = await apiGetService('news');
    if (data) setNews(data);
  };

  const fetchCategories = async () => {
    const data = await apiGetService('categories');
    if (data) setCategoryState(data);
  };

  useEffect(() => {
    fetchNews();
    fetchCategories();
  }, []);

  return (
    <div className="container py-5">
        <div>
          <h2>Novedades</h2>
          <p className="lead border-bottom pb-3">Este es el subtitulo de novedades</p>
          <div className='newsPage__filter mt-4'>
            <i className='fas fa-filter me-2'></i>
            Filtrar por:
            { categoryState && categoryState.map( ( { name } ) => {

                return (
                  <button className='btn mx-4' onClick={ () => setCompareState() }>
                    { name }
                  </button>
                  )
              }) 
            }
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-3 g-4 my-3'>
          {
            news.length > 0 ? (
            news.map(( {id, category, content, createdAt, image, title } ) => {

              return (
                <div className='col'>
                  <div className='card border-0' key={ id }>
                    <div className='newsPage__img-box'>
                      <Link className='newsPage__link' to={`news/${ id }`}>
                        <img src={ image || noimage } className='card-img-top newsPage__img' alt={ image } />
                      </Link>
                    </div>
                    <div className='card-body'>
                      <p className='newsPage__date my-2 ms-1'>
                        { new Date( createdAt ).toLocaleDateString("es-ES", {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'   }) }
                      </p>
                      <h4 className='card-title newsPage__title'>{ title }</h4>
                      <p className='card-text'>
                        { ReactHtmlParser( content.slice(0,230) + ' ...') }
                      </p>
                      <p className='mt-0'>
                        <Link className='newsPage__link' to={`news/${ id }`}>
                          Leer más
                          <i className="fas fa-arrow-right ms-3"></i>
                        </Link>
                    </p>
                    </div>
                  </div>
                </div>
              )

            })
            ) : ( <Spinner /> )
          }
        </div>
    </div>
  );
};

export default NewsPage;
