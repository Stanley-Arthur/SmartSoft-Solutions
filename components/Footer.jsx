import React from 'react'
import Link from 'next/link'

import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='flex justify-around text-white bg-violet-900 h-96 mt-10 relative'>
        <div className='flex flex-col space-y-4 justify-center items-center'>
            <h3>SmartSoft Solutions</h3>
            <p> Connected – Secure – Reliable</p>
            <p>Ph: 1300 626 765</p>
            <p>Fax: (07) 3812 1751</p>
            <p>Email: support@mansol.net.au</p>
           
        </div>
        <div className='flex flex-col  justify-center items-center'>
            <h3>SITEMAP</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Disclaimer</Link>
            <Link href="#">Home</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Network Help: Mikrotik</Link>
            <Link href="#">Not For Profit</Link>
            <Link href="#">Our Partners</Link>
            <Link href="#">Quality Assurance</Link>
            <Link href="#">Safety</Link>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Who We Are</Link>
        </div>
        <div className='flex py-12 justify-center absolute bottom-0 left-0'>
        <Link href='/'>
            <div className=' rounded-full p-4 shadow shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 animate-pulse justify-center'>
               <HiOutlineChevronDoubleUp size={35}/>
            </div>
            
        </Link>

        </div>
    </div>
  )
}


export default Footer