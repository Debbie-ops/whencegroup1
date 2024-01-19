import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import imageslide1 from '../assets/image1.jpg';
import imageslide2 from '../assets/slide2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Imagescroll = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    //dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // 5-second delay
  };

  const imageStyles = [
    {
      backgroundColor: 'rgba(0, 0, 255, 0.3)',
      height: '400px', // Adjusted height for mobile
    },
    {
      backgroundColor: 'rgba(255, 165, 0, 0.3)',
      height: '400px',
    },
  ];

  const headingStyles = {
    color: '#263238',
    fontSize: '50px', // Adjusted font size for mobile
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div id="home">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <div
            style={{
              width: '100%',
              height: '300px',
              backgroundImage: `url(${imageslide1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ...imageStyles[0],
            }}
          >
            <h1 style={headingStyles}>
              Whatever your need is, talk to us.
            </h1>
          </div>
        </div>
        <div>
          <div
            style={{
              width: '100%',
              height: '300px',
              backgroundImage: `url(${imageslide2})`,
              backgroundSize: 'cover',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ...imageStyles[1],
            }}
          >
            <h1 style={headingStyles}>
              Personal Loans that suit your needs
            </h1>
          </div>
        </div>
      </Slider>

      {/* Arrows for navigation 
      <div style={{ textAlign: 'center' }}>
        <FaChevronLeft
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={() => sliderRef.current.slickPrev()}
        />
        <FaChevronRight
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>*/}
    </div>
  );
};

export default Imagescroll;
