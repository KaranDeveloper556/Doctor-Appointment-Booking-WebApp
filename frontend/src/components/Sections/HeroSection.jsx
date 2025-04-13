import { assets } from "../../assets/assets_frontend/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blob from "../UI/Blob";
gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {

  const MarqueeWordsArrayObject = [
    { 'circle-img': 'https://i.pinimg.com/564x/28/d5/09/28d5099b181f91883bd247f164fb2c44.jpg', word: 'exceptional' },
    { 'circle-img': 'https://i.pinimg.com/564x/10/92/99/1092997edcfa953996a4a7f709732e44.jpg', word: 'reliable' },
    { 'circle-img': 'https://i.pinimg.com/736x/0a/0f/2c/0a0f2c4f8c093889e5dc8c32cbb7e35e.jpg', word: 'innovative' },
    { 'circle-img': 'https://i.pinimg.com/564x/34/b0/3a/34b03a5eecd3d1b597980c85d60fd64e.jpg', word: 'empowered' },
    { 'circle-img': 'https://i.pinimg.com/564x/2d/db/69/2ddb6973e782ced99c8760cda0896ee6.jpg', word: 'transformative' }
  ];

  const MarqueeTotalCols = [
    {
      transfrom: -3,
      reverse: false,
      reverseAnimation: false
    },
    {
      transfrom: 4,
      reverse: true,
      reverseAnimation: true
    },
    {
      transfrom: 5,
      reverse: false,
      reverseAnimation: false
    },
    {
      transfrom: 6,
      reverse: true,
      reverseAnimation: true
    }];

  // Performing Animation
  useGSAP(() => {
    gsap.set('.marquee', {
      scale: 20
    })

    let HeroTimeline = gsap.timeline({
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.Hero-section',
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1
      },
    })

    HeroTimeline
      .to('.HeroVideoDiv', {
        clipPath: 'circle(0% at center)',
        opacity: 0.8
      }, 'HeroVidText')
      .to('.marquee', {
        scale: 1,
        opacity: 1,
        delay: -0.1
      }, 'HeroVidText')
      .to('.reverseAnime', {
        xPercent: 10,
        duration: 1,
      }, 'HeroVidText')
      .to('.noReverseAnime', {
        xPercent: -20,
        duration: 1,
      }, 'HeroVidText')
      .from('.marquee-subtitle', {
        y: 150,
        scale: 2.2,
        fontWeight: 900
      }, 'HeroVidText')

    gsap.from('.heroFooter', {
      x: -50,
      duration: .8,
      opacity: 0,
    })

    gsap.from('.marquee-subtitle', {
      y: -50,
      duration: 2,
      opacity: 0,
    })
  });

  return (
    <section data-theme='dark' className="relative w-full h-screen overflow-hidden Hero-section">
      <div className="HeroVideoDiv absolute w-full h-screen Hero-video z-[998] opacity-1 border-[10px] bg-blue-300 border-blue-300" style={{ clipPath: 'circle(100% at center)' }}>
        <video src={assets.HeaderVideo} muted autoPlay loop className='relative rounded-xl object-cover w-full h-full hero-main-video'></video>
      </div>
      <div className="relative w-full h-full Marquee-sec mt-[13vh]">
        <div className="mx-auto relative text-center max-w-[40vw] marquee-subtitle md:text-[3.5vh] text-[4vw] font-extrabold tracking-tight z-[999] text-transparent bg-clip-text bg-text-bg">
          <p>Book Trusted Doctors</p>
          <p>Anytime – Convenient Healthcare at Home</p>
        </div>
        <div className="relative marquee mt-[8vh] font-Jagerlay font-semibold scale-[1] opacity-0">
          {
            MarqueeTotalCols.map(
              (marqueeEle, indexKeys) => {
                return (
                  <div className={`relative marquee-row text-[10vh] leading-[12vh] tracking-tighter flex items-center justify-center gap-[2vw] ${!marqueeEle.reverse ? '' : 'flex-row-reverse'} ${!marqueeEle.reverse ? 'noReverseAnime' : 'reverseAnime'}`}
                    style={{ transform: `translateX(${marqueeEle.transfrom}vw)` }}
                    key={indexKeys}>
                    {
                      MarqueeWordsArrayObject.map(
                        (elem, index) => {
                          return (
                            <div className="relative flex items-center justify-center gap-[2vw] marquee-elem" key={`elem-${index}`}>
                              <p>{elem.word}</p>
                              <div className="relative rounded-full h-[8vh] w-[8vh]">
                                <img src={elem["circle-img"]} className="relative top-[1.2vh] object-fill w-full h-full rounded-full" alt="elem-img" />
                              </div>
                            </div>
                          );
                        }
                      )
                    }
                  </div>
                );
              }
            )
          }
        </div>
      </div>
      <div className="absolute z-[999] font-semibold bottom-[6vh] left-[3vw] text-[2vh] heroFooter">
        <p className='heor_footer_slogan'>Quick, Easy Doctor</p>
        <p className='heor_footer_slogan'>Appointments – Health</p>
        <p className='heor_footer_slogan'>at Your Fingertips!</p>
      </div>
    </section>
  )
}

export default HeroSection