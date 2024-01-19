import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    height: '100px', // Adjust the height as needed
    background: 'linear-gradient(to right, #8B4513, #006400, #00008B)', // Set the background color
    display: 'flex',
    justifyContent: 'space-around', // Add space around the icons
    alignItems: 'center',
    color: 'white', // Set the text color
  };

  const iconStyle = {
    fontSize: '30px', // Adjust the icon size as needed
    cursor: 'pointer',
    margin: '0 10px',
 
  };

  const linkStyle = {
    flex: 0, // Fill the available space evenly
    textAlign: 'center', // Center the text within the link
  };

  return (
    <div className='footer' style={footerStyle}>
      <div>
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
      <div>
        <h3>Visit our WithinHere App</h3>
        <a href='https://play.google.com/store/apps/details?id=com.whence.withinhere&pli=1' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGooglePlay} style={iconStyle} />
        </a>
        <a href='https://apps.apple.com/us/app/withinhere/id6469520099' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faAppStore} style={iconStyle} />
        </a>
      </div>
      <p>&copy; 2024 WhenceFinancialServices</p>
    </div>
  );
};

export default Footer;
