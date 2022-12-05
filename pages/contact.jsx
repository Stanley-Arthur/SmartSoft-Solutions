import React, { useState } from 'react'
import {AiOutlineMail, AiOutlinePhone,} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { useForm } from 'react-hook-form' 

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm();

   const onSubmit= data => console.log(data)
   
    // const [data ,setData] = useState({
    //     name:"",
    //     email:"",
    //     subject:"",
    //     message:""
    // })
    // console.log(data)
    // const handleChange=(event)=>{

    //     let name=event.target.name
    //     let value=event.target.value 

    //     setData({...data, [name]: value})
    // }
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log("You clicked Submit")
    // }
   
  return (
    <div className='bg-gray-900 text-white h-screen flex  flex-col text-center md:text-left md:flex-row
    max-w-7xl px-14 justify-evenly mx-auto items-center'>
        {/* <h1 className='absolute md:top-18 top-12 uppercase text-gray-500 text-2xl'>
            contact US
        </h1> */}
        <div className='flex flex-col  space-y-5'>
            <h4 className='sm:text-2xl md:text-4xl  font-semibold text-center'>
            Share your thoughts with us,
                <span className='decoration-[#f7AB0A]/50 underline'>Let's Talk.</span>
            </h4>
            <div className='space-y-10'>
               <div className='flex items-center space-x-5 justify-center '>
                <AiOutlinePhone className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>+233547082558</p>
                </div> 

               <div className='flex items-center space-x-5 justify-center '>
                <AiOutlineMail className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>sarthur@dskebs.com</p>
                </div> 

               <div className='flex items-center space-x-5 justify-center '>
                <GoLocation className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>St.John 3rd Street</p>
                </div>  
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex  flex-col space-y-2  text-white w-fit mx-auto'>
                <div className='flex  space-x-2 hidden md:block  '>
                    <input {...register("name",{required:true})}  name='name' placeholder='Name' className=' outline-none rounded-sm border-b lg:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40 hover:border-[#f7AB0A]/40  '  type="text" />
                  
                    <input {...register("email",{required:true})}   name='email' placeholder='Email' className='outline-none rounded-sm border-b lg:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40 hover:border-[#f7AB0A]/40' type="email" />
                
                </div>
                <input {...register("name",{required:true})}  name='name' placeholder='Name' className=' outline-none rounded-sm border-b lg:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40 hover:border-[#f7AB0A]/40  md:hidden '  type="text" />
                  
                <input {...register("email",{required:true})}   name='email' placeholder='Email' className='outline-none rounded-sm border-b lg:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40 hover:border-[#f7AB0A]/40  md:hidden ' type="email" />


                <input {...register("subject",{required:true})}   name='subject'  className='outline-none rounded-sm border-b lg:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40  hover:border-[#f7AB0A]/40 ' placeholder='Subject' type="text" />

                <textarea {...register("message",{required:true})}   name='message'className='outline-none rounded-sm border-b lg:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40 hover:border-[#f7AB0A]/40 ' placeholder='Message'></textarea>
                <button className='bg-[#f7AB0A] rounded-sm text-lg py-5 px-10 text-black font-bold '>Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default ContactUs


{/* <form onSubmit={handleSubmit} className='flex  flex-col space-y-2  text-white w-fit mx-auto'>
<div className='flex space-x-2'>
    <input id='name' name='name' value={data.name} onChange={handleChange}  placeholder='Name' className='outline-none rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40 hover:border-[#f7AB0A]/40  '  type="text" />
    <input name='email' value={data.email} onChange={handleChange} placeholder='Email' className='outline-none rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40 hover:border-[#f7AB0A]/40' type="email" />
</div>
<input name='subject' value={data.subject} onChange={handleChange} className='outline-none rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40  hover:border-[#f7AB0A]/40 ' placeholder='Subject' type="text" />

<textarea name='message' value={data.message} onChange={handleChange} className='outline-none rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7AB0A]/40 focus:text-[#f7AB0A]/40 hover:border-[#f7AB0A]/40 ' placeholder='Message'></textarea>
<button className='bg-[#f7AB0A] rounded-sm text-lg py-5 px-10 text-black font-bold '>Submit</button>
</form> */}