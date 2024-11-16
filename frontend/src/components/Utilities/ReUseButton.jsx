import React from 'react'

const ReUseButton = ({ value, icon, righticon, onclick, tailwindclass }) => {
    return (
        <button
            onClick={onclick}
            className={`px-[2rem] py-[.5rem] border-2 md:text-[.9rem] text-[.7rem] flex justify-center items-center gap-2 bg-primary rounded-full hover:bg-blue-700 ${tailwindclass}`}
            aria-label={value}
        >
            {icon && <span>{icon}</span>}
            {value && <span className='uppercase'>{value}</span>}
            {righticon && <span>{righticon}</span>}
        </button>
    )
}

export default ReUseButton