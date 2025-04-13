import React from 'react'
import PageHeroSection from '../components/UI/PageHeroSection'
import SideAlignTextSetion from '../components/UI/SideAlignTextSetion'
import ContactLinksSection from '../components/Sections/ContactLinksSection'

const Contact = () => {
  return (
    <>
      <header>
        <PageHeroSection page='Contact' />
      </header>
      <main>
        <SideAlignTextSetion />
        <ContactLinksSection />
      </main>
    </>
  )
}

export default Contact