import React from 'react'
import AboutSection from '../components/Sections/AboutSection'
import AboutHeroSection from '../components/Sections/AboutHeroSection'
import TeamSection from '../components/Sections/TeamSection'
import CTA from '../components/Utilities/CTA'
import FeaturesSection from '../components/Sections/FeaturesSection'
import Footer from '../components/Specifics/Footer'

const About = () => {
  return (
    <>
      <header className='m-auto mt-[5rem]'>
        <AboutHeroSection />
        <AboutSection />
      </header>
      <main>
        <FeaturesSection />
        <TeamSection />
        <CTA />
      </main>
    </>
  )
}

export default About