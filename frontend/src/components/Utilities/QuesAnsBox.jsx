import { useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";

const QuesAnsBox = ({ Ques = 'Lorem ipsum dolor sit amet consectetur adipisicing elit ??', Ans = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, error? Minima, excepturi repudiandae rem sint corrupti maxime voluptatem ipsum ea atque saepe. Nihil, officia minus hic dolores dolorem officiis maxime? Minima, excepturi repudiandae rem sint corrupti maxime voluptatem ipsum ea atque saepe. Nihil, officia minus hic dolores dolorem officiis maxime?', lastElemBorder }) => {

    const [BtnState, setBtnState] = useState(false)

    return (
        <div className={`QuesAnsBox relative border-t-[2px] ${lastElemBorder && 'border-b-[2px]'} md:mx-[5vw] mx-[3vw] p-[1.3rem] transition-all cursor-pointer `} onClick={() => setBtnState(!BtnState)}>
            <div className="ques-box relative xl:text-[1.5rem] text-[3.8vh] font-semibold flex justify-between items-center gap-[4rem]">
                <p className=' relative'>
                    <span className='text-blue-600'>Q. &nbsp;</span>{Ques}
                </p>
                <button type="button" className='text-[3rem]'
                    onClick={
                        (e) => {
                            e.preventDefault();
                            setBtnState(!BtnState)
                        }
                    }><RiArrowDownSLine className={`${BtnState ? 'rotate-180' : 'rotate-0'}`} /></button>
            </div>
            <div className={`ans-box overflow-hidden ${!BtnState ? 'h-0' : 'border-t-2 pt-5 mt-5'} xl:text-[1.2rem] text-[2.4vh]`}>
                <p>
                    <span className='text-blue-600 font-semibold'>Ans. &nbsp;</span>{Ans}
                </p>
            </div>
        </div>
    )
}

export default QuesAnsBox