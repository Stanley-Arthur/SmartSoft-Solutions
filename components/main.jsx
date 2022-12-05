import React from 'react'
import { motion } from 'framer-motion'
import Typed from 'react-typed'
import {AiOutlineMail,AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div className='flex relative items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      
      <div className=' absolute h-screen top-0 right-0 left-0 bg-black/50 '/>
            <div className='text-white z-10  text-4xl '>
                <motion.h1  initial={{x:-500, opacity:0,scale:0.5,}} animate={{x:0, opacity:1, scale:1,}} transition={{duration:1.5}}className='text-[#00df9a] flex font-bold justify-center p-2'>SMART IT SOLUTION </motion.h1>
                <motion.p  initial={{x:-500, opacity:0,scale:0.5,}} animate={{x:0, opacity:1, scale:1,}} transition={{duration:1.5}} className='pt-3 md:text-2xl flex justify-center text-xl text:3xl font-bold md:py-6'>The Right Team to Deliver the Best </motion.p>
                <div className='flex justify-center'>
                <Typed className='text-lg font-bold' strings={["SECURITY","TECH SUPPORT","ACCESS CONTROL","COMMUNICATION","MANAGED SERVICES..."]} typeSpeed={120} backSpeed={140} loop />
            </div>


        
        </div>

        <div className='pt-[40] mt-6 absolute top-96'>

            <div className='flex items-center   justify-between my-4 w-full sm:w-[50%]  '>
                <div className='rounded-full shadow-lg  md:ml-4 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                    <FaLinkedinIn/>
                </div>
                <div className='rounded-full shadow-lg md:ml-4 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                   <AiOutlineMail/>
                </div>
                <div className='rounded-full shadow-lg  md:ml-4 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                     <BsFillPersonLinesFill/>
                 </div>
                <div className='rounded-full shadow-lg  md:ml-4 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                    <AiOutlineTwitter/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Main

  // <div className='flex relative items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      
  //     <div className=' absolute h-screen top-0 right-0 left-0 bg-black/70 '/>
  //     <div className='text-white z-10  text-5xl '>
  //       <motion.h2  initial={{x:-500, opacity:0,scale:0.5,}} animate={{x:0, opacity:1, scale:1,}} transition={{duration:1.5}}className=''>The right team to </motion.h2>
  //       <motion.h2  initial={{x:-500, opacity:0,scale:0.5,}} animate={{x:0, opacity:1, scale:1,}} transition={{duration:1.5}} className='pt-3'> deliver the best</motion.h2>
  //       <motion.p initial={{x:-500, opacity:0,scale:0.5,}} animate={{x:0, opacity:1, scale:1,}} transition={{duration:1.5}}
  //       className='pt-3 text-blue-900'>MANAGED SERVICES</motion.p>
        
        

  //     </div>
  //   </div>