import { useState } from "react";
import ReUseButton from "../Utilities/ReUseButton";
import { NavLink } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navigation = () => {
  //Variables
  const [isOpen, setIsOpen] = useState(false);


  const links = [
    { link: "About", slug: "/about" },
    { link: "Appointments", slug: "/appointments" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }


  useGSAP(
    () => {

      let NavTimeline = gsap.timeline({
        delay: .5,
      })
      NavTimeline.from('#logo-box', {
        y: -30,
        duration: .8,
        opacity: 0,
      }, 'NavAnime')
      NavTimeline.from('.ul-wapper', {
        y: -30,
        duration: .8,
        opacity: 0,
      }, 'NavAnime')
    }
  )

  return (
    <nav className="fixed top-0 w-screen z-[999]">
      <div className="mx-auto px-[4vw] py-[2vh] flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center z-[99] opacity-[1]" id="logo-box">
          <NavLink to="/" className="md:text-[2vw] sm:text-[4vw] text-[6vw] font-extrabold">
            KDevelops
          </NavLink>
        </div>

        {/* Center links (hidden on small screens) */}
        <div className={`ul-wapper ${isOpen ? 'fixed h-full w-full top-0 right-0 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-800 z-[98]' : 'hidden'} md:block space-x-6 font-semibold`}>
          <ul className={`flex justify-center  ${isOpen ? 'p-8 mt-[5rem]  flex-col li:text-[3.5rem] text-[2.8rem] font-bold li:leading-[3.5rem] leading-[2.8rem]' : ' gap-[3rem] text-[2.2vh] items-center'}`} id="Navlinks">
            {
              links.map(
                (link, index) => {
                  return <NavLink key={index} to={link.slug} className={`nav-links ${isOpen ? 'border-b-2 pb-2' : ''} flex items-center justify-between hover:text-indigo-600`} id={`links-${index}`}>
                    {link.link}
                    {isOpen && (
                      <MdOutlineArrowOutward />
                    )}
                  </NavLink>
                }
              )
            }
            <ReUseButton value={'Register'} />
          </ul>
        </div>

        {/* Mobile menu Button */}
        <div className="nav-btn-animate flex justify-center items-center md:hidden z-[99]" id="menu">
          {
            isOpen ? <ReUseButton icon={<RxCross1 />} onclick={() => { setIsOpen(false) }} /> : <ReUseButton value={<CgMenuRight />} onclick={() => { setIsOpen(true) }} />
          }
        </div>
      </div>
    </nav>
  )
}

export default Navigation