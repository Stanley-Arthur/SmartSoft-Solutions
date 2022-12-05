import React from 'react'
import Link from 'next/link'

const Sec = () => {
  return (
    <div className='my-20 '>
        <div className='relative'>
            <img className='object-cover opacity-60 h-96 w-full' src="/img/kk.jpg" alt="" />
            <div className='absolute top-10 left-8'>

                <h3 className='pb-5'>WHO ARE WE? WHAT DO WE DO?</h3>
                <p className='text-gray-400' >Our focus on providing the right solution for</p>
                <p className='text-gray-400'>the long term best interest of your business</p>
                <p className='text-gray-400'>means more reliable data services for your</p>
                <p className='text-gray-400'>business, less downtime and better</p>
                <p className='text-gray-400'>productivity.</p>
                <div className='pt-8 text-violet-900 font-bold'>
                <Link  href="#">Learn More...</Link>
                </div>


                

            </div>

        </div>
    
    </div>
  )
}

export default Sec