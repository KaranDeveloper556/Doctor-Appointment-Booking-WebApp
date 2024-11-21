import React from 'react'
import TeamSection from '../components/Sections/TeamSection'
import CTA from '../components/Utilities/CTA'
import FeaturesSection from '../components/Sections/FeaturesSection'
import PageHeroSection from '../components/Utilities/PageHeroSection'
import HistorySection from '../components/Sections/HistorySection'
import TextAppearingSection from '../components/Sections/TextAppearingSection'
import IntroSection from '../components/Sections/IntroSection'

const About = () => {
  return (
    <>
      <header className='m-auto mt-[5rem]'>
        <PageHeroSection page='About' />
      </header>
      <main>
        <IntroSection />
        <TextAppearingSection />
        <HistorySection />
        <FeaturesSection />
        <TeamSection />
        <CTA />
      </main>
    </>
  )
}

export default About