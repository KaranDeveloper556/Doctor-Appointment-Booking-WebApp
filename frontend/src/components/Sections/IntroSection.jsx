import { useCallback } from "react"


const IntroSection = () => {

    const SplitingText = () => useCallback(() => {
        let introParaClutter = '';
        let introParaElement = document.querySelector('.intro-para')

        introParaElement.textContent.split('').forEach(
            (elem) => {
                if (elem === ' ') {
                    return introParaClutter += '<span>&nbsp;</span>'
                }
                introParaClutter += `<span>${elem}</span>`
            }
        )
        introParaElement.innerHTML = introParaClutter

        let second_introParaClutter = '';
        let second_introParaElement = document.querySelector('.second-intro-content')
        second_introParaElement.textContent.split('').forEach(
            (elem) => {
                if (elem === ' ') {
                    return second_introParaClutter += '<span>&nbsp;</span>'
                }
                second_introParaClutter += `<span>${elem}</span>`
            }
        )
        second_introParaElement.innerHTML = second_introParaClutter

    }, [])
    SplitingText()
    return (
        <section className="intro-section m-auto my-[4vh] lg:my-[8rem] w-full 3xl:max-w-[90rem] lg:px-[4rem] px-[5vw]">
            <div className="first-intro-inner-wapper relative w-full flex items-start justify-between flex-col lg:flex-row lg:gap-[4rem] gap-[4vh] mb-[6rem]">
                <div className="heading">
                    <p className="section-name text-gray-400 text-lg font-semibold">Intro</p>
                    <h2 className="intro-heading font-Jagerlay xl:text-[5rem] md:text-[7vw] text-[11vw] font-bold">Health, <br /> Simplified</h2>
                </div>
                <div className="intro-content relative right-0 flex-1">
                    <p className="intro-para xl:text-[1.6rem] li:text-[1.2rem] text-[6vw] tracking-wide">
                        At Kdevelops, we simplify healthcare by connecting you with trusted doctors for seamless appointment bookings. Our platform provides easy access to certified medical professionals across various specialties, empowering you to find and schedule appointments in just a few clicks. With secure data protection and verified patient reviews, we ensure a reliable and user-friendly experience that prioritizes your health and convenience.
                    </p>
                </div>
            </div>
            <div className="second-intro pr-0 sm:pr-[15vw] lg:pr-[10rem]">
                <p className="second-intro-content xl:text-[1.6rem] li:text-[1.2rem] text-[6vw] tracking-wide">
                    <b>Our Mission </b> we aim to bridge the gap between patients and medical professionals by offering a seamless appointment booking experience. By leveraging advanced technology, we ensure patients can access trusted healthcare providers quickly and efficiently. Our Vision To revolutionize the way people interact with healthcare services by providing a platform that prioritizes convenience, transparency, and trust.
                </p>
            </div>
        </section>
    )
}

export default IntroSection