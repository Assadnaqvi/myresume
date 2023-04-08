import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Image from 'next/image';
const Hero = () => {
  return (<section className='flex max-w-4xl mx-auto md:flex-row flex-col mt-16'> 
   
    <div className='m-5 max-w-lg text-white'>
<h1>I am a Full Stack Developer</h1>
<p>
As a full stack developer, I have a comprehensive understanding of both front-end and back-end technologies. I am proficient in programming languages like HTML, CSS, JavaScript,TypeScript and various backend languages such as Python, Ruby, and Node.js. My expertise extends beyond coding to include knowledge of databases, server management, and deployment strategies.

With my skills, I can build dynamic, responsive, and scalable web applications from scratch. I can also maintain and optimize existing applications to ensure they run efficiently. My experience with different frameworks, libraries, and APIs allows me to implement various features and functionalities, such as authentication, user management, and API integrations.

As a full stack developer, I am versatile and can adapt to new technologies and tools quickly. I possess strong problem-solving skills, and I am always willing to learn and improve. Overall, I am committed to delivering high-quality web applications that meet and exceed clients expectations.
</p>
<button className='group flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-lg'>Profile <MdOutlineArrowForwardIos size={20} className='group-hover:rotate-90 duration-200'/></button>
</div>
  <div>
<Image src="/image.jpeg" alt='picture' width="320" height="420" className='md:w-full mx-auto'></Image>

  </div>
  
   </section>
  )
}

export default Hero