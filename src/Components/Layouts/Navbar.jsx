import { useState } from 'react';
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo2 from '../../assets/logo2.png';
import List from '../List';
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu toggle

  return (
    <nav className="py-5 bg-bannerBg relative z-50 border-b border-gray-100 shadow-md">
      <Container>
        <Flex className="justify-between items-center">
          
          {/* Logo Section */}
          <div className="max-w-[160px]">
            <Image src={Logo2} alt="Company Logo" className="cursor-pointer" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden ml-56">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navColor focus:outline-none"
              aria-label="Toggle Menu"
            >
              <HiOutlineMenuAlt3  className={`text-[28px] text-btnbgColor transition-transform duration-300 transform ${isMenuOpen ? 'rotate-90' : ''}`}/>
            </button>
          </div>

          {/* Sliding Menu (Only for Mobile) */}
          <div
            className={`fixed top-0 right-0 py-[100px] w-[300px] bg-bgColor opacity-80 shadow-lg transform transition-transform duration-500 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden`} // Hide sliding menu on desktop
          >
            {/* Close Button (Only for Mobile) */}
            <button
              className="absolute top-10 right-4 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
             <RxCross2 className='text-[30px] text-fontColor'/>
            </button>

            <ul className="flex flex-col items-center justify-center h-full lg:hidden text-center mt-8">
              <li className="lg:mt-0">
                <List to="#" text="Home" className="text-navColor hover:text-btnbgColor hover:underline text-lg font-medium transition-colors duration-200 ease-in-out" />
              </li>
              <li className="lg:mt-0">
                <List to="#" text="Pages" className="text-navColor hover:text-btnbgColor hover:underline text-lg font-medium transition-colors duration-200 ease-in-out" />
              </li>
              <li className="lg:mt-0">
                <List to="#" text="Service" className="text-navColor hover:text-btnbgColor hover:underline text-lg font-medium transition-colors duration-200 ease-in-out" />
              </li>
              <li className="lg:mt-0">
                <List to="#" text="Blog" className="text-navColor hover:text-btnbgColor hover:underline text-lg font-medium transition-colors duration-200 ease-in-out" />
              </li>
              <li className="lg:mt-0">
                <List to="#" text="Contact" className="text-navColor hover:text-btnbgColor hover:underline text-lg font-medium transition-colors duration-200 ease-in-out" />
              </li>
            </ul>

            {/* Download CV Button for Mobile inside the sliding menu */}
            <div className="mt-6 text-center lg:hidden">
              <Link
                className="relative items-center justify-center px-8 py-3 text-lg leading-7 text-white bg-btnbgColor border border-btnbgColor rounded-full hover:bg-opacity-90 transition duration-200"
                role="button"
                aria-label="Download CV"
              >
                <span className="absolute inset-1 border-2 border-white rounded-full"></span>
                <span className="relative z-10">Download CV</span>
              </Link>
            </div>
          </div>

          {/* Regular Navbar for Desktop */}
          <div >
            <ul className="hidden lg:flex items-center space-x-6">
            <List to="#" text="Home" className="text-navColor hover:text-btnbgColor text-lg font-semibold" />
            <List to="#" text="Pages" className="text-navColor hover:text-btnbgColor text-lg font-semibold" />
            <List to="#" text="Service" className="text-navColor hover:text-btnbgColor text-lg font-semibold" />
            <List to="#" text="Blog" className="text-navColor hover:text-btnbgColor text-lg font-semibold" />
            <List to="#" text="Contact" className="text-navColor hover:text-btnbgColor text-lg font-semibold" />
            </ul>
          </div>

          {/* Download CV Button for Desktop */}
          <div className="hidden lg:block max-w-[200px] text-right">
            <Link
              className="relative items-center justify-center px-8 py-3 text-lg leading-7 text-white bg-btnbgColor border border-btnbgColor rounded-full hover:bg-opacity-90 transition duration-200"
              role="button"
              aria-label="Download CV"
            >
              <span className="absolute inset-1 border-2 border-white rounded-full"></span>
              <span className="relative z-10">Download CV</span>
            </Link>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
