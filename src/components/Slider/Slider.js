import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import slideImg from '../../assets/sideshow-img.jpg';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Slider.css';

//install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const content = [
  {
    id: 1,
    imageUrl: slideImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ',
  },

  {
    id: 2,
    imageUrl: slideImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ',
  },
  {
    id: 3,
    imageUrl: slideImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ',
  },

];


const Slider = () => {

  return (

    <div>
      <Swiper
        effect='fade'
        spaceBetween={30}
        speed={200}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
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