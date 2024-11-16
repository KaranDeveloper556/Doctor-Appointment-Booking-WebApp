import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const ReviewCard = ({ text, clientName, clientMail }) => {
    return (
        <div className=" p-6 m-auto my-[8vh] rounded-3xl shadow-md max-w-4xl bg-slate-800">
            <blockquote className="text-2xl italic text-center mb-4">
                <span className="text-2xl font-semibold ">
                    <img src={assets.QuotationSymbol} alt="img" className='h-[5rem] mb-4' />
                </span>
                Impressed by the professionalism and attention to detail. Impressed by the professionalism and attention to detail. Impressed by the professionalism and attention to detail. Impressed by the professionalism and attention to detail.
            </blockquote>
            <div className="flex items-center">
                <img
                    className="w-10 h-10 rounded-full"
                    src={assets.QuotationSymbol}
                    alt="Guy Hawkins"
                />
                <div className="ml-3">
                    <p className="text-sm font-medium">Guy Hawkins</p>
                    <p className="text-sm text-gray-500">@guyhawkins</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard