import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const TextAppearingSection = () => {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.from(".textAnimate-p", {
            transform: 'rotateX(40deg)',
            opacity: 0,
            duration: 2,
            stagger: 1,
            scrollTrigger: {
                trigger: '.textAnimate',
                markers: false,
                start: 'top 50%',
                end: 'bottom 70%',
                // markers: true,
                scrub: 1,

            }
        })
    })

    return (
        <section className="textAnimate relative m-auto font-extrabold font-Jagerlay text-[10vw] uppercase flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 overflow-hidden" style={{ perspective: "1000px" }}>
            <p className="textAnimate-p bg-text-bg bg-contain text-transparent whitespace-nowrap bg-clip-text">Diagnosis</p>
            <p className="textAnimate-p bg-text-bg bg-contain text-transparent whitespace-nowrap bg-clip-text">Treatment</p>
            <p className="textAnimate-p bg-text-bg bg-contain text-transparent whitespace-nowrap bg-clip-text">Medication</p>
            <p className="textAnimate-p bg-text-bg bg-contain text-transparent whitespace-nowrap bg-clip-text">Therapy</p>
            <p className="relative textAnimate-p bg-text-bg bg-contain text-transparent whitespace-nowrap bg-clip-text">Caregiving</p>
        </section>
    )
}

export default TextAppearingSection