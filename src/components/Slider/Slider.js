import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import apiGetService from '../../services/apiGetService';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './Slider.css';

//install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Slider = () => {

  const [ slideState, setSlideState ] = useState();

  useEffect(() => {

    (async () => {

      const welcomeResponse = await apiGetService('organizations/public');
      const slideResponse = await apiGetService('slides', welcomeResponse.id);

      setSlideState(slideResponse);

  })()

}, [])


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

        { slideState && slideState.map((slide) => (

          <SwiperSlide key={slide.id}>
            <div className='container-fluid slider__container p-0'>
              <img className='slider__img img-fluid' src={slide.imageUrl} alt='slider__img'></img>
              <span className='slider__text text-center'>{slide.text}</span>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>

  );

}

export default Slider;