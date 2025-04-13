import React from 'react'
import QuesAnsBox from '../UI/QuesAnsBox'

const FAQ = () => {
  return (
    <section className="FAQ relative m-auto mt-[5rem] w-full 4xl:max-w-[90rem]">
      <div className="heading font-Jagerlay xl:text-[5rem] md:text-[7vw] text-[11vw] font-bold text-left ml-[15vw] mb-[1.8rem]">
        <p>FAQ's</p>
      </div>
      <div className="faq-container">
        <div className="faq-wapper">
          <QuesAnsBox Ques={'Lorem ipsum dolor sit amet consectetur adipisicing elit ??'} />
          <QuesAnsBox Ques={'Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing elit ??'} />
          <QuesAnsBox Ques={'Lorem ipsum dolor sit amet elit ??'} />
          <QuesAnsBox Ques={'Lorem ipsum dolor sit ipsum dolor sit sit ipsum dolor sit amet consectetur dolor sit ipsum dolor sit sit ipsum dolor sit amet consectetur adipisicing elit ??'} />
          <QuesAnsBox Ques={'Lorem ipsum adipisicing elit ??'} lastElemBorder />
        </div>
      </div>
    </section>
  )
}

export default FAQ