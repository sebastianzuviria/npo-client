import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

//install Swiper modules
SwiperCore.use([Navigation, Pagination]);

let content = [
  {
    id: 1,
    imageUrl:
      "https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-01.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ",
  },
  {
    id: 2,
    imageUrl:
      "https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-02.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ",
  },
  {
    id: 3,
    imageUrl:
      "https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-03.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed fringilla leo, id varius orci. ",
  },
];

function slider() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {content.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="container">
              <div className="slide-img">
                <img src={slide.imageUrl} alt="slider-img"></img>
              </div>
              <div className="slide-txt">{slide.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default slider;
