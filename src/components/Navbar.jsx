import { useState } from "react";

import { close, logo, menu } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav 
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="sticky top-0 flex py-6 justify-between items-center navbar border-b-2 border-gray-200 shadow-md w-xs sm:w-xl xs:h-[89px] xxl:h-[198px] h-auto z-50 bg-[#FFFFFF] xs:scrollbar-hide"
    >
      <a href="#" className={`${styles.flexCenter} mx-8 sm:ml-20 xs:ml-20 xxl:ml-40`}>
        <img src={logo} alt="wakonte logo" className="w-auto h-[32px] xs:h-[35px] xxl:h-[88px]" />
      </a>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1 xxl:gap-14">
        <li
          className={`text-gray-900 hover:text-gray-500 cursor-pointer mr-10`}
        >
          <a href="#" className="text-jost font-medium xs:text-[18px] xxl:text-[48px]">Books</a>
        </li>
        <li
          className={`text-gray-900 hover:text-gray-500 cursor-pointer mr-10`}
        >
          <a href="#" className="text-jost font-medium xs:text-[18px] xxl:text-[48px]">Music</a>
        </li>
        <li
          className={`text-gray-900 hover:text-gray-500 cursor-pointer mr-10`}
        >
          <a href="#" className="text-jost font-medium xs:text-[18px] xxl:text-[48px]">Podcasts & Audio Books</a>
        </li>
        <li
          className={`text-gray-900 hover:text-gray-500 cursor-pointer mr-10`}
        >
          <a href="#" className="text-jost font-medium xs:text-[18px] xxl:text-[48px]">Films & Tv</a>
        </li>
        <li
          className={`text-gray-900 hover:text-gray-500 cursor-pointer mr-10`}
        >
          <a href="#" className="text-jost font-medium xs:text-[18px] xxl:text-[48px]">Magazines & Comic Book</a>
        </li>
        <li
          className={`text-gray-900 hover:text-gray-500 cursor-pointer mr-10`}
        >
          <a href="#" className="text-jost font-medium xs:text-[18px] xxl:text-[48px]">Country</a>
        </li>
      </ul>

      <div className="sm:flex xxl:space-x-8 xs:space-x-4 mx-8 sm:mr-20 xs:mr-20 xxl:mr-40 hidden">
        <button className={`${styles.nbOutlinBtn}`}>Log in</button>
        <button className={`${styles.nbOutlinBtn}`}>Get started</button>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center mr-8">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain bg-gray-500"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gray-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-md sidebar`}
        >
          <ul className="list-none flex justify-center items-center flex-col">
            <li
              className={`text-jost font-medium text-gray-900 hover:text-gray-500 cursor-pointer text-[16px] mb-4`}
            >
              <a href="#">Books</a>
            </li>
            <li
              className={`text-jost font-medium text-gray-900 hover:text-gray-500 cursor-pointer text-[16px] mb-4`}
            >
              <a href="#">Music</a>
            </li>
            <li
              className={`text-jost font-medium text-gray-900 hover:text-gray-500 cursor-pointer text-[16px] mb-4`}
            >
              <a href="#">Podcasts & Audio Books</a>
            </li>
            <li
              className={`text-jost font-medium text-gray-900 hover:text-gray-500 cursor-pointer text-[16px] mb-4`}
            >
              <a href="#">Films & Tv</a>
            </li>
            <li
              className={`text-jost font-medium text-gray-900 hover:text-gray-500 cursor-pointer text-[16px] mb-4`}
            >
              <a href="#">Magazines & Comic Book</a>
            </li>
            <li
              className={`text-jost font-medium text-gray-900 hover:text-gray-500 cursor-pointer text-[16px] mb-4`}
            >
              <a href="#">Country</a>
            </li>
            <div className="flex space-x-4 ml-6">
              <button className={`${styles.nbOutlinBtn}`}>Log in</button>
              <button className={`${styles.nbOutlinBtn}`}>Get started</button>
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
