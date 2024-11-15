import React from 'react'

const FeatureCard = ({ heading, para, img = '🤝' }) => {
    return (
        <div className="realative rounded-xl featuredCard flex justify-center items-center md:flex-row flex-col p-[2rem] mx-[1rem] border-4 feature-card">
            <div className="left-text relative pr-10">
                <h4 className="xl:text-[2rem] text-[3.5vh] font-bold mb-2">{heading}</h4>
                <p className='xl:text-[1.2rem] text-[2.1vh]'>{para}</p>
            </div>
            <div className="right-text relative">
                <span className="relative xl:text-[8rem] text-[9vw] shadow-2xl">{img}</span>
            </div>
        </div>
    )
}

export default FeatureCard