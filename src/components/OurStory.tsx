import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const OurStory = () => {
  return (
    <section className='w-full h-[300px] sm:h-[700px] bg-[#F9F9F9]  sm:bg-img1 bg-cover object-contain flex flex-col items-center justify-center'>
        <div className='w-full  flex flex-col items-center justify-center  text-text1  gap-6 max-w-[300px] sm:max-w-[500px]'>
            <h2 className='text-text1 font-semibold text-[26px] sm:text-[46px]'>Plug into your world</h2>
            <p className='text-[16px] sm:text-[18px] text-[#6E6F6F] text-center'>"We dont want our customers to have to do much to get what they need. And acquire is a 
                cornerstone of that because it helps us to acheive our goal"</p>

            <button className='w-[250px] px-8 py-4 border border-text1 rounded-full  text-white bg-text1
                flex items-center justify-center gap-4' >Read the story
                <FiArrowUpRight size={24} />
            </button>
        </div>
    </section>
  )
}

export default OurStory