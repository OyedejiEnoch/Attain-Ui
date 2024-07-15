import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Reviews = () => {
  return (
    <section className='w-full max-w-[1200px] mx-auto p-10 py-6 pb-10'>
        <div className='flex flex-col-reverse sm:flex-row items-center gap-28'>
            <div className='flex-1'>
                <img src='/reviewImg.png' alt='img' />
            </div>

            <div className='flex-1 flex flex-col gap-6'>
                <h2 className='text-text1 text-[26px] sm:text-[46px] leading-[35px]'>What our customers are saying</h2>
                <p className='text-[16px] sm:text-[18px] text-[#6E6F6F]'>“We don’t want our customers to have to do much to get what they need. And Acquire 
                is a cornerstone of that because it helps us achieve our goal.”</p>

                <p className='text-text1 text-[20px] sm:text-[24px]'>– Debid Goodman, Customer Experience Lead, HLC</p>
            
                <button className='w-[300px] px-8 py-4 border border-text1 rounded-full  text-white bg-text1
                flex items-center justify-center gap-4' >Read the story
                <FiArrowUpRight size={24} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Reviews