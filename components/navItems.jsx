import React,{useState} from 'react'
import Link from 'next/link'

import {RiArrowDropDownFill} from 'react-icons/ri'

const NavItems = () => {

  const [submenuOpen,setsubmenuOpen]=useState(false)


  const menus=[
    {title:"About",icon:<RiArrowDropDownFill size={25} />,submenu:true,subItems:[
      {title:"We are",path:"/wwa" },
      {title:"Partners",path:"/partners" },
      {title:"Safety",path:"/safety" },
      {title:"Q-Assurance",path:"/assurance" },
      {title:"T & Cs",path:"/a&c" },
    ]
  },
  {title:"T-Support",path:"/tech-support"},
  {title:"B-Internet",path:"/bus-internet"},
  {title:"C & S",path:"/comms&security"},
  {title:"Voice",path:"/voice"},
  {title:"Industrial",path:"/industrial-coolers"},
  {title:"Contact",path:"/contact"},
   
  ]
  return (
    <div className=' md:flex'>
      {
        menus.map((menu,index)=>(
          <div className='py-2 flex flex-col'>
            <ul className='inline-flex items-center'>
            <a 
              href={menu.path}
              key={index}>
                
                <li className=' ml-10 text-sm uppercase hover:border-b  '>
                {menu.title}

                </li>
                
            </a>
             <span className=''>{menu.icon}</span> 

            </ul>
            
           
             {
              menu.submenu && submenuOpen && (
                <div >
                  {menu.subItems.map((subItem,index)=>(
                    <div >
                      <Link  key={index} href={subItem.path}>{subItem.title}</Link>
                    </div>
                  ))}
                </div>

              )
            }
          </div>
          
          
    
        )
       )
      }

    </div>
  )
}

export default NavItems