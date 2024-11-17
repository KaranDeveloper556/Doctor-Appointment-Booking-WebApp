import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import ReUseButton from '../Utilities/ReUseButton'
import { assets } from "../../assets/assets_frontend/assets";

const TagLineSection = () => {

    useGSAP(() => {

        gsap.to('.tagLine', {
            xPercent: -98,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.Tag-line-section',
                start: 'top top',
                end: `bottom -80%`,
                // markers: true,
                scrub: 5,
                pin: true,
            },
        });
    });

    return (
        <section className='Tag-line-section relative flex justify-start items-center w-full min-h-[90vh] overflow-hidden'>
            <p className='tagLine relative pl-[80vw] font-extrabold font-Jagerlay text-[30vh] tracking-wide bg-text-bg bg-contain whitespace-nowrap text-transparent bg-clip-text capitalize'>
                Your Path to Trusted Healthcare Starts form - Kdevelops
            </p>
            <ReUseButton value={'Book Your Appointment Now'} tailwindclass={'absolute bottom-[2vh] scale-[1.1] right-[8vw]'} />
        </section>
    )
}

export default TagLineSection