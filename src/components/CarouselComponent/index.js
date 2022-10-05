import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { withTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const CarouselComponent = () => {
  return (
    <div className='main-div'>
      <Slider {...settings}>
        <div>
          <img src="https://people.iitism.ac.in/~academics/assets/assets/images/index/01.jpg" className='w-100 desk' />
          <p className='img-h2'>IIT(ISM) Dhanbad | Legacy that inspires the future!</p>
        </div>
        <div>
          <img src="https://people.iitism.ac.in/~dsw/assets/images/scroll/pic5.jpg" className='w-100 desk' />
          <p className='img-h2'>The Students' Gymkhana IIT(ISM) Dhanbad</p>
        </div>
        <div>
          <img src="https://people.iitism.ac.in/~dsw/assets/images/scroll/pic10.jpg" className='w-100 desk' />
          <p className='img-h2'>International Yoga Day Celebration</p>
        </div>
        <div>
          <img src="https://people.iitism.ac.in/~dsw/assets/images/scroll/pic6.jpg" className='w-100 desk' />
          <p className='img-h2'>SG officials in action</p>
        </div>
      </Slider>
    </div>
  );
};

export default withTranslation()(CarouselComponent);