import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import slideImg from '../../assets/sideshow-img.jpg';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './Slider.css';

//install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

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
        autoplay={{ delay: 3000 }}
        effect='fade'
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        spaceBetween={30}
        speed={2000}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
      >

        {content.map((slide) => (

          <SwiperSlide key={slide.id}>
            <div className='container-fluid p-0'>
              <img className='img-fluid slider__img' src={slide.imageUrl} alt='slider__img'></img>
              <span className='slider__text text-center'>{slide.text}</span>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>

  );

}

export default Slider;