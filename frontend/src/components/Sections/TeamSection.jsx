import React from 'react'
import gsap from 'gsap';

const TeamSection = () => {
    const team = [
        {
            name: "John Smith",
            post: "Software Engineer",
            image: "https://i.pinimg.com/originals/e9/f7/df/e9f7dfe5f73073a4cf8c66933e115a1a.gif"
        },
        {
            name: "Emily Davis",
            post: "Product Manager",
            image: "https://i.pinimg.com/originals/ab/7e/3f/ab7e3f409221e14d0ce9c1784e224185.gif"
        },
        {
            name: "Michael Johnson",
            post: "UI/UX Designer",
            image: "https://i.pinimg.com/originals/67/9e/a7/679ea7530ac4afdce9b4a6ffc329bbac.gif"
        },
        {
            name: "Sarah Wilson",
            post: "Data Analyst",
            image: "https://i.pinimg.com/originals/ce/55/8b/ce558b14c996afa63c6f7c97f8c6598f.gif"
        },
        {
            name: "David Brown",
            post: "DevOps Engineer",
            image: "https://i.pinimg.com/originals/ce/69/4f/ce694f560636dffcf42ecf40d4f2f962.gif"
        },
        {
            name: "Anna Martinez",
            post: "Marketing Specialist",
            image: "https://i.pinimg.com/originals/76/af/6f/76af6fba0f688aeb64539fea45e37bc7.gif"
        },
        {
            name: "James Lee",
            post: "Full Stack Developer",
            image: "https://i.pinimg.com/originals/67/9e/a7/679ea7530ac4afdce9b4a6ffc329bbac.gif"
        },
        {
            name: "Sophia Clark",
            post: "HR Manager",
            image: "https://i.pinimg.com/originals/ce/55/8b/ce558b14c996afa63c6f7c97f8c6598f.gif"
        }
    ];

    const TeamMouseMove = (event) => {
        const overlay = event.currentTarget.querySelectorAll('.overlay');
        const MemmerImage = event.currentTarget.querySelector('.member-image-container');

        gsap.to(overlay, {
            height: '100%',
            duration: 0.4,
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

        gsap.to(overlay, { height: '0%', duration: 0.5, ease: 'power2.in' });
        gsap.to(MemmerImage, { scale: 0, duration: 0.2, ease: 'none' });
    }
    return (
        <section className="TeamSection container mx-auto my-[6rem] overflow-hidden">
            <h1 className="xl:text-[5rem] text-[6.3vw] font-bold text-center font-Jagerlay mb-8">Our team</h1>
            <div className="members flex justify-center items-center flex-col">
                {
                    team.map(
                        (member, MemberIndex) => {
                            return (
                                <div
                                    className="member-item relative w-full max-w-[90rem]"
                                    onMouseEnter={e => TeamMouseMove(e)}
                                    onMouseMove={e => TeamMouseMove(e)}
                                    onMouseLeave={e => TeamMouseLeave(e)}
                                    key={MemberIndex}>
                                    <div className={`relative w-full flex items-center justify-between md:flex-row flex-col border-t-2 ${MemberIndex == team.length - 1 ? 'border-b-2' : ''} py-6 px-12 z-[2]`}>
                                        <div className="overlay absolute top-0 left-0 bg-blue-500 w-full h-[0%] transition-all z-[-1]"></div>
                                        <div className="relative flex items-center md:justify-center justify-between gap-[1.5rem]">
                                            <span className="xl:text-[2rem] text-[3vh] text-gray-400 font-bold mr-[.5vw]">{MemberIndex < 10 ? `0${MemberIndex}` : `${MemberIndex}`}</span>
                                            <h2 className="xl:text-[4rem] text-[4vw] font-bold">Dr. {member.name}</h2>
                                        </div>
                                        <span>{member.post}</span>
                                    </div>
                                    <div
                                        className="member-image-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[12rem] w-[12rem] scale-0 z-[3]">
                                        <img
                                            src={member.image}
                                            alt="img"
                                            className='member-img w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className="overlay absolute bottom-0 left-0 bg-blue-500 w-full h-[0%] transition-all z-[1]"></div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}

export default TeamSection