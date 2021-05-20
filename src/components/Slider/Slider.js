import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Slider.css';

//install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const content = [
  {
    id: 1,
    imageUrl: 'https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-big-item.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ',
  },

  {
    id: 2,
    imageUrl: 'https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-02.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ',
  },
  {
    id: 3,
    imageUrl: 'https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-03.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ',
  },

];


function Slider() {

  return (

    <div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {content.map((slide) => (

          <SwiperSlide key={slide.id}>
            <div className='slider__container'>
              <div className='slider__img'>
                <img src={slide.imageUrl} alt='slider__img'></img>
              </div>
              <div className='slider__txt'>{slide.text}</div>
            </div>

          </SwiperSlide>

        ))}

      </Swiper>
    </div>

  );

}


export default Slider;