import React from 'react'

const ReUseButton = ({ value, lefticon, righticon, onclick, tailwindclass }) => {
    return (
        <button
            onClick={onclick}
            className={`px-[.5rem] py-[.5rem] border-2 md:text-[1rem] text-[.7rem] flex justify-center items-center gap-2 bg-primary rounded-full hover:bg-blue-700 ${tailwindclass}`}
            aria-label={value}
        >
            {lefticon && <span className='md:text-[2rem] text-[1rem] '>{icon}</span>}
            {value && <span className='uppercase'>{value}</span>}
            {righticon && <span className='md:text-[1.8rem] text-[1rem] ' >{righticon}</span>}
        </button>
    )
}

export default ReUseButton