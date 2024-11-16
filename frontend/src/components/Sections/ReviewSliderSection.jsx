import React from 'react'
import ReviewCard from '../Utilities/ReviewCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ReviewSliderSection = () => {
    return (
        <section className='review-slider-sec m-auto my-[4vh] lg:my-[8rem] w-full 3xl:max-w-[95rem] lg:px-[4rem] px-[5vw]'>
            <div className="heading">
                <p className="section-name text-gray-400 text-lg font-semibold capitalize">What our client says about us</p>
                <h2 className="intro-heading font-Jagerlay xl:text-[5rem] md:text-[7vw] text-[11vw] font-bold">
                    Client's, <br /> Reviews
                </h2>
            </div>
            <Swiper
                className="review-slider-outer-wapper"
                spaceBetween={5}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default ReviewSliderSection