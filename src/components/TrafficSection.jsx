import { motion } from "framer-motion";
import styles from "../style";
import { Ellipse, wllp_tablet } from "../assets";
import {
  fadeIn,
  slideIn,
  textVariant,
  staggerContainer,
} from "../utils/motion";

const TrafficSection = () => (
  <section className="relative sm:pl-16 pl-6 bg-gradient-to-r from-[#FEFEFE] to-[#E1E2E2] w-xs sm:w-xl h-[vh] xs:h-[620px] xxl:h-[2200px] xs:scrollbar-hide">
    <img
      src={Ellipse}
      alt="Ellipse Banner"
      className="absolute max-w-md mx-auto h-[100%] xxl:h-[100%] xxl:object-fill object-contain top-0 right-0 invisible lg:visible"
    />
    {/* // */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}mx-auto flex flex-col`}
    >
      <div className="sm:mt-4 mt-40 p-2 grid gap-4 sm:grid-cols-2 grid-flow-row divide-x-0 justify-center items-center">
        <div className={`${styles.marginX}`}>
          <div className="flex justify-start items-start text-start flex-col sm:mt-2 mt-36 relative z-10">
            <motion.h1
              variants={textVariant(1.1)}
              className={`${styles.trafficText} mt-6 xxl:mt-[245px] xxl:my-[90px]`}
            >
              Traffic
            </motion.h1>
            <motion.h1
              variants={textVariant(1.1)}
              className={styles.trafficHeading}
            >
              Stage reporting with 50k queries.
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="font-jost break-words xxl:my-16 mt-[4px] md-[10px] py-8 font-normal xxl:text-[48px] sm:text-[16px] text-[14px] text-start text-black-400 leading-[22px] xxl:leading-[58px]"
            >
              He nicked it tickety boo harry the cras bargy chap mush spiffing
              spend a penny the full monty burke butty.
            </motion.p>
            <div className="grid xs:grid-cols-2 xxl:gap-12 xs:gap-8 gap-4 justify-between items-center h-[vh]">
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="flex justify-between gap-2 xxl:gap-6 w-48 h-100 xxl:w-[622px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="25"
                  // height="25"
                  className="fill-current text-[#6E92FE] xxl:w-[70px] xxl:h-[70px] w-[25px] h-[25px] xxl:mt-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    filter="#6E92FE"
                  />
                </svg>
                <div>
                  <h1 className="font-jost break-normal font-semibold sm:text-[16px] xxl:text-[64px] text-[16px] text-start text-black">
                    Carefully designed
                  </h1>
                  <p className="xxl:text-[41px]">
                    Mucker plastered bugger all mate morish are.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="flex justify-between gap-2 xxl:gap-6 w-48 h-100 xxl:w-[622px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  className="fill-current text-[#4FE2AF] xxl:w-[70px] xxl:h-[70px] w-[25px] h-[25px] xxl:mt-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    filter="#6E92FE"
                  />
                </svg>
                <div>
                  <h1 className="font-jost break-normal font-bold sm:text-[16px] text-[16px] xxl:text-[64px] text-start text-black">
                    Choose a App
                  </h1>
                  <p className="xxl:text-[41px]">
                    Mucker plastered bugger all mate morish are.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="flex justify-between gap-2 xxl:gap-6 w-48 h-100 xxl:w-[622px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  className="fill-current text-[#6700DE] xxl:w-[70px] xxl:h-[70px] w-[25px] h-[25px] xxl:mt-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    filter="#6700DE"
                  />
                </svg>
                <div>
                  <h1 className="font-jost break-normal font-bold xxl:text-[64px] sm:text-[16px] text-[16px] text-start text-black">
                    User Interactive
                  </h1>
                  <p className="xxl:text-[41px]">
                    Mucker plastered bugger all mate morish are.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="flex justify-between gap-2 xxl:gap-6 w-48 h-100 xxl:w-[622px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  className="fill-current text-[#FF5C00] xxl:w-[70px] xxl:h-[70px] w-[25px] h-[25px] xxl:mt-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    filter="#FF5C00"
                  />
                </svg>
                <div>
                  <h1 className="font-jost break-normal font-bold xxl:text-[64px] sm:text-[16px] text-[16px] text-start text-black">
                    Seamless
                  </h1>
                  <p className="xxl:text-[41px]">
                    Mucker plastered bugger all mate morish are.
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.a
            href="/temppage"
              variants={fadeIn("up", "tween", 0.2, 1.5)}
              className={`${styles.nbDarkBtns} mt-8 xxl:my-[295px]`}
            >
              Learn More
            </motion.a>
          </div>
        </div>
        {/* // */}
        <div className="flex container mx-auto z-10">
          <motion.img
            variants={slideIn("right", "tween", 0.2, 1.5)}
            src={wllp_tablet}
            alt="Tablet Banner"
            className="absolute sm:h-[500px] h-[300px] xxl:h-[80%] justify-center items-center xxl:mt-[198px] sm:mt-12 mt-2 sm:top-0 top-1 sm:right-0 right-1 z-[10]"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default TrafficSection;
