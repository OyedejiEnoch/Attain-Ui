import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const About = () => {
  return (
    <section className='flex flex-col gap-24 pt-20'>
        {/* first */}
        <div className='flex flex-col sm:flex-row gap-16 p-5'>
            <div className='flex-1'>
                <img src='/aboutImg1.png' alt='img' className='w-[550px]'/>
            </div>
            <div className='flex flex-col gap-4 flex-1 max-w-[500px]'>
                <h2 className='text-text1 text-[24px] sm:text-[46px]  '>Faster, easier, more convenienty</h2>
                <p className='text-[16px] sm:text-[18px] text-[#6E6F6F] '>That's what your customers want. Keep the conversation flowing from chat to video to
                cobrowsing and more as you answer their questions.</p>
            <button className='w-[200px] px-8 py-3 border border-text1 rounded-3xl text-text1 flex items-center gap-2'>Get Started
            <FiArrowUpRight size={24} /></button>
            </div>           
        </div>

        <div className='flex flex-col-reverse gap-16 sm:flex-row mt-6 p-5'>
            <div className='flex flex-col gap-4 flex-1 max-w-[500px]'>
                <h2 className='text-text1 text-[24px] sm:text-[46px]'>Show and tell at its finest</h2>
                <p className='text-[16px] sm:text-[18px] text-[#6E6F6F] '>That’s what your customers want. Keep the conversation flowing from chat to video to 
                cobrowsing and more as you answer their questions.</p>
            <button className='w-[200px] px-8 py-3 border border-text1 rounded-3xl text-text1 flex items-center gap-2'>Get Started
            <FiArrowUpRight size={24} /></button>

            </div>           
            <div className='flex-1'>
                <img src='/aboutImg2.png' alt='img' className='w-[500px]'/>
            </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-16 mt-6 p-5'>
            <div className='flex-1'>
                <img src='/aboutImg3.png' alt='img' className='w-[550px]'/>
            </div>
            <div className='flex flex-col gap-4 flex-1 max-w-[500px]'>
                <h2 className='text-text1 text-[24px] sm:text-[46px]  '>Be Available 24/7with AI Chatbot</h2>
                <ul className='flex flex-col gap-6 text-text1'>
                    <li className='flex items-center gap-2'><img src='/markImg.png' alt='img' className='bg-green-600 p-1 rounded-lg'/>Engage your customers with real time answers toFAQs.</li>
                    <li className='flex items-center gap-2'><img src='/markImg.png' alt='img'className='bg-green-600 p-1 rounded-lg'/>Engage your customers with real time answers toFAQs.</li>
                    <li className='flex items-center gap-2'><img src='/markImg.png' alt='img'className='bg-green-600 p-1 rounded-lg'/>Engage your customers with real time answers toFAQs.</li>
                </ul>


            <button className='w-[200px] px-8 py-3 border border-text1 rounded-3xl text-text1 flex items-center gap-2'>Read More
            <FiArrowUpRight size={24} /></button>
            </div>           
        </div>
    </section>
  )
}

export default About