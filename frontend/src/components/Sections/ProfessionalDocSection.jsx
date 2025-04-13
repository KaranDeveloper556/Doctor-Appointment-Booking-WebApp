import React from 'react'
import DoctorCard from '../UI/DoctorCard'
import { assets } from '../../assets/assets_frontend/assets';
import ReUseButton from '../UI/ReUseButton';

const ProfessionalDocSection = () => {

  const doctors = [
    {
      imageSrc: assets.doc1,
      name: 'Nitin Rajput',
      speciality: 'Cardiologist',
      rating: 4.5,
      experienceYear: 10,
      education: 'Lorem Health & Wellness Clinic',
      workedWith: 420,
    },
    {
      imageSrc: assets.doc8,
      name: 'Anita Sharma',
      speciality: 'Dermatologist',
      rating: 4.7,
      experienceYear: 8,
      education: 'Global Skin Care Institute',
      workedWith: 350,
    },
    {
      imageSrc: assets.doc3,
      name: 'Rahul Verma',
      speciality: 'Pediatrician',
      rating: 4.8,
      experienceYear: 12,
      education: 'Child Care University',
      workedWith: 500,
    },
    {
      imageSrc: assets.doc4,
      name: 'Sanya Kapoor',
      speciality: 'Orthopedic Surgeon',
      rating: 4.6,
      experienceYear: 9,
      education: 'Orthopedic Excellence Center',
      workedWith: 300,
    },
    {
      imageSrc: assets.doc6,
      name: 'Vikram Singh',
      speciality: 'Neurologist',
      rating: 4.9,
      experienceYear: 15,
      education: 'Neuro Health Institute',
      workedWith: 600,
    },
    {
      imageSrc: assets.doc3,
      name: 'Priya Nair',
      speciality: 'Oncologist',
      rating: 4.4,
      experienceYear: 11,
      education: 'Cancer Research Academy',
      workedWith: 380,
    }
  ];

  return (
    <section className='Professional-Doc-section relative w-full 3xl:max-w-[90rem] m-auto my-[4vh] lg:my-[8rem] lg:px-[2rem] px-[3vw]'>
      <div className="heading">
        <p className="section-name text-gray-400 text-lg font-semibold">Our Doctors</p>
        <h2 className="intro-heading font-Jagerlay xl:text-[5rem] md:text-[7vw] text-[11vw] font-bold">
          <span className='text-blue-600'>World's</span> Best <br /> Doctors..
        </h2>
      </div>
      <div className="doctors-card flex justify-center items-center gap-[1rem] flex-wrap">
        {
          doctors.map((doctor, index) => {
            return <DoctorCard imageSrc={doctor.imageSrc} name={doctor.name} speciality={doctor.speciality} rating={doctor.rating} ExperienceYear={doctor.experienceYear} education={doctor.education} workedWith={doctor.workedWith} key={index} />
          })
        }
      </div>
      <div className="button py-[4rem]">

        <ReUseButton value={'See More'} tailwindclass={'m-auto w-[20rem]'} />
      </div>
    </section>
  )
}

export default ProfessionalDocSection