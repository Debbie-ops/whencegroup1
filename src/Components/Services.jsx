import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRays, faUsersBetweenLines, faSchoolFlag, faStaffSnake, faSackXmark, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { id: 1, title: 'PayDay SoftLoan', icon: faPersonRays, description: "Experience the ease of payday loans when you need swift cash and your bank can't deliver. Explore this reliable option for quick funds and make a well-informed financial decision tailored to your needs!" },
    { id: 2, title: "General Finance", icon: faUsersBetweenLines, description: "General finance encompasses a number of facilities catering to a wider public whether in the formal or informal sectors. These applicants are evaluated and vetted on strength of their net income or proposed collateral" },
    { id: 3, title: 'Education Finance', icon: faSchoolFlag, description: 'Invest in your future confidently! Our education loans simplify the path to knowledge, supporting your journey towards a brighter tomorrow.' },
    { id: 4, title: 'Medical Financing', icon: faStaffSnake, description: 'Invest in your future confidently! Our education loans simplify the path to knowledge, supporting your journey towards a brighter tomorrow.' },
    { id: 5, title: 'Emergency Relief', icon: faSackXmark, description: 'Invest in your future confidently! Our education loans simplify the path to knowledge, supporting your journey towards a brighter tomorrow.' },
    { id: 6, title: 'Contract Financing', icon: faFileCircleCheck, description: 'Invest in your future confidently! Our education loans simplify the path to knowledge, supporting your journey towards a brighter tomorrow.' },
  ];

  return (
    <div className='md:px-14 px-4 py-0 max-w-screen-2xl mx-auto' id="services">
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Services</h2>
        <p className='text-neutralGrey'>
          Welcome to Whence Financial Services, your trusted partner in financial empowerment. At Whence, we understand that everyone's financial journey is unique, and we are dedicated to providing personalized solutions to meet your specific needs.
        </p>
      </div>



      {/*<div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-2xl text-neutralDGrey font-semibold mb-3 margin-top: 20px'>
          
        </h2>
      </div>
      {/* cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
          services.map(service =>
            <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow 
              cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300
              flex items-center justify-center h-full'>
              <div>
                <div className=' mb-4 h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl'>
                  <FontAwesomeIcon icon={service.icon} className='text-brandPrimary text-5xl' />
                </div>
                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                <p className='text-sm text-neutralGrey'>{service.description}</p>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Services;
