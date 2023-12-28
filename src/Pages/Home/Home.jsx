import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Tokenism from './Tokenism/Tokenism'
import Faq from './Faq/Faq'
import Roadmap from './Roadmap/Roadmap'
import HowtoClaim from './Howtoclaim/HowtoClaim'
import "./Home.scss"

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Hero/>
      <About/>
      <HowtoClaim/>
      <Tokenism/>
      <Roadmap/>
      <Faq/>
    </div>
  )
}
