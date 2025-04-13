import React from 'react'

const FeatureCard = ({ heading, para, img = '🤝' }) => {

    return (
        <div className="realative feature-card rounded-xl max-w-[25rem] md:max-w-[35rem] featuredCard flex justify-center items-center md:flex-row flex-col lg:p-[2rem] p-[3vh] mx-[1rem] border-4 feature-card">
            <div className="left-text relative pr-10">
                <h4 className="xl:text-[2rem] text-[3.5vh] font-bold mb-2">{heading}</h4>
                <p className='text-gray-300 xl:text-[1.2rem] text-[2.1vh]'>{para}</p>
            </div>
            <div className="right-text relative">
                <span className="relative xl:text-[8rem] text-[9vw] shadow-2xl">{img}</span>
            </div>
        </div>
    )
}

export default FeatureCard