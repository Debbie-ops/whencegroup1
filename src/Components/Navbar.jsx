import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import { FaTimes, FaBars, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo1 from '../assets/whence.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Our Services', path: 'services' },
    { link: 'About', path: 'about' },
    { link: 'FAQ', path: 'faq' },
    { link: 'Testimonial', path: 'testimonial' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <header className={`w-full ${isSticky ? 'bg-white' : 'md:bg-transparent'} fixed top-0 left-0 right-0`} style={{ zIndex: 998 }}>
      <div className="upper-section" style={{ background: 'linear-gradient(to right, orange, green, blue)', padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo or image in the top-left corner */}
        <img src={logo1} alt="Logo" className="w-15 inline-block items-center" style={{height: '50px'}}/>

        {/* Contact and Email sections */}
        <div className="flex items-end">
          <div className="text-white">
            {/* Contact icon and text */}
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>Contact: + 260 971 089 407</span>
            </div>

            {/* Message icon and text */}
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>Email: info@whencegroup.com</span>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`py-4 lg:px-14 px-4 ${isSticky ? 'top-0 left-0 right-0 border-b bg-white' : ''}`}
        style={{ position: 'relative' }}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="" className="text-2xl font-semibold flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-15 inline-block items-center" style={{height: '30px'}}/>
            <span className="text-[#263238]">WhenceFinancialServices</span>
          </a>

          {/* Large screens */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-150}
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Get Started
            </button>
          </div>

          {/* Mobile device appearance */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDgrey focus:outline-none focus:text-gray-500">
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Nav menu for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-24 py-2 bg-brandPrimary ${
            isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
          }`}
          style={{ zIndex: 999 }}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>

      {/* Lower part of the navbar */}
      <div className="lower-part" style={{ backgroundColor: 'white' }}>
        {/* Your content here */}
      </div>
    </header>
  );
};

export default Navbar;