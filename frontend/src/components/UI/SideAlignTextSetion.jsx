import React from 'react'

const SideAlignTextSetion = ({ text = 'At Kdevelops, we simplify healthcare by connecting you with trusted doctors for seamless appointment bookings. Our platform provides easy access to certified medical professionals across various specialties, empowering you to find and schedule appointments in just a few clicks. With secure data protection and verified patient reviews, we ensure a reliable and user-friendly experience that prioritizes your health and convenience.' }) => {
    return (
        <section className="text-align-section relative m-auto my-[4vh] lg:my-[8rem] w-full 3xl:max-w-[90rem] lg:px-[4rem] px-[5vw]">
            <p className="intro-para pl-[10vw] py-[5vh] xl:text-[1.6rem] li:text-[1.2rem] text-[6vw] tracking-wide flex flex-wrap">
                {text}
            </p>
        </section>
    )
}

export default SideAlignTextSetion