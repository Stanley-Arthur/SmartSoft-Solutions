import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {AiOutlineWifi,AiOutlineCloudServer} from 'react-icons/ai'
import {GrSettingsOption} from 'react-icons/gr'
import {GiWaveSurfer,GiElectric} from 'react-icons/gi'
import {BsArrowClockwise} from 'react-icons/bs'
import {MdSecurity} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {TfiSupport} from 'react-icons/tfi'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
 

const About = () => {
  return ( 
  <div className='flex flex-col '>
    <div className='flex justify-center my-24 space-y-4 flex-col items-center'>
       <div  className=''><h1>SmartSoft IT Solutions</h1> </div>
       <div className='flex flex-col items-center '>
       <p>SmartSoft Solutions has a proven track record over  <span className='text-violet-900 font-bold'>10 years</span>, </p> 
       <p>we deliver <span className='text-violet-900 font-bold'>reliable</span>, <span className='text-violet-900 font-bold'>well designed</span>, and <span className='text-violet-900 font-bold'>cost effective</span> business</p>
       <p>technology, communications and support</p>
       </div>
    </div>
    <div></div>

    <div className=' max-w-7xl mx-[5%] items-center md:space-x-4 space-y-6 grid md:grid-cols-2 lg:grid-cols-3   '>

        

        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <AiOutlineCloudServer size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                COMPUTER NETWORK ENGINEERS
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-5'>
                    <li>
                        Servers
                    </li>
                    <li>
                        Workstations
                    </li>
                    <li>
                        Notebooks
                    </li>
                    <li>
                        Hosted Services
                    </li>
                    <li>
                        Design, Supply and Services
                    </li>
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>
        </div>
        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <AiOutlineWifi size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                CONNECTIVITY
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-5'>
                    <li>
                        internet
                    </li>
                    <li>
                        VPN and WAN
                    </li>
                    <li>
                        Optical Fibre
                    </li>
                    <li>
                        Wireless Installation
                    </li>
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>
        </div>
        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <GiWaveSurfer size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                INDUSTRIAL COOLERS
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-5'>
                    <li>
                        Service and Maintenance
                    </li>
                    <li>
                        New Installations
                    </li>
                    <li>
                        Filtered Air
                    </li>
                    
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>
        </div>
        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <BsArrowClockwise size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                DATA SOLUTIONS
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-3'>
                    <li>
                        Backup
                    </li>
                    <li>
                        Disaster Recovery
                    </li>
                    <li>
                        Offsite Backup
                    </li>
                    <li>
                        Server Hosting
                    </li>
                    
                    <li>
                        High Availability
                    </li>
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>
        </div>
        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <GiElectric size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                ELECTRICAL, PHONE AND DATA
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-5'>
                    <li>
                        New and existing sites
                    </li>
                    <li>
                        Adds, Moves and Changes
                    </li>
                    <li>
                        Cat 5, Cat 6, Optical Fibre
                    </li>
                    <li>
                        Licensed Electrical Contractor
                    </li>
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>
        </div>
        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <AiOutlineWifi size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                INTERNET
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-5'>
                    <li>
                        Business-grade broadband
                    </li>
                    <li>
                        High speed connectivity
                    </li>
                    <li>
                        ADSL,ADSL 2, wireless, microwave
                    </li>
                    <li>
                        web and mail hosting
                    </li>
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>
        </div>
        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <TfiSupport size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                MANAGED SERVICES PROSUPPORT
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-5'>
                    <li>
                        Fixed IT support costs
                    </li>
                    <li>
                        24/7 monitoring of network
                    </li>
                    <li>
                        Expert support
                    </li>
                    <li>
                        Remote support and services
                    </li>
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>
        </div>
        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <MdSecurity size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                SECURITY,CCTV, ACCESS
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-5'>
                    <li>
                        New and existing sites
                    </li>
                    <li>
                        Adds, Moves and Changes
                    </li>
                    <li>
                        Cat 5, Cat 6,Optical Fibre
                    </li>
                    <li>
                        Licensed Elecctrical Contractor
                    </li>
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>
        </div>
        <div className='flex  flex-col shadow-lg  cursor-pointer hover:scale-105 ease-in duration-500 bg-white rounded-lg h-96 w-96  '>
            <div className='flex flex-row mx-4 my-10'>
                <div className='bg-violet-900 animate-pulse text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <AiFillPhone size={40} classname=""/>
                </div>
                <div className='ml-[5%] '> 
                TELEPHONE SYSTEMS
    
                </div>
            </div>
            <div className='ml-[25%]'>
                <ul className='space-y-5'>
                    <li>
                        Services and Maintenance
                    </li>
                    <li>
                        Adds, Moves and Changes
                    </li>
                    <li>
                        SIP
                    </li>
                    <li>
                        VOIP
                    </li>
                </ul>
                
                <Link className='text-blue-300' href="/">Find out more...</Link>
            </div>


        </div>
  
        
    </div>
  </div>
  )
}

export default About