import HeroSection from '../components/Sections/HeroSection';
import DoctorSpecialitySection from '../components/Sections/DoctorSpecialitySection';
import FeaturesSection from '../components/Sections/FeaturesSection';
import IntroSection from '../components/Sections/IntroSection';
import FAQ from '../components/Sections/FAQ';
import CTA from '../components/UI/CTA';
import TagLineSection from '../components/Sections/TagLineSection';
import ReviewSliderSection from '../components/Sections/ReviewSliderSection';
import ProfessionalDocSection from '../components/Sections/ProfessionalDocSection';
import Blob from '../components/UI/Blob';


const Home = () => {

  return (
    <>
      <header className='m-auto'>
        <HeroSection />
      </header>
      <main>
        <Blob />
        <IntroSection />
        <DoctorSpecialitySection />
        <FeaturesSection />
        <ProfessionalDocSection />
        <ReviewSliderSection />
        <TagLineSection />
        <FAQ />
        <CTA />
      </main>
    </>
  )
}

export default Home