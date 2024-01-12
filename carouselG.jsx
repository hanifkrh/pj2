import React from 'react';
import Slider from 'react-slick';
import Profile from './profile.jsx';
import Ing from './ing.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style-components/indicator.style.jsx'; // for indicator

function CarouselG( ) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className='slick-slider'>
          <Slider {...settings}>
            <div>
              <Profile/>
            </div>
            <div>
              <Ing/>
            </div>
          </Slider>
        </div>
    );
}

export default CarouselG;