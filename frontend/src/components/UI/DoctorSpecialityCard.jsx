import React from 'react'
import ReUseButton from './ReUseButton'

const DoctorSpecialityCard = ({ title, icon }) => {
    return (
        <div className="relative flex items-center justify-between flex-col rounded-3xl p-1 xl:text-[1.6rem] li:text-[1.2rem] text-[6vw] shadow-md">
            <div div className="card-img-text px-[1.5rem] py-[.5rem] mb-[.5rem] flex items-center justify-between flex-row gap-1 rounded-full border-[.3rem]" >
                <img src={icon && icon} alt="icon" className=" md:h-[4rem] h-[10vh] " />
                <h2 className="font-bold capitalize ">{title && title}</h2>
            </div>
            <div className="btn-see-doctor">
                <ReUseButton value={'See Doctors'} tailwindclass={'relative top-[-1.8rem] z-[9] font-semibold text-transparency rounded-full'} />
            </div>
        </div>
    )
}

export default DoctorSpecialityCard