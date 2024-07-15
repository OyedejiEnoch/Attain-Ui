import { footerLinks } from '@/constants'
import React from 'react'

const Footer = () => {
    const date =new Date()
    const year = date.getFullYear()

  return (
    <footer className='w-full  bg-[#2C2C2C] '>
        <div className=' flex sm:flex-row flex-col gap-14 p-10 sm:p-20 max-w-[1200px] mx-auto'>
    
        <div className=' w-[400px] flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
                <h2>Follow Us:</h2>
                <div className='flex items-center gap-2'>
                    <img src='/linkedin.png' alt='img' className='p-2 bg-[#FFFFFF] rounded-full'/>
                    <img src='/facebook.png' alt='img' className='p-2 bg-[#FFFFFF] rounded-full'/>
                    <img src='/youtube.png' alt='img' className='p-2 bg-[#FFFFFF] rounded-full'/>
                    <img src='/twitter.png' alt='img' className='p-2 bg-[#FFFFFF] rounded-full'/>
                </div>
            </div>

            <hr className='text-[#828282] max-w-[200px] ' />

            <div className='flex flex-col gap-6 max-w-[300px]'>
                <h2 className='text-[18px] sm:text-[20px] text-[#FFFFFF]'>
                Subscribe to our newsletter. Get Attain content straight to your inbox.
                </h2>

                <input className='px-8 py-6 bg-[#383737] rounded-full w-[300px] text-white 
                outline-none'  type='text' placeholder='Enter your email address' />
                <button className='py-4 rounded-full w-[200px] border border-white'>Subscribe</button>
            </div>
        </div>


        <div className='flex-1 flex  flex-wrap gap-10'>
            {footerLinks.map((link)=>(
                <div key={link.id} className='flex flex-col gap-8'>
                    <h2 className='font-semibold text-[18px]'>{link.title}</h2>

                    <ul className='flex flex-col gap-6 text-[14px] text-[#ACACAE] font-semibold'>
                        {link.links.map((link)=>(
                            <li key={link}>{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>


        </div>

        <div className='max-w-6xl flex mx-auto flex-col gap-6 sm:flex-row items-center justify-between py-10'>

            <div>
                <img src='/attainLogo2.png' alt='img'/>
            </div>


            <div className='flex items-center gap-6 text-[#ACACAE] '>
                <span>Security</span>
                <span>Cookie Policy</span>
                <span>Privacy</span>
                <span>Terms</span>
            </div>

            <div>
            © Copyright {year} Enoch Oyedeji 
            </div>

        </div>
    </footer>
  )
}

export default Footer