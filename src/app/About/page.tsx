import React from 'react'
import Hero from "./Hero"
import Aboutus from './about'
import Testimonial from '../components/Testimonial'
import Navbar1 from '../components/Navbar1'

const About = () => {
  return (
    <div>
      <Navbar1/>
      <Hero />
      <Aboutus />
      <Testimonial />
    </div>
  )
}

export default About