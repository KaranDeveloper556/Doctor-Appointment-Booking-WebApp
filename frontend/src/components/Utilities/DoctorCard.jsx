import { assets } from "../../assets/assets_frontend/assets"
import ReUseButton from "./ReUseButton"

const DoctorCard = ({
  imageSrc = assets.doc1,
  name = 'Nitin Rajput',
  speciality = 'speciality',
  rating = 4.5,
  ExperienceYear = 10,
  Education = 'lorme Health & Wellness Clinic Health',
  workedWith = 420
}) => {
  return (
    <div className="relative max-w-[20rem] mx-[.4rem] my-[2rem] pb-7 bg-gray-300 rounded-[2rem] rounded-t-[5rem] shadow-2xl">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-[20rem] object-cover bg-blue-700 rounded-t-[5rem]"
      />

      <div className=" doctor-info p-4 ">
        <div className="name-speciality font-bold">
          <h2 className="text-black text-[2rem] text-center">{name}</h2>

          <div className="line h-[.1rem] w-full bg-gray-700 rounded-full"></div>

          <div className="speciality-rating py-2 text-gray-800 text-[1.2rem] flex justify-between items-center">
            <h3>{speciality}</h3>
            <p>⭐({rating})</p>
          </div>
          <div className="line h-[.1rem] w-full bg-gray-700 rounded-full"></div>
        </div>
        <div className="education-years py-1 text-gray-800">
          <h3 className=""><b>{ExperienceYear}+ Years</b> Of Experience. {Education} </h3>
        </div>
        <div className="worked-with-people py-1 text-gray-800 font-semibold">
          <h3 className="">Woked with <b>{workedWith}+ </b>people</h3>
        </div>
      </div>

      <div className="btn-see-doctor relative w-full flex justify-center">
        <ReUseButton value={'Book Now'} tailwindclass={'absolute py-[.9rem] z-[10] w-[80%] font-bold text-black bg-blue-500 rounded-full'} />
      </div>
    </div>
  )
}

export default DoctorCard