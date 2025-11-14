import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Components/About.css";

import img1 from "../images/1 corporate car Rental.webp";
import img2 from "../images/2.car rental with dirver.webp";
import img3 from "../images/3.airport transfer.webp";
import img4 from "../images/4.fleet Leasing.webp";
import img5 from "../images/mecca and madina image.jpeg";

const About = () => {
  const aboutCards = [
    { title:" Car Rental", img: img1, price: "1" },
    { title: " Driver Services", img: img2, price: "2" },
    { title: " Airport Transfer", img: img3, price: "3" },
    { title: " Fleet Leasing", img: img4, price: "4" },
    { title: " Mecca & Medina", img: img5, price: "5" },
  ];

  return (
    <div className="about-swiper">
      <div className="about-header">
        <p>What We Do</p>
        <h2>Our Services</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2.8} // desktop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 17,
          },
          480: {
            slidesPerView: 1.8,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        }}
      >
        {aboutCards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="cardimg">
                <img src={card.img} alt={ card.title} />
                <div className="text-overlay">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{card.title}</p>
                </div>
              </div>
              <div className="tag">
                <p>
                  <span>{card.price}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default About;
