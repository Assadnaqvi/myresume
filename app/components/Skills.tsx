import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div>
    <div className='flex items-center max-w-7xl mx-auto leading-8 mb-10 id="skills'
   id="skills">
        <div className='px-10 mt-32 mx-auto'>
            <h1 className='text-center text-4xl text-white mb-10'>Skills</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-20'> 
        
        <div className='p-5'>
        
        <Image src="/html5.png" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>HTML5</p>
        </div>        
        
        <div className='p-5'>
        
        <Image src="/css.webp" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>CSS</p>
        </div>    <div className='p-5'>
        
        <Image src="/nodejs.jpg" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>Nodejs</p>
        </div>    <div className='p-5'>
        
        <Image src="/javascript.svg" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>JavaScript</p>
        </div>    <div className='p-5'>
        
        <Image src="/nextjs.avif" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>Nextjs</p>
        </div>    <div className='p-5'>
        
        <Image src="/react.png" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>React</p>
        </div>    <div className='p-5'>
        
        <Image src="/chakraui.jpg" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>ChakraUi</p>
        </div>   
        <div className='p-5'>
        
        <Image src="/vs.ico" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>Vs</p>
        </div>    <div className='p-5'>
        
        <Image src="/typescript.svg" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>Typescript</p>
        </div>    <div className='p-5'>
        
        <Image src="/thirteen.svg" alt="my image" width="90" height="110"   className="rounded-md object-contain hover:translate-x-2 duration-700"></Image>
        <p className='text-center mt-4 text-white'>Thirteen</p>
        </div>   
            </div>
        
        
        </div>
        
        
</div>
</div>

  )
}

export default Skills