import React from 'react'
import FeatureCard from '../Utilities/FeatureCard'
import ReUseButton from '../Utilities/ReUseButton'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const FeaturesSection = () => {
    useGSAP(
        () => {
            gsap.to('.Feature_section', { 
                scrollTrigger: {
                    trigger: '.right-cards',
                    start: 'top 30%', 
                    end: `bottom 75%`,
                },
            })
        }
    )

    return (
        <section data-theme='light' className="Feature_section relative w-full 3xl:max-w-[90rem] h-full m-auto py-[5vh] px-[6vh] flex justify-center items-start md:flex-row flex-col gap-[2rem]">
            <div className="left-text sticky top-[5rem] flex-1">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="text-left mb-6">
                        <p className="section-name text-gray-400 text-lg font-semibold mb-4">Why Choose Us</p>
                        <p className="xl:text-[1.5rem] text-[2.7vh] mb-4 max-w-[50rem]">Significo is a custom health software developer founded on the belief that technology can transform healthcare to put people first. We put humanity back at the center of healthcare with technology that simplifies complexity, accelerates capacity, and improves outcomes.</p>
                        <p className="xl:text-[4.5rem] text-[5vh] font-bold">Human-Centric <br /> Health Software</p>
                        <ReUseButton value={'OUR SOLUTIONS'} tailwindclasse="bg-black px-4 py-2 rounded-md mt-4" />
                    </div>
                </div>
            </div>
            <div className="relative right-cards my-[25rem] flex-1">
                <div className="flex flex-col gap-[6rem]">
                    <FeatureCard heading={'Easy Booking'} para={'Book appointments with a few clicks, anytime and anywhere, and receive instant confirmations.'} />
                    <FeatureCard heading={'Reminders'} para={'Get notified about upcoming appointments and stay on track with personalized reminders and alerts.'} img={"👋🏻"} />
                    <FeatureCard heading={'Patient Portal'} para={'Access medical history, reports, and test results online, and take control of your health information.'} img={"😉"} />
                    <FeatureCard heading={'Secure Payments'} para={'Make secure payments online, and receive instant receipts and confirmations for your appointments.'} img={"😎"} />
                    <FeatureCard heading={'Doctor Profiles'} para={'View detailed profiles of our doctors, including their qualifications, experience, and patient reviews.'} img={"😊"} />
                    <FeatureCard heading={'Appointment History'} para={'Access your appointment history, including past and upcoming appointments, and manage your schedule with ease.'} />
                </div> 
                
            </div>
        </section>
    )
}

export default FeaturesSection