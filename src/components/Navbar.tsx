import { menuLinks } from '@/constants'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { IoMdMenu } from 'react-icons/io'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 px-4'>
        <div>
            <img src='/attainLogo.png' alt='img' />
        </div> 

        <div className='hidden sm:flex items-center gap-6 text-[16px] '>
            {menuLinks.map((link)=>(
                <span className='text-text1' key={link.id}>{link.title}</span>
            ))}
        </div>


        <div className='hidden sm:flex items-center gap-6'>
            <span className='text-text1'>Log in</span>
            <button className='px-6 py-2 border border-text1 rounded-3xl text-text1 flex items-center gap-2'>Book a Demo
            <FiArrowUpRight size={24} />
            </button>
        </div>

        <div className="sm:hidden flex cursor-pointer">
        <IoMdMenu size={32} className='text-text1' />
      </div>
    </nav>
  )
}

export default Navbar