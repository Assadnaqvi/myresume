import Hero from './components/hero'
import React from 'react'
import Header from './components/header'
import SocialIcons from './components/socialIcons'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

const Page= () => {
  return (<> 
   
    <SocialIcons/>
     <Header/>
  <Hero/> 
  <About/>
<Portfolio/>
<Skills/>
<Contact/>
   </>
)
}

export default Page