import Link from 'next/link'
import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import{AiFillMediumSquare} from 'react-icons/ai'
const SocialIcons = () => {
  return (
    <div>
        <Link href={"http://linkedin.com/"} target={"_blank"}>
        <div className='ml-[-94px] hover:ml-0 duration-200 flex text-lg items-center gap-2 fixed text-white bg-gray-600 top-[30vh] w-36 py-3 px-5 rounded-lg'>linkedin <FaLinkedin size={30}/></div></Link>
        <Link href={"http://Github.com/"} target={"_blank"}>
        <div className='ml-[-78px] hover:ml-0 duration-200 flex text-lg items-center gap-2  fixed text-white bg-gray-600 top-[40vh] w-32 py-3 px-5 rounded-lg'>Github<FaGithub size={30}/></div></Link>
        <Link href={"http://Medium.com/"} target={"_blank"}>
       <div className='ml-[-78px] hover:ml-0 duration-200 flex text-lg items-center gap-2 fixed text-white bg-gray-600 top-[50vh] w-32 py-3 px-5 rounded-lg'>Gmail<AiFillMediumSquare size={30}/></div></Link>
    
        </div>
  )
}

export default SocialIcons