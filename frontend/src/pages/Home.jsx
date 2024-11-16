import HeroSection from '../components/Sections/HeroSection';
import DoctorSpecialitySection from '../components/Sections/DoctorSpecialitySection';
import FeaturesSection from '../components/Sections/FeaturesSection';
import IntroSection from '../components/Sections/IntroSection';
import FAQ from '../components/Specifics/FAQ';
import CTA from '../components/Utilities/CTA';
import TagLineSection from '../components/Sections/TagLineSection';


const Home = () => {

  return (
    <>
      <header className='m-auto'>
        <HeroSection />
      </header>
      <main>
        <IntroSection />
        <DoctorSpecialitySection />
        <FeaturesSection />
        <TagLineSection />
        {/* <ReviewSection /> */}
        <FAQ />
        <CTA />
      </main>
    </>
  )
}

export default Home