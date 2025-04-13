import React from 'react'
import gsap from 'gsap';
import { MdArrowOutward } from "react-icons/md";
import SideAlignTextSetion from '../UI/SideAlignTextSetion';

const ContactLinksSection = () => {
    const Contacts = [
        {
            name: 'fakeemail@gmail.com',
            site: 'G-mail',
            link: 'https://www.google.com'
        },
        {
            name: 'fakeTwitter',
            site: 'Twitter',
            link: 'https://www.twitter.com'
        },
        {
            name: 'sdkjfw_8623',
            site: 'Instagram',
            link: 'https://www.instagram.com'
        },
        {
            name: 'jsdf47ry982',
            site: 'LinkedIn',
            link: 'https://www.linkedin.com'
        },
    ];

    const TeamMouseMove = (event) => {
        const overlay = event.currentTarget.querySelectorAll('.overlay');
        const MemmerImage = event.currentTarget.querySelector('.member-image-container');

        gsap.to(overlay, {
            height: '100%',
            duration: 0.1,
            ease: 'none',
        });
        gsap.to(MemmerImage, {
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, event.clientX),
            scale: 1.1,
            duration: 0.2,
            ease: 'none'
        });
    }
    const TeamMouseLeave = (event) => {
        const overlay = event.currentTarget.querySelectorAll('.overlay');
        const MemmerImage = event.currentTarget.querySelector('.member-image-container');

        gsap.to(overlay, { height: '0%', duration: 0.2, ease: 'none' });
        gsap.to(MemmerImage, { scale: 0, duration: 0.2, ease: 'none' });
    }
    return (
        <section className="TeamSection container mx-auto my-[6rem] overflow-hidden">
            <h1 className="xl:text-[8rem] text-[8vw] font-bold text-left font-Jagerlay mb-8">Let's Talk</h1>
            <p className='xl:text-[3rem] text-[5vw] font-bold text-right font-Jagerlay mb-8'>+91 97346563459</p>
            <div className="members flex justify-center items-center flex-col">
                {
                    Contacts.map(
                        (contact, contactIndex) => {
                            return (
                                <div
                                    className="member-item relative w-full max-w-[90rem]"
                                    onMouseEnter={e => TeamMouseMove(e)}
                                    onMouseMove={e => TeamMouseMove(e)}
                                    onMouseLeave={e => TeamMouseLeave(e)}
                                    key={contactIndex}>
                                    <div className={`relative w-full flex items-center justify-between md:flex-row flex-col border-t-2 ${contactIndex == contact.length - 1 ? 'border-b-2' : ''} py-6 px-12 z-[2]`}>
                                        <div className="relative w-full flex items-center justify-between gap-[1.5rem]">
                                            <span className="xl:text-[2rem] text-[3vh] text-gray-400 font-bold mr-[.5vw]">{contact.site}</span>
                                            <h2 className="xl:text-[4rem] text-[4vw] font-bold">{contact.name}</h2>
                                        </div>
                                    </div>
                                    <div className="overlay overflow-hidden absolute bottom-0 left-0 flex items-center justify-center bg-blue-500 w-full h-[0%] transition-all z-[2]">
                                        <div className="marquee relative my-auto flex items-center gap-[1rem] xl:text-[5rem] text-[9.3vw] justify-center font-bold overflow-hidden whitespace-nowrap uppercase">
                                            <span className='flex justify-center items-center gap-[1rem] animate-marquee'>{contact.site} <MdArrowOutward /></span>
                                            <span className='flex justify-center items-center gap-[3rem] animate-marquee'>{contact.site} <MdArrowOutward /></span>
                                            <span className='flex justify-center items-center gap-[3rem] animate-marquee'>{contact.site}<MdArrowOutward /></span>
                                            <span className='flex justify-center items-center gap-[3rem] animate-marquee'>{contact.site}<MdArrowOutward /></span>
                                            <span className='flex justify-center items-center gap-[3rem] animate-marquee'>{contact.site}<MdArrowOutward /></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}

export default ContactLinksSection