import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Portfolio = () => {
  return (
    <div>
        <div className='flex items-center max-w-7xl mx-auto leading-8 mb-10 id="portfolio'
        id="portfolio">
            <div className='text-gray-500 px-10 mt-32 mx-auto'>
                <h1 className='text-center text-4xl text-white mb-10'>Portfolio</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full'> 
            
 <div>
 <div className='shadow-md shadow-gray-600 h-60 hover:scale-110 duration-75'>
    <div>
    <Image src="/Capture.PNG" alt="my image" width="320" height="420"  rounded-t-md></Image>
 </div>
<div className='flex justify-between px-5 text-white'>
<Link href={"https://todonext-six.vercel.app/" }>
     <button className='p-4 hover:scale-105 duration-200'>
      
        Demo</button></Link>
        <Link href={"https://github.com/Assadnaqvi/todonext"}>
        <button className='p-4 hover:scale-105 duration-200'>
       
        Code</button></Link>
    
        </div>


</div>


        </div>
        <div>
 <div className='shadow-md shadow-gray-600 h-60 hover:scale-110 duration-75'>
    <div>
    <Image src="/Capture1.PNG" alt="my image" width="320" height="420"  rounded-t-md></Image>
 </div>
<div className='flex justify-between px-5 text-white'>
<Link href={"https://chakrauiproject-rho.vercel.app/" }>
     <button className='p-4 hover:scale-105 duration-200'>
      
        Demo</button></Link>
        <Link href={"https://github.com/Assadnaqvi/chakrauiproject"}>
        <button className='p-4 hover:scale-105 duration-200'>
       
        Code</button></Link>
    
        </div>


</div>


        </div>
 
        <div>
 <div className='shadow-md shadow-gray-600 h-60 hover:scale-110 duration-75'>
    <div>
    <Image src="/Capture2.PNG" alt="my image" width="320" height="420"  rounded-t-md></Image>
 </div>
<div className='flex justify-between px-5 text-white'>
<Link href={"https://next-asad-ecpv.vercel.app/" }>
     <button className='p-4 hover:scale-105 duration-200'>
      
        Demo</button></Link>
        <Link href={"https://github.com/Assadnaqvi/next-asad"}>
        <button className='p-4 hover:scale-105 duration-200'>
       
        Code</button></Link>
    
        </div>


</div>


        </div>
 
        <div>
 <div className='shadow-md shadow-gray-600 h-60 hover:scale-110 duration-75'>
    <div>
    <Image src="/Captureresume.PNG" alt="my image" width="320" height="420"  rounded-t-md></Image>
 </div>
<div className='flex justify-between px-5 text-white'>
<Link href={"https://google.com" }>
     <button className='p-4 hover:scale-105 duration-200'>
      
        Demo</button></Link>
        <Link href={"https://google.com"}>
        <button className='p-4 hover:scale-105 duration-200'>
       
        Code</button></Link>
    
        </div>


</div>


        </div>
        <div>
 <div className='shadow-md shadow-gray-600 h-60 hover:scale-110 duration-75'>
    <div>
    <Image src="/oldresume.PNG" alt="my image" width="320" height="420"  rounded-t-md></Image>
 </div>
<div className='flex justify-between px-5 text-white'>
<Link href={"https://resume-two-theta.vercel.app/" }>
     <button className='p-4 hover:scale-105 duration-200'>
      
        Demo</button></Link>
        <Link href={"https://github.com/Assadnaqvi/resume"}>
        <button className='p-4 hover:scale-105 duration-200'>
       
        Code</button></Link>
    
        </div>


</div>


        </div>
        <div>
 <div className='shadow-md shadow-gray-600 h-60 hover:scale-110 duration-75'>
    <div>
    <Image src="/presidentweb.PNG" alt="my image" width="320" height="420"  rounded-t-md></Image>
 </div>
<div className='flex justify-between px-5 text-white'>
<Link href={"https://google.com" }>
     <button className='p-4 hover:scale-105 duration-200'>
      
        Demo</button></Link>
        <Link href={"https://google.com"}>
        <button className='p-4 hover:scale-105 duration-200'>
       
        Code</button></Link>
    
        </div>


</div>


        </div>
       
        </div>
    </div></div></div>
  )
}

export default Portfolio