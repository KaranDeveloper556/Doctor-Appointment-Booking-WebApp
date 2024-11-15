import { assets } from '../../assets/assets_frontend/assets'
import ReUseButton from './ReUseButton'

const CTA = () => {
    return (
        <section className="relative 2xl:max-w-[90rem] max-w-[95vw] mx-auto p-[7rem] shadow-md flex items-center justify-center rounded-lg">
            <div className=" absolute right-[1rem]">
                <img src={assets.animeDoc1} alt="Man on phone" className="w-[25rem]" />
            </div>
            <div className="flex justify-center items-center p-[2rem] flex-col bg-yellow-400 rounded-3xl max-w-[60rem]">
                <h2 className="text-[1.8rem] leading-[5rem] text-center font-extrabold font-Jagerlay xl:text-[4.5rem] text-gray-800 mb-4">Ready For A Quick Demo?</h2>
                <p className="text-gray-700 xl:text-[1.5rem] text-[2.7vh] text-center font-semibold mb-6 max-w-[40rem]">Jason will give you a brief, to-the-point video call demo on how our digital construction copilot supports you and your team.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book your 15 mins live demo now</button>
            </div>
            <div className=" absolute left-[1rem]">
                <img src={assets.animeDoc2} alt="Man on phone" className="w-[25rem]" />
            </div>
        </section>
    );
};

export default CTA;
