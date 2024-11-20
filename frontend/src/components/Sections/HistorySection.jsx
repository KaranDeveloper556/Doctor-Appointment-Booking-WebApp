import React from 'react'

const HistorySection = () => {
    return (
        <section className=' history-section m-auto my-[4vh] lg:my-[8rem] w-full 3xl:max-w-[90rem] lg:px-[4rem] px-[5vw]'>
            <div className="first-intro-inner-wapper relative w-full flex items-start justify-between flex-col lg:flex-row lg:gap-[4rem] gap-[4vh] mb-[6rem]">
                <div className="heading">
                    <p className="section-name text-gray-400 text-lg font-semibold">History</p>
                    <h2 className="intro-heading font-Jagerlay xl:text-[6rem] md:text-[7.5vw] text-[11.5vw] font-bold">
                        Our <br /> <span className=' text-blue-600'>History</span>
                    </h2>
                </div>
                <div className="intro-content relative right-0 flex-1">
                    <p className="intro-para xl:text-[1.6rem] li:text-[1.2rem] text-[6vw] tracking-wide flex flex-wrap">
                        At Kdevelops, we're dedicated to transforming the healthcare landscape by fostering meaningful connections between patients and trusted medical experts. Our innovative platform streamlines appointment bookings, ensuring effortless access to a vast network of certified specialists. By prioritizing data security and showcasing authentic patient testimonials, we strive to deliver a dependable and user-centric experience that harmonizes health, convenience, and peace of mind.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HistorySection