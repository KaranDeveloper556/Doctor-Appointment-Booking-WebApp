import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { assets } from "../../assets/assets_frontend/assets";

const TagLineSection = () => {

    useGSAP(() => {

        gsap.to('.Tag-line-section', {
            xPercent: -350,
            color: 'blue',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.Tag-line-section',
                start: 'top top',
                end: `bottom -50%`,
                markers: true,
                scrub: 2,
                pin: true,
            },
        });
    });

    return (
        <section className='Tag-line-section relative flex justify-start items-center w-full min-h-[80vh]'>
            <div className="tag-line-wapper relative flex justify-start items-center w-full">
                <img src={assets.AnimeImg1} alt="slide0-img" className="absolute top-1 left h-[20rem]" />
                <p className='tagLine relative px-[35vh] font-extrabold font-Jagerlay text-[30vh] bg-text-bg whitespace-nowrap text-transparent bg-clip-text'>
                    Path to Trusted Healthcare Starts form - Kdevelops
                </p>
            </div>
        </section>
    )
}

export default TagLineSection