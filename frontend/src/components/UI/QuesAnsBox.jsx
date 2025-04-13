import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { RiArrowDownSLine } from "react-icons/ri";

const QuesAnsBox = ({ Ques = 'Lorem ipsum dolor sit amet consectetur adipisicing elit ??', Ans = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, error? Minima, excepturi repudiandae rem sint corrupti maxime voluptatem ipsum ea atque saepe. Nihil, officia minus hic dolores dolorem officiis maxime? Minima, excepturi repudiandae rem sint corrupti maxime voluptatem ipsum ea atque saepe. Nihil, officia minus hic dolores dolorem officiis maxime?', lastElemBorder }) => {
    const [BtnState, setBtnState] = useState(false);
    const ansBoxRef = useRef(null);

    useEffect(() => {
        if (BtnState) {
            gsap.to(ansBoxRef.current, {
                height: 'auto',
                duration: 0.5,
                ease: "Power1.inOut",
                paddingTop: '20px',
                marginTop: '20px',
            });
        } else {
            gsap.to(ansBoxRef.current, {
                height: 0,
                duration: 0.5,
                ease: "Power1.inOut",
                paddingTop: 0,
                marginTop: 0,
            });
        }
    }, [BtnState]);

    return (
        <div className={`QuesAnsBox relative border-t-[4px] ${lastElemBorder && 'border-b-[4px]'} md:mx-[5vw] mx-[3vw] md:p-[1.8rem] p-[4.5vw] transition-all cursor-pointer`} onClick={() => setBtnState(!BtnState)}>
            <div className="ques-box relative xl:text-[1.6rem] md:text-[1.5vw] sm:text-[1.2rem] text-[4.5vw] flex justify-between items-center lg:gap-[4rem] gap-[1vw]">
                <p className='relative font-bold'>
                    <span className='text-blue-600'>Q. &nbsp;</span>{Ques}
                </p>
                <button type="button" className='text-[1.6rem]'
                    onClick={(e) => {
                        e.stopPropagation();
                        setBtnState(!BtnState);
                    }}>
                    <RiArrowDownSLine className={`${BtnState ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
                </button>
            </div>
            <div ref={ansBoxRef} className={`ans-box overflow-hidden ${!BtnState ? 'h-0' : 'border-t-2'} transition-all`}>
                <p className="xl:text-[1.6rem] li:text-[1rem] text-[6vw]">
                    <span className='text-blue-600 font-semibold'>Ans. &nbsp;</span>{Ans}
                </p>
            </div>
        </div>
    );
};

export default QuesAnsBox;
