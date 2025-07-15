import { Fragment } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import styles from "../style";
import {
  group_iphone,
  mcb_main,
  pab_main,
  ft_main,
  bk_main,
  arrow_up_square_fill,
} from "../assets";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

const AppSection = () => (
  <section
    className={`${styles.paddingX} ${styles.marginX} ${styles.flexCenter} w-xs sm:w-xl xxl:h-screen xs:scrollbar-hide`}
  >
    <div className="relative top-0 mr-0 xxl:left-2 left-0.5 xs:mb-[40px] xxl:mt-[105px] h-[278px] w-[2px] xxl:h-[798px] xxl:w-[10px] bg-[#e1e1e1]"></div>
    <div
      className={`${styles.boxWidth} grid-rows-1 sm:grid grid-cols-3 gap-1 xs:my-24 my-8`}
    >
      <Tab.Group>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="relative flex flex-col xs:py-2 xs:mt-28 py-8"
        >
          {/* Icon buttons / Tab List */}
          <Tab.List>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex flex-col space-y-4 justify-center py-8 ml-28 sm:ml-0 xxl:w-11/12 xxl:h-[vh]"
            >
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={
                      selected
                        ? "relative flex flex-row space-x-2 justify-start items-center border-l-4 xxl:border-l-8 border-white border-l-[#FD9A38] xxl:h-[99px] px-5 outline-none"
                        : "relative flex flex-row space-x-2 justify-start items-center px-5"
                    }
                  >
                    <a className={
                      selected
                      ? "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#FD9A38] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                      : "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#ECECEC] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                    }>
                      <svg
                        // width="20"
                        // height="14"
                        viewBox="0 0 26 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current xxl:w-[60px] xxl:h-[60px] w-[25px] h-[25px] xxl:mt-2"
                      >
                        <path
                          d="M23.0912 1.49487C21.8242 1.1138 20.5071 0.925689 19.1842 0.936865C17.0126 0.838705 14.865 1.42457 13.0442 2.61187C11.2233 1.42457 9.0757 0.838705 6.90416 0.936865C4.73262 0.838705 2.58503 1.42457 0.76416 2.61187V18.9659C0.773983 19.1106 0.835926 19.2469 0.938519 19.3495C1.04111 19.4521 1.1774 19.514 1.32216 19.5239C1.43416 19.5239 1.48916 19.4679 1.60116 19.4679C3.26803 18.705 5.07168 18.2863 6.90416 18.2369C9.0757 18.1387 11.2233 18.7246 13.0442 19.9119C14.9273 18.8703 17.0329 18.2958 19.1842 18.2369C21.0196 18.1936 22.8381 18.5958 24.4842 19.4089C24.5698 19.4542 24.6667 19.4736 24.7632 19.4649C24.9079 19.455 25.0442 19.3931 25.1468 19.2905C25.2494 19.1879 25.3113 19.0516 25.3212 18.9069V2.61187C24.6443 2.11949 23.8908 1.74209 23.0912 1.49487ZM23.0912 16.5659C21.8249 16.1817 20.5073 15.9935 19.1842 16.0079C17.0329 16.0668 14.9273 16.6413 13.0442 17.6829V4.84386C14.9273 3.80226 17.0329 3.22784 19.1842 3.16886C20.5073 3.15452 21.8249 3.3427 23.0912 3.72687V16.5659Z"
                          fill="#303030"
                        />
                      </svg>
                    </a>
                    <h2 className="relative text-jost font-semibold xxl:text-[45px] text-[12px] sm:text-[18px]">
                      Books
                    </h2>
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={
                      selected
                        ? "relative flex flex-row space-x-2 justify-start items-center border-l-4 xxl:border-l-8 border-white border-l-[#0FD661] xxl:h-[99px] px-5 outline-none"
                        : "relative flex flex-row space-x-2 justify-start items-center px-5"
                    }
                  >
                    <a className={
                      selected
                      ? "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#0FD661] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                      : "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#ECECEC] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                    }>
                      <svg
                        // width="18"
                        // height="20"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current xxl:w-[60px] xxl:h-[60px] w-[25px] h-[25px] xxl:mt-2"
                      >
                        <path
                          d="M15.8153 20.965C15.5242 20.968 15.2356 20.9112 14.9673 20.798C14.1743 20.385 13.6163 19.816 13.0583 18.141C12.5664 16.7577 11.6258 15.5788 10.3863 14.792C9.31899 14.0604 8.43307 13.0945 7.79634 11.968C7.22701 10.9654 6.9144 9.83762 6.88634 8.685C6.88634 7.20456 7.47444 5.78476 8.52127 4.73793C9.5681 3.6911 10.9879 3.103 12.4683 3.103C13.9488 3.103 15.3686 3.6911 16.4154 4.73793C17.4622 5.78476 18.0503 7.20456 18.0503 8.685H20.2833C20.2953 7.65528 20.1012 6.63358 19.7126 5.67995C19.3239 4.72632 18.7485 3.86003 18.0202 3.132C17.2919 2.40397 16.4254 1.82891 15.4716 1.44062C14.5178 1.05234 13.4961 0.858667 12.4663 0.871C11.4368 0.858935 10.4152 1.0528 9.46169 1.44121C8.50814 1.82961 7.64186 2.40472 6.91377 3.13272C6.18568 3.86072 5.61046 4.72692 5.22194 5.68042C4.83341 6.63391 4.63941 7.65546 4.65134 8.685C4.68354 10.2128 5.09413 11.7088 5.84634 13.039C6.62894 14.4358 7.71662 15.638 9.02834 16.556C9.90622 17.08 10.5795 17.8873 10.9373 18.845C11.1355 19.6839 11.5098 20.471 12.0355 21.1541C12.5612 21.8372 13.2262 22.4007 13.9863 22.807C14.6668 23.1126 15.4129 23.243 16.1567 23.1864C16.9004 23.1298 17.6182 22.8879 18.2445 22.4827C18.8708 22.0776 19.3858 21.5222 19.7424 20.867C20.0991 20.2119 20.2861 19.4779 20.2863 18.732H18.0483C18.0468 19.3237 17.811 19.8908 17.3926 20.3092C16.9741 20.7276 16.4071 20.9634 15.8153 20.965ZM5.36634 1.585L3.78134 0C1.47948 2.30443 0.186523 5.42836 0.186523 8.6855C0.186523 11.9426 1.47948 15.0666 3.78134 17.371L5.35534 15.797C3.47305 13.9104 2.41687 11.3537 2.41893 8.68872C2.42099 6.02375 3.48113 3.46864 5.36634 1.585ZM9.67534 8.685C9.67534 9.23701 9.83903 9.77662 10.1457 10.2356C10.4524 10.6946 10.8883 11.0523 11.3983 11.2635C11.9083 11.4748 12.4694 11.5301 13.0108 11.4224C13.5522 11.3147 14.0495 11.0489 14.4399 10.6585C14.8302 10.2682 15.096 9.7709 15.2037 9.2295C15.3114 8.6881 15.2561 8.12692 15.0449 7.61693C14.8336 7.10694 14.4759 6.67105 14.0169 6.36437C13.558 6.05769 13.0183 5.894 12.4663 5.894C11.7262 5.89427 11.0165 6.1884 10.4931 6.71176C9.96974 7.23511 9.67561 7.94486 9.67534 8.685Z"
                          fill="#303030"
                        />
                      </svg>
                    </a>
                    <h2 className="relative text-jost font-semibold xxl:text-[45px] text-[12px] sm:text-[18px]">
                      Podcasts & Audio books
                    </h2>
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={
                      selected
                        ? "relative flex flex-row space-x-2 justify-start items-center border-l-4 xxl:border-l-8 border-white border-l-[#F55F92] xxl:h-[99px] px-5 outline-none"
                        : "relative flex flex-row space-x-2 justify-start items-center px-5"
                    }
                  >
                    <a className={
                      selected
                      ? "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#F55F92] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                      : "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#ECECEC] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                    }>
                      <svg
                        // width="21"
                        // height="20"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current xxl:w-[60px] xxl:h-[60px] w-[25px] h-[25px] xxl:mt-2"
                      >
                        <path
                          d="M6.17042 3.5271V15.7891C5.27125 15.4728 4.29475 15.4508 3.38227 15.7264C2.4698 16.002 1.6687 16.5608 1.09495 17.322C0.521199 18.0832 0.204568 19.0072 0.190892 19.9602C0.177216 20.9133 0.467206 21.846 1.01888 22.6234C1.57056 23.4007 2.35529 23.9822 3.25948 24.2839C4.16368 24.5855 5.14041 24.5916 6.04828 24.3012C6.95616 24.0109 7.74807 23.4391 8.30937 22.6687C8.87067 21.8983 9.17224 20.9693 9.17042 20.0161V6.5271H13.6704V3.5271H6.17042Z"
                          fill="#303030"
                        />
                        <path
                          d="M18.4274 0V12.262C17.5282 11.9457 16.5517 11.9237 15.6392 12.1993C14.7268 12.4749 13.9257 13.0337 13.3519 13.7949C12.7782 14.5561 12.4615 15.4801 12.4479 16.4331C12.4342 17.3862 12.7242 18.3189 13.2758 19.0963C13.8275 19.8736 14.6122 20.4551 15.5164 20.7568C16.4206 21.0584 17.3974 21.0645 18.3052 20.7741C19.2131 20.4838 20.005 19.912 20.5663 19.1416C21.1276 18.3712 21.4292 17.4422 21.4274 16.489V3H25.9274V0H18.4274Z"
                          fill="#303030"
                        />
                      </svg>
                    </a>
                    <h2 className="relative text-jost font-semibold xxl:text-[55px] text-[12px] sm:text-[18px]">
                      Music
                    </h2>
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={
                      selected
                        ? "relative flex flex-row space-x-2 justify-start items-center border-l-4 xxl:border-l-8 border-white border-l-[#FF095F] xxl:h-[99px] px-5 outline-none"
                        : "relative flex flex-row space-x-2 justify-start items-center px-5"
                    }
                  >
                    <a className={
                      selected
                      ? "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#FF095F] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                      : "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#ECECEC] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                    }>
                      <svg
                        // width="14"
                        // height="18"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current xxl:w-[60px] xxl:h-[60px] w-[25px] h-[25px] xxl:mt-2"
                      >
                        <path
                          d="M15.7423 0.656982V2.88998H13.5133V0.656982H4.57828V2.88998H2.34628V0.656982H0.113281V20.752H2.34628V18.519H4.57828V20.752H13.5133V18.519H15.7463V20.752H17.9793V0.656982H15.7423ZM4.57828 16.286H2.34628V14.057H4.57828V16.286ZM4.57828 11.821H2.34628V9.58798H4.57828V11.821ZM4.57828 7.35598H2.34628V5.12198H4.57828V7.35598ZM15.7423 16.287H13.5133V14.057H15.7463L15.7423 16.287ZM15.7423 11.822H13.5133V9.58798H15.7463L15.7423 11.822ZM15.7423 7.35698H13.5133V5.12198H15.7463L15.7423 7.35698Z"
                          fill="#303030"
                        />
                      </svg>
                    </a>
                    <h2 className="relative text-jost font-semibold xxl:text-[45px] text-[12px] sm:text-[18px]">
                      Films & Tv
                    </h2>
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={
                      selected
                        ? "relative flex flex-row space-x-2 justify-start items-center border-l-4 xxl:border-l-8 border-white border-l-[#6A64CF] xxl:h-[99px] px-5 outline-none"
                        : "relative flex flex-row space-x-2 justify-start items-center px-5"
                    }
                  >
                    <a className={
                      selected
                      ? "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#6A64CF] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                      : "inline-flex items-center justify-center xxl:w-28 xxl:h-28 xxl:m-5 sm:w-10 w-8 sm:h-10 h-8 bg-[#ECECEC] rounded-full text-[#F1F1F1]-100 transition-colors duration-150 focus:shadow-outline hover:bg-black-800"
                    }>
                      <svg
                        // width="18"
                        // height="21"
                        viewBox="0 0 22 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current xxl:w-[60px] xxl:h-[50px] w-[25px] h-[25px] xxl:mt-2"
                      >
                        <path
                          d="M19.4886 13.2758C18.3636 14.6486 17.0669 15.8712 15.6304 16.9138C11.1694 20.3642 6.09408 22.5869 0.787841 24.3518C0.429123 24.4714 0.296447 24.4247 0.378346 24.0046C1.42228 18.6282 2.45809 13.2501 3.48565 7.87048C3.56755 7.45279 3.81813 7.35615 4.15228 7.26279C6.60406 6.66651 8.96007 5.72919 11.1514 4.47823C12.9915 3.43271 14.5437 1.94725 15.6689 0.154785C15.6976 0.105646 15.7582 0.0728901 15.8426 0C16.5248 2.12446 17.1988 4.21943 17.8696 6.31523C18.4781 8.21856 19.062 10.1309 19.7049 12.0228C19.7898 12.2309 19.8145 12.4587 19.7763 12.6803C19.738 12.9018 19.6384 13.1081 19.4886 13.2758Z"
                          fill="#303030"
                        />
                        <path
                          d="M7.07678 23.9103C7.94164 23.6506 8.80982 23.4 9.67222 23.1306C12.8785 22.2207 15.9803 20.9767 18.9267 19.4189C19.3362 19.1904 19.7457 18.6457 20.138 18.8169C20.4386 18.9488 20.5189 19.5991 20.6843 20.0241C21.206 21.3705 21.2077 21.3828 19.817 21.8111C16.9714 22.6143 14.0646 23.1825 11.1259 23.5098C9.78689 23.6916 8.4421 23.8373 7.09978 24.0011L7.07678 23.9103Z"
                          fill="#303030"
                        />
                        <path
                          d="M7.84277 22.6698C8.52745 22.3267 9.21131 21.9802 9.89845 21.6411C13.3458 19.9978 16.4968 17.7944 19.2235 15.1204C19.4741 14.8689 19.5969 14.8534 19.7255 15.2096C19.8525 15.6066 20.017 15.9905 20.2169 16.3562C20.5486 16.9131 20.3553 17.2309 19.8746 17.5716C17.8439 18.9193 15.6622 20.0243 13.3743 20.8639C11.5802 21.6087 9.73072 22.2125 7.84277 22.6698Z"
                          fill="#303030"
                        />
                        <path
                          d="M6.76233 24.7709C9.91872 24.4572 13.0685 24.1533 16.1921 23.6349C17.4892 23.4416 18.7724 23.1637 20.0332 22.8028C20.3813 22.6972 20.577 22.6922 20.7236 23.1107C21.215 24.512 21.2346 24.494 19.758 24.5227C15.7782 24.6002 11.7985 24.6821 7.81876 24.7684C7.46659 24.7766 7.11449 24.7709 6.76233 24.7709Z"
                          fill="#303030"
                        />
                      </svg>
                    </a>
                    <h2 className="relative text-jost font-semibold xxl:text-[45px] text-[12px] sm:text-[18px]">
                      Magazines & Comic books
                    </h2>
                  </div>
                )}
              </Tab>
            </motion.div>
          </Tab.List>
        </motion.div>
        {/* Circle and Iphone Div */}
        <Tab.Panels>
          <Tab.Panel className="flex flex-col sm:flex-row space-x-20 w-[850px] xxl:w-[2200px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="relative container sm:mx-auto ml-[100px] flex flex-col sm:my-16 my-8"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex flex-col justify-center items-center sm:w-[480px] sm:h-[480px] xxl:w-[880px] xxl:h-[880px] w-40 h-40 bg-gradient-to-r from-orange-500 via-red-500 to-amber-300 rounded-full outline outline-offset-8 outline-[#FD9437]"
              >
                <motion.img
                  variants={slideIn("right", "tween", 0.2, 1)}
                  src={bk_main}
                  alt="Group Iphone"
                  className="relative w-[90%] mix-h-[90%]"
                />
              </motion.div>
            </motion.div>
            {/* Read and Discover Div */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="sm:w-[100%] w-[180px] h-[vh] relative justify-start items-start flex flex-col sm:py-2 py-2 xxl:w-4/5"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="text-start py-8"
              >
                <p className="font-jost font-semibold text-black p-4 text-[16px] sm:text-[21px] xxl:text-[60px]">
                  Read and Discover
                </p>
                <p className="font-jost font-semibold text-black p-4 text-[24px] sm:text-[39px] xxl:text-[95px] xxl:mb-[65px] leading-10 xxl:leading-[100px]">
                  Africa & The <br /> Caribbean’s Best <br /> Stories
                </p>
                <p className="font-jost break-words font-semibold text-black p-4 text-[12px] sm:text-[21px] xxl:text-[39px]">
                  In our own words. On our own terms. Chale, wawolo!{" "}
                </p>
              </motion.div>
              <a href="#" className={`${styles.nbDarkBtns} xxl:mt-[95px]`}>Learn More</a>
            </motion.div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col sm:flex-row space-x-20 w-[850px] xxl:w-[2200px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="relative container sm:mx-auto ml-[100px] flex flex-col sm:my-16 my-8"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex flex-col justify-center items-center sm:w-[480px] sm:h-[480px] xxl:w-[880px] xxl:h-[880px] w-40 h-40 bg-gradient-to-r from-lime-300 via-yellow-500 to-green-500 rounded-full outline outline-offset-8 outline-[#50F6BF]"
              >
                <motion.img
                  variants={slideIn("right", "tween", 0.2, 1)}
                  src={pab_main}
                  alt="Group"
                  className="relative w-[90%] mix-h-[90%]"
                />
              </motion.div>
            </motion.div>
            {/* Bless ‘yuh ears Div */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="sm:w-[100%] w-[180px] h-[vh] relative justify-start items-start flex flex-col sm:py-2 py-2 xxl:w-4/5"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="text-start py-8"
              >
                <p className="font-jost font-semibold text-black p-4 text-[16px] sm:text-[21px] xxl:text-[60px]">
                  Bless ‘yuh ears
                </p>
                <p className="font-jost font-semibold text-black p-4 text-[24px] sm:text-[39px] xxl:mb-[65px] xxl:text-[95px] leading-10 xxl:leading-[85px]">
                  With the wisdom and color of African <br /> & Caribbean
                  stories.
                </p>
                <p className="font-jost break-words font-semibold text-black p-4 text-[12px] sm:text-[21px] xxl:text-[39px]">
                  They say things in a way that only they can say them.{" "}
                </p>
              </motion.div>
              <a href="#" className={`${styles.nbDarkBtns} xxl:mt-[95px]`}>Learn More</a>
            </motion.div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col sm:flex-row space-x-20 w-[850px] xxl:w-[2200px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="relative container sm:mx-auto ml-[100px] flex flex-col sm:my-16 my-8"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex flex-col justify-center items-center sm:w-[480px] sm:h-[480px] xxl:w-[880px] xxl:h-[880px] w-40 h-40 bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 rounded-full outline outline-offset-8 outline-red-500"
              >
                <motion.img
                  variants={slideIn("right", "tween", 0.2, 1)}
                  src={group_iphone}
                  alt="Group Iphone"
                  className="relative w-[90%] mix-h-[90%]"
                />
              </motion.div>
            </motion.div>
            {/* EChok Div */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="sm:w-[100%] w-[180px] h-[vh] relative justify-start items-start flex flex-col sm:py-2 py-2 xxl:w-4/5"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="text-start py-8"
              >
                <p className="font-jost font-semibold text-black p-4 text-[16px] sm:text-[21px] xxl:text-[60px]">
                  Listen & Discover. Guaranteed…
                </p>
                <p className="font-jost font-semibold text-black p-4 text-[24px] xxl:mb-[65px] sm:text-[39px] xxl:text-[95px] leading-10 xxl:leading-[85px]">
                  ‘E choke.
                </p>
                <p className="font-jost break-words font-semibold text-black p-4 text-[12px] sm:text-[21px] xxl:text-[39px]">
                  Explore African & Caribbean rhythms and sounds. Vibe with the
                  familiar and .{" "}
                </p>
              </motion.div>
              <a href="#" className={`${styles.nbDarkBtns} xxl:mt-[95px]`}>Learn More</a>
            </motion.div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col sm:flex-row space-x-20 w-[850px] xxl:w-[2200px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="relative container sm:mx-auto ml-[100px] flex flex-col sm:my-16 my-8"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex flex-col justify-center items-center sm:w-[480px] sm:h-[480px] xxl:w-[880px] xxl:h-[880px] w-40 h-40 bg-gradient-to-r from-orange-300 via-red-500 to-red-500 rounded-full outline outline-offset-8 outline-[#FF065E]"
              >
                <motion.img
                  variants={slideIn("right", "tween", 0.2, 1)}
                  src={ft_main}
                  alt="Group Iphone"
                  className="relative w-[90%] mix-h-[90%]"
                />
              </motion.div>
            </motion.div>
            {/* Custom Reacyions */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="sm:w-[100%] w-[180px] h-[vh] relative justify-start items-start flex flex-col sm:py-2 py-2 xxl:w-4/5"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="text-start py-8"
              >
                <p className="font-jost font-semibold text-black p-4 text-[16px] sm:text-[21px] xxl:text-[60px]">
                  Custom Reacyions
                </p>
                <p className="font-jost font-semibold text-black p-4 text-[24px] xxl:mb-[65px] sm:text-[39px] xxl:text-[95px] leading-10 xxl:leading-[85px]">
                  African & Caribbean <br /> Stories in motion.
                </p>
                <p className="font-jost break-words font-semibold text-black p-4 text-[12px] sm:text-[21px] xxl:text-[39px]">
                  Get all the African - Caribbean movies close to you.{" "}
                </p>
              </motion.div>
              <a href="#" className={`${styles.nbDarkBtns} xxl:mt-[95px]`}>Learn More</a>
            </motion.div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col sm:flex-row space-x-20 w-[850px] xxl:w-[2200px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="relative container sm:mx-auto ml-[100px] flex flex-col sm:my-16 my-8"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex flex-col justify-center items-center sm:w-[480px] sm:h-[480px] xxl:w-[880px] xxl:h-[880px] w-40 h-40 bg-gradient-to-r from-blue-200 via-purple-500 to-blue-500 rounded-full outline outline-offset-8 outline-[#9463CE]"
              >
                <motion.img
                  variants={slideIn("right", "tween", 0.2, 1)}
                  src={mcb_main}
                  alt="Group Iphone"
                  className="relative w-[90%] mix-h-[90%]"
                />
              </motion.div>
            </motion.div>
            {/* EChok Div */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="sm:w-[100%] w-[180px] h-[vh] relative justify-start items-start flex flex-col sm:py-2 py-2 xxl:w-4/5"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="text-start py-8"
              >
                <p className="font-jost font-semibold text-black p-4 text-[16px] sm:text-[21px] xxl:text-[60px]">
                  Custom Reacyions
                </p>
                <p className="font-jost font-semibold text-black p-4 text-[24px] xxl:mb-[65px] sm:text-[39px] xxl:text-[95px] leading-10 xxl:leading-[85px]">
                  African & Caribbean <br /> Magazines in style.
                </p>
                <p className="font-jost break-words font-semibold text-black p-4 text-[12px] sm:text-[21px] xxl:text-[39px]">
                  Get all the African - Caribbean movies close to you.{" "}
                </p>
              </motion.div>
              <a href="#" className={`${styles.nbDarkBtns} xxl:mt-[95px]`}>Learn More</a>
            </motion.div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    <div className="relative flex sm:mt-[40%]">
      <a href="#mainpage">
        <img src={arrow_up_square_fill} alt="Arrow Up" className="w-8 h-8 xxl:w-[80px] xxl:h-[80px]" />
      </a>
    </div>
  </section>
);

export default AppSection;
