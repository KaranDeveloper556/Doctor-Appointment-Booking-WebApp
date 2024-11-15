import React from 'react'
import AboutSection from '../components/Sections/AboutSection'
import TeamSection from '../components/Sections/TeamSection'

const About = () => {
  return (
    <>
      <header className='m-auto mt-[10rem]'>
        <AboutSection />
      </header>
      <main>
        <TeamSection />
      </main>
    </>
  )
}

export default About