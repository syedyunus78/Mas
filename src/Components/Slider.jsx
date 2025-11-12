import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../images/newone1.jpg";
import image2 from "../images/newone7.jpg";
import image3 from "../images/newone4.webp";

const Slider = () => {
  const slides = [
    {
      img: image1,
      title: " * PREMIUM",
      subtitle: "Luxury Passenger Transport Service.",
    },
    {
      img: image2,
      title: "* PREMIUM",
      subtitle: "Corporate Transport Solutions.",
    },
    {
      img: image3,
      title: " * COMFORT & STYLE",
      subtitle: "Travel in elegance, every time.",
    },
  ];

  return (
    <div className="slideshow">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        speed={1000}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img src={item.img} className="slide-img" alt={item.title} />
              <div className="slide-overlay"></div>
              <div className="slide-text">
                <p className="slide-title">{item.title}</p>
                <h2 className="slide-sub">{item.subtitle}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
