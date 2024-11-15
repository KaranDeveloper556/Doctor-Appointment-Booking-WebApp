import { assets } from '../../assets/assets_frontend/assets'
import ReUseButton from './ReUseButton'

const CTA = () => {
    return (
        <section className="relative 2xl:max-w-[90rem] max-w-[95vw] mx-auto bg-yellow-400 p-[7rem] shadow-md flex items-center justify-center rounded-lg my-[5rem] mt-[18vh]">
            <div className=" absolute left-0 bottom-0">
                <img src={assets.doc3} alt="Man on phone" className="w-[25vw]" />
            </div>
            <div className="flex justify-center items-center flex-col maw-w-[10rem]">
                <h2 className="text-3xl font-semibold font-Jagerlay xl:text-[4.5rem] text-[5vh] text-gray-800 mb-4">Ready For A Quick Demo?</h2>
                <p className="text-gray-700 xl:text-[1.5rem] text-[2.7vh] mb-6">Jason will give you a brief, to-the-point video call demo on how our digital construction copilot supports you and your team.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book your 15 mins live demo now</button>
            </div>
            <div className=" absolute right-0 bottom-0">
                <img src={assets.doc1} alt="Man on phone" className="w-[25vw]" />
            </div>
        </section>
    );
};

export default CTA;
