import React from 'react';

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <div className='gmap-frame'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50%' }}>
            <iframe
              width="100%"
              height="420"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=520&amp;hl=en&amp;q=Zimco%20House%20Building.%20Suites%20401%20&amp;%20402%204th%20Floor%20Chainda%20Place+(WhenceFinancialServices)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Whence Financial Services Map"
            ></iframe>
          </div>
          <div style={{ width: '45%', padding: '0 20px' }}>
            <h2 style={{ color: '#263238', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Contact Us</h2>
            <div>
              <strong>Work Time:</strong>
              <p>08:00 - 17:00</p>
            </div>
            <div>
              <strong>Head Quarters:</strong>
              <p>Zimco House Building, Suites 401 & 402, 4th Floor, Chainda Place</p>
            </div>
            <div>
              <strong>Contact:</strong>
              <p>+260 971 089 407</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
