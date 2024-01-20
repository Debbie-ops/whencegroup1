import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    background: 'linear-gradient(to right, #8B4513, #006400, #00008B)',
    display: 'flex',
    flexDirection: 'column', // Adjusted to column layout for mobile
    alignItems: 'center',
    color: 'white',
    padding: '20px', // Added padding for spacing
  };

  const iconStyle = {
    fontSize: '20px', // Adjusted the icon size for mobile
    cursor: 'pointer',
    margin: '0 10px',
  };

  const linkStyle = {
    textAlign: 'center',
    margin: '10px 0',
    fontSize: '12px' // Added margin for spacing
  };

  return (
    <div className='footer' style={footerStyle}>
      <div style={linkStyle}>
        <h3>Connect with Us</h3>
        <a href='https://www.facebook.com/whencefinancialservices' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
        </a>
        <a href='https://www.linkedin.com/company/whence-financial-services-wfs/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
        </a>
        <a href='https://www.youtube.com/@whencefinancialservices2731' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
        </a>
      </div>
      <div style={linkStyle}>
        <h3>Visit our WithinHere App</h3>
        <a href='https://play.google.com/store/apps/details?id=com.whence.withinhere&pli=1' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGooglePlay} style={iconStyle} />
        </a>
        <a href='https://apps.apple.com/us/app/withinhere/id6469520099' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faAppStore} style={iconStyle} />
        </a>
      </div>
      <div style={linkStyle}>
      <p>&copy; 2024 WhenceFinancialServices</p>
      </div>
    </div>
  );
};

export default Footer;
