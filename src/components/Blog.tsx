import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Blog = () => {
  return (
    <section className='w-full max-w-[1200px] mx-auto flex flex-col gap-6 p-12 pb-8 '>
        <div className='flex flex-col gap-2'>
            <h2 className='text-text1 font-semibold text-[26px] sm:text-[46px]'>Checkout Our Blog</h2>
            <p className='text-[16px] sm:text-[18px] text-[#6E6F6F] '>With Attain mobile appsavailable on ios and Android platforms</p>
        </div>


        <div className='flex flex-col  sm:flex-row gap-4 bg-[#F7F5F1] pb-10'>
            <div className='w-full sm:w-[850px] h-[480px] bg-white'>
                <div>
                    <img src='https://assets.website-files.com/63b40407e0edaf2d3a02c9e2/63bbd9f1c04c8a5181537187_blog1.png'
                    alt='img' className='w-full h-[280px] object-cover' />
                </div>


                <div className='flex flex-col gap-4 p-4 pb-2'>
                    <h2 className='text-text1 text-[18px] sm:text-[22px]'>Shopify Marketing Stategies and Tips to Skyrocket your ROI</h2>

                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] sm:text-[14px] text-[#6E6F6F]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                        <button className=' px-4 py-3 border border-text1 rounded-full text-text1 flex justify-center items-center'>
                        <FiArrowUpRight size={24} /></button>
           
                    </div>
                </div>
            </div>


           
            <div className='w-full sm:w-[850px] h-[480px] bg-white'>
                <div>
                    <img src='https://assets.website-files.com/63b40407e0edaf2d3a02c9e2/63bbd9f1a5f15f066a88401c_blog2.png'
                    alt='img' className='w-full h-[280px] object-cover' />
                </div>


                <div className='flex flex-col gap-4 p-4 pb-2'>
                    <h2 className='text-text1 text-[18px] sm:text-[22px]'>Shopify Marketing Stategies and Tips to Skyrocket your ROI</h2>

                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] sm:text-[14px] text-[#6E6F6F]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                        <button className=' px-4 py-3 border border-text1 rounded-full text-text1 flex justify-center items-center'>
                        <FiArrowUpRight size={24} /></button>
           
                    </div>
                </div>
            </div>
            <div className='w-full sm:w-[850px] h-[480px] bg-white'>
                <div>
                    <img src='https://assets.website-files.com/63b40407e0edaf2d3a02c9e2/63bbd9f1c04c8a5181537187_blog1.png'
                    alt='img' className='w-full h-[280px] object-cover' />
                </div>


                <div className='flex flex-col gap-4 p-4 pb-2'>
                    <h2 className='text-text1 text-[18px] sm:text-[22px]'>Shopify Marketing Stategies and Tips to Skyrocket your ROI</h2>

                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] sm:text-[14px] text-[#6E6F6F]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                        <button className=' px-4 py-3 border border-text1 rounded-full text-text1 flex justify-center items-center'>
                        <FiArrowUpRight size={24} /></button>
           
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog