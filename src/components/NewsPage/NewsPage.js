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
  }, [ compareState ]);

  const wordsTruncate = (str, no_words) => {
    return str.split(" ").splice(0,no_words).join(" ");
}

  return (
    <div className="container py-5">
        <div>
          <h2 className='mb-1'>Novedades</h2>
          <p className="lead border-bottom pb-3 mt-0">Enterate de las últimas noticias de nuestra institución</p>
          <div className='newsPage__filter mt-5 mb-4'>
            <i className='fas fa-filter me-2'></i>
            Filtrar por:
            <button className='btn btn-outline-secondary btn-sm ms-2 newsPage_btn-filter' onClick={ () => setCompareState() }>
              Todas
            </button>
            { categoryState && categoryState.map( ( { id, name } ) => {

                return (
                  <button 
                    className='btn btn-outline-secondary btn-sm ms-0 newsPage_btn-filter' 
                    onClick={ () => setCompareState(name) }
                    key={ id }
                  >
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

                (compareState === category.name || !compareState) && 
                <div className='col' key={ id }>
                  <div className='card border-0'>
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
                      <div className='card-text newsPage__content'>
                        { ReactHtmlParser( wordsTruncate( content, 35 ) + ' ...' ) }
                      </div>
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
