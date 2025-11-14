import React from 'react';
import "../Components/Transportation.css";
import img1 from "../images/3.airport transfer.webp";
import img2 from "../images/bmw.jpeg";
import img3 from "../images/ford ranger.jpeg";
import img4 from "../images/forturner.jpeg";
import img5 from "../images/kia.jpg";
import img6 from "../images/mggt.jpg";
import img7 from "../images/rav4.jpeg";

import { FaCog, FaCar, FaChair, FaUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Transportation = () => {
  const vehicles = [
    { title: "Luxury Bus", price: "140 SAR/day", img: img1 },
    { title: "BMW Series", price: "250 SAR/day", img: img2 },
    { title: "Ford Ranger", price: "220 SAR/day", img: img3 },
    { title: "Toyota Fortuner", price: "200 SAR/day", img: img4 },
    { title: "Kia Sportage", price: "180 SAR/day", img: img5 },
    { title: "MG GT", price: "170 SAR/day", img: img6 },
    { title: "Toyota RAV4", price: "190 SAR/day", img: img7 },
  ];

  return (
    <div className='trans-container'>
      <div className='section-header'>
        <div className='header-left'>
          <div className='vertical-line'></div>
          <h2>Pick Your Transportation</h2>
        </div>
      </div>

      <Swiper
        modules={[ Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.8}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1.5, spaceBetween: 18 },
          480: { slidesPerView: 1.8, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 2.3, spaceBetween: 26 },
        }}
      >
        {vehicles.map((vehicle, index) => (
          <SwiperSlide key={index}>
            <div className='transcard'>
              <img src={vehicle.img} alt={vehicle.title} />
            </div>

            <div className='half-content-card'>
              <div className='half-card-left'>
                <h2>{vehicle.title}</h2>
                <div className='icon-row'>
                  <div className='icon-item'><FaCog /> Auto</div>
                  <div className='icon-item'><FaCar /> AC</div>
                  <div className='icon-item'><FaChair /> 30 seats</div>
                  <div className='icon-item'><FaUser /> 50 user</div>
                </div>
              </div>

              <div className='half-card-right'>
                <h2>{vehicle.price}</h2>
                <button className='join-btn'>Join</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Transportation;
