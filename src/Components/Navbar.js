import React, {   } from 'react'
import Vector1 from '../assets/parents.png';
import Vector2 from '../assets/nanny.png';

import Vector3 from '../assets/booking.png';



function Navbar() {

 
    return (
        <>
        <div className='flex flex-col items-center md:items-start'>
            <div className='fixed  w-[270px]   h-screen   bg-[#7E66AD]'>
        <div className='flex  ml-[60px]'>
                <label className='font-Poppins font-extrabold text-2xl  flex mt-14  text-white  '>

                    Nanny Co
                    </label>
                    </div>

                
                <ul className=' my-12 text-xl font-Poppins text-white '>
                    <div >
                    <li  > <img src={Vector1} alt='1' className='mx-8  h-[35px]' /> 
                       <a href='/'>Parents</a>  </li>
                    <li ><img src={Vector2} alt='1' className='mx-8  h-[35px]' /> 
                    <a href='/Nanny'>Nannies</a></li>
                    <li > <img src={Vector3} alt='1' className='mx-8  h-[35px]' /> 
                    <a href='/Booking'> Bookings </a></li>


                    </div>

                </ul>


             

            </div>


        </div>

        </>


    )
}

export default Navbar