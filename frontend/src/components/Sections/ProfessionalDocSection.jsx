import React from 'react'
import DoctorCard from '../Utilities/DoctorCard'
import { assets } from '../../assets/assets_frontend/assets';

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
    },
    {
      imageSrc: assets.doc7,
      name: 'Amit Gupta',
      speciality: 'General Physician',
      rating: 4.3,
      experienceYear: 7,
      education: 'Health & Wellness Clinic',
      workedWith: 250,
    },
    {
      imageSrc: assets.doc8,
      name: 'Sonal Mehta',
      speciality: 'Gynecologist',
      rating: 4.6,
      experienceYear: 14,
      education: 'Women’s Health Center',
      workedWith: 450,
    },
    {
      imageSrc: assets.doc1,
      name: 'Manish Thakur',
      speciality: 'Endocrinologist',
      rating: 4.5,
      experienceYear: 13,
      education: 'Endocrine Health Center',
      workedWith: 410,
    },
    {
      imageSrc: assets.doc2,
      name: 'Kavita Rao',
      speciality: 'Ophthalmologist',
      rating: 4.7,
      experienceYear: 16,
      education: 'Vision Care Institute',
      workedWith: 520,
    },
    {
      imageSrc: assets.doc3,
      name: 'Rohit Malhotra',
      speciality: 'Urologist',
      rating: 4.4,
      experienceYear: 10,
      education: 'Urology Health Institute',
      workedWith: 310,
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
      <div className="doctors-card flex justify-between items-center flex-wrap">
        {
          doctors.map((doctor, index) => {
            return <DoctorCard imageSrc={doctor.imageSrc} name={doctor.name} speciality={doctor.speciality} rating={doctor.rating} ExperienceYear={doctor.experienceYear} education={doctor.education} workedWith={doctor.workedWith} key={index} />
          })
        }
      </div>
    </section>
  )
}

export default ProfessionalDocSection