'use client';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
function Header() {
  const [toggle,setToggle]=useState(true)
  return (
    <section className='bg-gray-700 text-white'>
    <div className='flex justify-between items-center'>
      <h1 className='font-autograph m-6'>Asad Naqvi</h1>
       <ul className='m-7 md:flex hidden '>
       <a className="cursor-pointer" href="#home">
        <li className='mx-5 text-2xl font-autograph hover:scale-150 duration-500'>Home</li>
        </a>
       <a  className='cursor-pointer' href="#about">
        <li className='mx-5 text-2xl font-autograph hover:scale-150 duration-500'>About</li>
       </a>
       <a className="cursor-pointer" href="#portfolio">
        <li className='mx-5 text-2xl font-autograph hover:scale-150 duration-500'>Portfolio</li>
       </a>
       <a  className='cursor-pointer' href="#skills">
        <li className='mx-5 text-2xl font-autograph hover:scale-150 duration-500'>Skills</li>
      
        </a> 
        <a  className='cursor-pointer' href="#contact">
         <li className='mx-5 text-2xl font-autograph hover:scale-150 duration-500'>Contact</li>
         </a>
        </ul>    
        <div className='pr-5 md:hidden z-20' onClick={()=>{setToggle(!toggle);
        console.log(toggle);}}>
          {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30}/>}
          </div>  
{!toggle ?
          <div className='fixed top-0 left-0 bg-black h-screen text-red-500 w-full flex items-center justify-center '>
          <ul className='m-7 text-white'>
      
        <li className='mx-5 my-2 text-8xl font-autograph '>Home</li>
      
       
        <li className='mx-5 my-2 text-8xl font-autograph '>About</li>
    
        <li className='mx-5 my-2 text-8xl font-autograph '>Portfolio</li>
        <li className='mx-5 my-2 text-8xl font-autograph '>Skills</li>
        <li className='mx-5 my-2 text-8xl font-autograph '>Contact</li>

        </ul>    
       </div>:null}                                                                
    </div></section> 
  )
}

export default Header