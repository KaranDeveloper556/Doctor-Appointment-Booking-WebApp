import React from 'react'

const PageHeroSection = ({ page = 'Aout' }) => {
    return (
        <section className='page-hero-section m-auto mt-[2vh] lg:mt-[4rem] w-full 3xl:max-w-[90rem] lg:px-[4rem] px-[5vw]'>
            <h2 className="intro-heading font-Jagerlay xl:text-[15rem] text-[19vw] font-extrabold bg-text-bg bg-contain whitespace-nowrap text-transparent bg-clip-text capitalize">
                {page && page}.
            </h2>
        </section>
    )
}

export default PageHeroSection