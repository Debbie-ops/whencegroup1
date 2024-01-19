import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/contractfinancing.jpg';
import image2 from '../assets/educationfinance.jpg';
import image3 from '../assets/emergencyrelief.jpg';
import image4 from '../assets/growyourbusiness.jpg';
import image5 from '../assets/paydaysoftloan.jpg';
import image6 from '../assets/medicalfinancing.jpg';
import image7 from '../assets/generalfinance.jpg';

const Classes = {
  carouselItem: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    textAlign: 'center',
    cursor: 'pointer',
  },
};

const Carousel = () => {
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    // Navigate to the Moreservices component with the image index
    navigate(`/moreservices/${index}`);
  };

  const images = [image1, image2, image3, image4, image5, image6, image7 ];

  const items = images.map((image, index) => (
    <div
      key={index}
      onClick={() => handleItemClick(index + 1)}
      style={Classes.carouselItem}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
          marginRight: '20px',
        }}
      >
        <img
          src={image}
          alt={`Image ${index + 1}`}
          height="300"
          style={{ marginBottom: '20px' }}
        />
      </div>
    </div>
  ));

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div style={{ marginTop: '20px', maxWidth: '1200px', margin: '0 auto' }} id='carousel'>
      <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>
         <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Beyond the Familiar! </h2>
      </h3>
      <p style={{ textAlign: 'center', fontSize: '1.0rem', marginBottom: '20px' }}>
        Choose any of our facilities
      </p>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
