import React,{useState} from 'react'
import NavItems from './navItems'
import {AiOutlineClose, AiOutlineMenu,AiOutlineMail,AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {GiSmart} from 'react-icons/gi'

const Navbar = () => {
    const [nav, setNav]=useState(false)
   const handleNav=()=>{
        setNav(!nav)
    }
    
  return (
    <div className=' fixed w-full h-20 shadow-xl z-[100]'>
        <div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <div className='inline-flex cursor-pointer  '>
                <GiSmart className='text-5xl text-[#f7AB0A] animate-pulse   lg:text-4xl'/> 
                <h1 className='text-4xl text-white lg:text-lg'>SmartSoft<span className='animate-pulse text-blue-700'>IT</span></h1>

            </div>

            <div className='hidden md:block text-white'>
                <NavItems/>
            </div>
            <div onClick={handleNav} className='md:hidden' >
                <AiOutlineMenu size={25 }/>
            </div>
        </div>
        <div className={nav?`md:hidden fixed left-0 top-0 w-full h-screen bg-black/70`:""}>
    <div className={nav?`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ECF0F3] p-10 ease-in-out duration-500 `:
          `fixed left-[-100%] top-0 p-10 ease-in-out duration-500 `}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <div className='inline-flex cursor-pointer  '>
                            <GiSmart className='text-5xl text-[#f7AB0A] animate-pulse   lg:text-4xl'/> 
                            <h1 className='text-3xl text-white'>SmartSoft<span className='text-blue-700 animate-pulse'>IT</span></h1>

                        </div> 
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ' >
                            <AiOutlineClose/> 
                        </div>
                    </div> 
                    <div className='border-b border-gray-300 my-4 '>
                        <p className='w-[85%] md:w-[90%] py-4'>lets build something together</p>
                    </div>
                </div>
                <div>
                    <NavItems/>  
                    <div className='pt-[40] mt-6'>
                        <p className=' uppercase tracking-widest text-[#5651e5]'>Lets connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[50%] '>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                            <FaLinkedinIn/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                            <AiOutlineMail/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                             <BsFillPersonLinesFill/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                            <AiOutlineTwitter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar