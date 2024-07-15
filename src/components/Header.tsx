import React from 'react'
import Navbar from './Navbar'
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowDown } from "react-icons/go";

const Header = () => {
  return (
    <div className='w-full'>
        <Navbar />

        <div className='flex gap-4 sm:flex-row flex-col text-text1 pt-16 px-4'>
            <div className='flex flex-col gap-6 max-w-[600px] relative'>
                <h2 className='font-semibold text-[60px] sm:text-[80px] leading-[70px] z-[10px]'>Engagement with customers starts here</h2>
                <p className='text-[18px] text-[#6E6F6F]'>Connect and collaborate with consumers via chat, video, browsing, and other methods. With Attain's digital 
                platform, you can improve resolutions, satisfaction, and income.</p>

                <div className='flex flex-col sm:flex-row items-center gap-6'>
                    <button className='px-8 py-4 border border-text1 rounded-full text-text1 w-full hover:text-white hover:bg-text1 transition duration-150' >Book a Demo</button>
                    <button className='px-8 py-4 border border-text1 rounded-full text-text1 w-full flex items-center 
                    justify-center gap-4 hover:bg-text1 transition duration-150 hover:text-white'>Try for free 
                        <FiArrowUpRight size={24} /></button>
                </div>

                <div className='px-4 py-10 border border-text1 w-[60px] rounded-full mt-2'>
                    <GoArrowDown size={28} />
                </div>

                <img src='/headerAttain2.png' alt='img' className='absolute left-2 sm:right-11 top-[195px] sm:top-[135px] w-[200px] sm:w-[300px]' />
            </div>


            <div>
                <img src='/headerAttain1.png' alt='img' />
            </div>
        </div>
    </div>
  )
}

export default Header