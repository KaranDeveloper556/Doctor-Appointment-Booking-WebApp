import React from 'react'

const DoctorSpecialityCard = ({ title, icon }) => {
    return (
        <div
            className="relative flex items-center justify-between flex-col rounded-3xl p-4 gap-[.5rem] xl:text-2xl text-[1.5vh] border-2 shadow-md"
        >
            <img src={icon} alt="icon" className=" md:h-[6rem] h-[10vh] " />
            <h2 className="font-bold xl:text-[1.5rem] text-[2vw] capitalize ">{title}</h2>
        </div>
    )
}

export default DoctorSpecialityCard