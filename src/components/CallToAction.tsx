import React from 'react'

const CallToAction = () => {
  return ( 
    <section className='w-full bg-[#F7F5F1] pt-20 px-6 sm:px-10'>
        <div className='max-w-[1200px] mx-auto flex items-center justify-center flex-col sm:flex-row gap-10 sm:px-8'>
 
        <div className='flex flex-1 flex-col gap-6   py-4 max-w-[500px] justify-center '>
            <h2 className='text-text1 text-[26px] sm:text-[46px] leading-[40px] max-w-[300px] '>Assist your Customers on the go</h2>
            <p className='text-[16px] sm:text-[18px] text-[#6E6F6F]'>With Attain mobile appsavailable on ios and Android platforms</p>

            <div className='flex items-center gap-4'>
                <img src='/googlePlayImg.png' alt='img'/>
                <img src='/appStoreImg.png' alt='img'/>
            </div>
        </div>

        <div className='flex-1'>
            <img src='/ctaImg.png' alt='img'className='w-[600px]' />
        </div>

     <div>
       
    </div>

        </div>
    </section>
  )
}

export default CallToAction