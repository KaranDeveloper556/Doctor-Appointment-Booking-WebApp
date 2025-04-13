import { RiLinkedinBoxLine, RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    (
      <footer className="relative bg-black text-white w-full 3xl:max-w-[90rem] m-auto lg:px-[4rem] px-[5vw] ">
        {/* Top Section */}
        <div className="relative mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[4rem]">
          {/* Left Section */}
          <div className="relative space-y-6 md:w-auto w-full">
            <h1 className="text-2xl font-semibold">Hire Different™.</h1>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-auto px-2 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-blue-500 px-10 py-2 rounded-r-md text-black font-semibold">
                Join for free
              </button>
            </div>
            {/* Social Icons */}
            <div className="text-3xl flex items-center space-x-12 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="Instagram"
              >
                <RiInstagramLine />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="Twitter"
              >
                <RiTwitterLine />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="LinkedIn"
              >
                <RiLinkedinBoxLine />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm w-full lg:w-auto flex-1">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-4">Find Work</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Explore Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discover Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Browse Collections
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-4">Find People</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Learn More
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative text-center xl:text-[14rem] text-[15vw] max-h-[15rem] font-Jagerlay font-bold text-white overflow-hidden">
          KDevelops
        </div>
      </footer>
    )
  )
}

export default Footer;
