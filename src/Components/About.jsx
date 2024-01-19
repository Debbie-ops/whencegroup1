import React from 'react'
import aboutImg from '../assets/branches.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersLine, faArrowsDownToPeople, faBuildingUser, faPeopleLine } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (
    <div>
      
      <div className='px-4 lg:px-16 max-w-screen-2xl mx-auto my-8' id="about">
        <div className='md:w-12/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={aboutImg} alt="" style={{height: '450px', width: '1200px'}}/> 
            </div>
            <div className='md:w-4/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>WHO WE ARE</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'> Whence Financial Services is a member of Whence Group, an indigenous Company incorporated in Zambia. 
                The institution is essentially a platform upon which highly motivated and resourceful entrepreneurs from high 
                institutions of learning and other sectors of society merge to find innovative solutions to the world’s problems.
                </p>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>OUR VISION</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'> Whence shall be a global platform, recognized as preeminent by members of staff, clients, competitors and the public. 
                Our hallmark shall be innovation, initiative, teamwork, the ability to anticipate and effectively respond to change 
                while creating value.
                </p>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>OUR MISION</h2>
                <p>It is Whence’s Mission to enhance the well-being and success of Individuals, Communities, Industries and Countries globally through the provision of “BEYOND THE FAMILIAR” Products and Services. 
                </p></p>
                

            </div>
        </div>

      </div>

      
{/* company stats bar */}
<div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 flex flex-col md:flex-row'> 
        <div className='md:w-1/2'>
          <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping local individuals<br/>
            <span className='text-brandPrimary'>and businesses reinvent themselves</span>
          </h2>
          <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>  
          </p>
        </div>
        {/* stats bar */}
        <div className='md:w-1/2 flex md:flex-row flex-col items-center justify-around gap-12'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <div>
              <FontAwesomeIcon icon={faUsersLine} className='text-brandPrimary text-5xl mx-auto' />
              <h4 className='text-2xl text-neutralDGrey font-semibold'> Over 300</h4>
              <p>Members</p>
            </div>
          </div>
          <div className='flex items-center gap-4 text-center'>
            <div>
              <FontAwesomeIcon icon={faArrowsDownToPeople} className='text-brandPrimary text-5xl mx-auto' />
              <h4 className='text-2xl text-neutralDGrey font-semibold'> 18</h4>
              <p>Branches</p>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 flex md:flex-row flex-col items-center justify-around gap-12'>
          <div className='flex items-center gap-4 text-center'>
            <div>
              <FontAwesomeIcon icon={faBuildingUser} className='text-brandPrimary text-5xl mx-auto' />
              <h4 className='text-2xl text-neutralDGrey font-semibold'> 8 </h4>
              <p>Provinces</p>
            </div>
          </div>
          <div className='flex items-center gap-4 text-center'>
            <div>
              <FontAwesomeIcon icon={faPeopleLine} className='text-brandPrimary text-5xl mx-auto' />
              <h4 className='text-2xl text-neutralDGrey font-semibold'> Over 1000</h4>
              <p>Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;
