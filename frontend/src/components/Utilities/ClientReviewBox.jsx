import React from 'react'

const ClientReviewBox = ({ Review = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia provident saepe nemo, hic cupiditate consectetur molestiae?', NumberOfStars = '⭐⭐⭐⭐', ClientName = 'Jasus Kidra ( CEO )', ClientAvatar }) => {
    return (
        <div className='ReviewBox m-auto w-[25rem] p-[2rem] bg-gray-600 rounded-2xl text-center'>
            <div className="clientReview mb-[1rem]">
                <p>"{Review}"</p>
            </div>
            <div className="clientDetails flex  justify-center gap-2 items-center">
                <div className="client-avatar h-14 w-14 bg-gray-300 rounded-full">
                    {/* <img src={ClientAvatar} className='h-10' alt="img" /> */}
                </div>
                <div className="client-detials flex justify-center items-start flex-col">
                    <p className="client-name font-semibold">{ClientName}</p>
                    <div className="stars">{NumberOfStars}</div>
                </div>
            </div>
        </div>
    )
}

export default ClientReviewBox