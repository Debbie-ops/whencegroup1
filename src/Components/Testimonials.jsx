import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import mubangaImage from '../assets/mubanga.jpg'; 
import mirriamImage from '../assets/mirriam.jpg';
import douglasImage from '../assets/douglas.jpg';

const Testimonials = () => {
  const testimonials = [
    { id: 1, title: '-Mubanga Mukuka', description: '"Whence is empowering men and women who are in various businesses with loans, especially those that have challenges in improving their business like me."', image: mubangaImage },
    { id: 2, title: '-Mirriam Lungu', description: '"A very wonderful Micro-Finance that is helping Local Enterprises with funding in order to accelerate their businesses."', image: mirriamImage },
    { id: 3, title: '-Douglas Lungu', description: '"Iwas able to pay for my tuition fees thanks to Whence"', image: douglasImage },
  ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto mt-[-80px]' id="testimonial">
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Testimonials</h2>
        <p className='text-neutralGrey'>Look at what people are saying</p>
        
      </div>
      
      {/* cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'> 
        {
            testimonials.map(testimonial => 
                <div key={testimonial.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow 
                cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300
                flex items-center justify-center h-full'>
                    <div>
                        <div className=' mb-4 h-18 w-18 mx-auto overflow-hidden rounded-full'>
                        {/*<FontAwesomeIcon icon={testimonial.icon} className='text-yellow-400 text-5xl' />*/}
                        <img src={testimonial.image} alt='Testimonial' className='h-full w-full object-cover' />
                        </div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{testimonial.title}</h4>
                        <p className='text-sm text-neutralGrey'>{testimonial.description}</p>
                    </div>

                </div>)
        }
      </div>
    </div>

    
  )
};

export default Testimonials;
