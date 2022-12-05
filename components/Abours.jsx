
import React,{useState} from 'react'


const Abours = () => {
    const words=[
        {id:0,value:"Just a quick word to say how pleased I was with the job last Friday. Richard and his team were amenable, meticulous and professional."},
        {id:1,value:"Thank you so much the guys were fantastic and did an awesome job!! We are up and running and it looks very ‘cool’! Love your work! You are the best"},
        {id:2,value:"We would like to thank you and your technician for the work done here this morning, he was very efficient and offered an excellent service."},
        {id:3,value:"Thank you so much the guys were fantastic and did an awesome job!! We are up and running and it looks very ‘cool’! Love your work! You are the best"},
        {id:4,value:"Managed Solutions has provided a broad range of technology related services to St Mary’s Primary School since April 2009. During this time we have been extremely impressed with the reliability of our network and especially the promptness and quality of service provided.Based upon the quality of service and reliability of our systems, I have no hesitation in recommending Managed Solutions."},
        {id:5,value:"Thank you for all of your help with this matter. You have handled this situation with the upmost professionalism and extremely clear communication. You are a true asset to MANSOL"},
        {id:6,value:"Just a quick word to say how pleased I was with the job last Friday. Richard and his team were amenable, meticulous and professional."},
    ]
    const [wordsData,setwordsData]=useState(words[0].value)
    const handleClick=(index)=>{
        console.log(index)
        const wordSlider=words[index].value;
        setwordsData(wordSlider)

    }
  return (
    <div className='h-screen w-full pt-10 max-w-7xl mx-auto'>

    <div className='flex flex-col  items-center'>
        <p className='mb-10 font-bold text-2xl '>WHAT OUR CUSTOMER SAY ABOUT US</p>
        <div className='flex justify-center'>{wordsData}</div>
        <div className='flex flex-row'>
            {words.map((data,index)=>
            <h1 className='cursor-pointer' onClick={()=>handleClick(index)}>.</h1>)}
        </div>
       
    </div>
    </div>
  )
}

export default Abours