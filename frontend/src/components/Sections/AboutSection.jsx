import AboutImage from '../../assets/assets_frontend/Health-care.jpeg'
import { MdArrowOutward } from "react-icons/md";

const AboutSection = () => {
    return (
        <section className="relative max-w-[100rem] mx-auto px-[2vw] 2xl:px-[5rem] flex flex-col md:flex-row items-start p-8 gap-2">
            {/* Text Section */}
            <div className="flex-1">
                <h1 className="2xl:text-[8rem] md:text-[8vw] text-[6vw] font-bold mb-2">About</h1>
                <div className="p-6 rounded-lg mb-2 2xl:text-[4rem] md:text-[4vw] text-[2vw]">
                    <p className="text-sm text-gray-600">Our Mission</p>
                    <h2 className="mt-2 font-semibold">
                        Help you achieve a <span className="text-green-500">healthy, confident smile</span> that lasts a lifetime
                    </h2>
                    <p className="mt-4 text-sm text-right">— CEO Happy</p>
                </div>
                <div className="relative 2xl:text-[2.5rem] md:text-[2.5vw] text-[2vw] font-light flex justify-center items-center gap-2">
                    <div className=" p-6 rounded-lg w-full flex flex-col 2xl:gap-[6.2rem] md:gap-[6.2vw] gap-[2vw]">
                        <MdArrowOutward />
                        <div className="About-texts">
                            <p>Skilled</p>
                            <p>Dentists</p>
                        </div>
                    </div>
                    <div className=" p-6 rounded-lg w-full flex flex-col 2xl:gap-[6.2rem] md:gap-[6.2vw] gap-[2vw]">
                        <MdArrowOutward />
                        <div className="About-texts">
                            <p>Comfortable</p>
                            <p>Environment</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className='relative'>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={AboutImage}
                        alt="Dental equipment"
                        className="w-full rounded-lg"
                    />
                </div>
                <p className="mt-4 text-sm text-center">OUR GALLERY:</p>
                <div className="flex justify-center gap-2 mt-2">
                    <img
                        src={AboutImage}
                        alt="Gallery Image 1"
                        className="w-16 h-16 border-2 border-green-500 rounded-full"
                    />
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Gallery Image 2"
                        className="w-16 h-16 rounded-full"
                    />
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Gallery Image 3"
                        className="w-16 h-16 rounded-full"
                    />
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Gallery Image 4"
                        className="w-16 h-16 rounded-full"
                    />
                </div>
            </div>
        </section >
    );
};

export default AboutSection;
