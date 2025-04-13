import { assets } from '../../assets/assets_frontend/assets'
import ReUseButton from './ReUseButton'

const CTA = () => {
    return (
        <section className="relative 2xl:max-w-[95rem] max-w-[95vw] mx-auto lg:p-[4rem] p-[4vw] my-[5rem] shadow-md flex items-center justify-center rounded-lg overflow-hidden">
            <div className=" absolute hidden lg:block top-[10rem] right-[8rem] rotate-12 rounded-xl">
                <img src={assets.AnimeImg8} alt="Man on phone" className="w-[8rem] rounded-xl" />
            </div>
            <div className=" absolute hidden lg:block top-[10rem] left-[8rem] -rotate-12 rounded-xl">
                <img src={assets.AnimeImg7} alt="Man on phone" className="w-[8rem] rounded-xl" />
            </div>
            <div className="flex justify-center items-center flex-col gap-[1.5rem] lg:py-[6rem] py-[6vh] lg:px-[8rem] px-[4vw] bg-blue-700 rounded-3xl max-w-[100rem]">
                <h2 className="xl:text-[4.5rem] text-[5vh] text-center font-extrabold font-Jagerlay mb-4">Ready For A Quick Demo?</h2>
                <p className="xl:text-[1.2rem] text-[2.2vh] text-center font-semibold mb-6 max-w-[60rem] opacity-80">Jason will give you a brief, to-the-point video call demo on how our digital construction copilot supports you and your team.</p>
                <button className="bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book your 15 mins live demo now</button>
            </div>
            <div className=" absolute hidden sm:block lg:bottom-[5rem] bottom-[6vh] md:right-[6rem] right-[8vw] -rotate-6 rounded-xl">
                <img src={assets.AnimeImg6} alt="Man on phone" className="lg:w-[8rem] w-[8vw] rounded-xl" />
            </div>
            <div className=" absolute hidden sm:block lg:bottom-[8rem] bottom-[6vh] md:left-[8rem] left-[8vw] -rotate-3 rounded-xl">
                <img src={assets.AnimeImg5} alt="Man on phone" className="lg:w-[8rem] w-[12vw] rounded-xl" />
            </div>
        </section>
    );
};

export default CTA;
