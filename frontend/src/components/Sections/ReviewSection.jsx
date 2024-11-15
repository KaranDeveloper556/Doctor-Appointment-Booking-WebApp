import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowRightAlt } from "react-icons/md";
import { assets } from "../../assets/assets_frontend/assets";
import ReUseButton from "../Utilities/ReUseButton";
import ClientReviewBox from "../Utilities/ClientReviewBox";
gsap.registerPlugin(ScrollTrigger)

const ReviewSection = () => {
    useGSAP(() => {
        gsap.to('.slide', {
            xPercent: -350,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.horizontalSection',
                start: 'top top',
                end: `bottom -85%`,
                scrub: 2,
                pin: true,
            },
        });
    });
    return (
        <section data-theme='light_orange' className="horizontalSection relative flex justify-start items-center min-h-[120vh] w-full overflow-hidden">
            <div className="slide relative text-center min-w-[100vw] min-h-[100vh] flex justify-center items-center text-[5vw] font-Jagerlay font-bold tracking-tight flex-col">
                <p>Our Past Client's</p>
                <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Reviews</p>
                <MdArrowRightAlt className="text-[40vh]" />
            </div>
            <div className="slide relative top-[-4rem] min-w-[100vw] min-h-[90vh] flex justify-start items-start flex-col gap-[1rem]">
                <div className="row-1 relative left-[-12rem] flex justify-start items-center gap-[1rem]">
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                </div>
                <div className="row-2 relative rigth-[6rem] flex justify-center items-center gap-[1rem]">
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                </div>
                <div className="row-3 relative left-[-8rem] flex justify-center items-center gap-[1rem]">
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                    <ClientReviewBox Review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad voluptate, quaerat nisi iusto velit culpa iste inventore, obcaecati explicabo itaque sunt" />
                    <ClientReviewBox />
                </div>
            </div>
            <div className="Horizontal-button absolute left-[5vw] bottom-[25vh]">
                <ReUseButton value={'Book Now'} />
            </div>
        </section>
    )
}

export default ReviewSection