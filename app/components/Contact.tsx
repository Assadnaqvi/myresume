import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='flex items-center max-w-7xl mx-auto leading-8 mb-10'
        id="contact">
         <div className='text-gray-500 px-10 mt-32 mx-auto'>
            <h1 className='text-center text-4xl text-white'>Contact</h1>
            <p className='text-center text-white my-5'>Get in Touch With Me</p>
            <form
  action="https://formspree.io/f/mayzpgjn"
  method="POST"
>
                <div>
                    <input 
                    placeholder=' Your Name ' type='text'
                   required
                   name="name"
                    className='p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white'
                   />
                </div>
                <div>
                    <input 
                  
                  placeholder=' Your Email ' type='Email'
                  name="email"
                  required
                  className='p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white'
                    />
              
                </div>
            <div>
           <textarea
           rows={6}
           name="mymessage"
           required
          className='p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white'
                   
          placeholder='Your Message Here...' ></textarea>

            </div>
            <button 
            type='submit'
            className='mx-auto block px-5 rounded-md bg-gradient-to-b from-gray-300 text-black to-gray-600'
            >Submit</button>
            </form>
            
            </div>   
        </div>
    </div>
  )
}

export default Contact