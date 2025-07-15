import { motion } from "framer-motion";
import styles from "../style";
import { bgImgs, smallText } from "../constants";
import {
  google_play_white,
  apple,
  arrow_right_short,
  iphone_blk,
  iphone_wht,
} from "../assets";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
  textContainer,
} from "../utils/motion";

const Hero = () => (
  <section
    id="mainpage"
    className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX} xxl:h-screen xs:scrollbar-hide`}
  >
    <img
      src={bgImgs[0].img}
      alt="Hero Banner"
      className="absolute xs:max-w-md xs:mx-auto xxl:max-w-screen-xxl xxl:h-[100%] object-contain top-0 right-0 invisible lg:visible"
    />
    {/* Welcome to Wakonte Div */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.flexStart} flex-col xs:mx-28 px-6 xxl:w-[50%]`}
    >
      <div className="flex flex-row items-start justify-start my-[50px] xxl:my-[15px] mb-2">
        <motion.h1
          variants={textVariant(1.1)}
          className="font-semibold text-jost text-dimWhite py-4 xxl:mb-20 justify-start text-[20px] xs:text-[26px] xxl:text-[76px]"
        >
          {smallText[0]}
        </motion.h1>
      </div>
      <div className="flex flex-row justify-start items-center py-2">
        {/* <h1 className={`${styles.headings2}`}>{bigText[0]}</h1> */}
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.headings2}`}
        >
          Greatness awaits <br />
          excitement.
        </motion.h1>
      </div>
      <div>
        <motion.p
          variants={slideIn("up", "tween", 0.2, 1)}
          className={styles.paragraph}
        >
          Engage with confam African and Caribbean stories <br />
          through literature, music, podcasts, film and TV.
        </motion.p>
      </div>
      <div className="flex space-x-4 xxl:space-x-8 justify-center items-center py-8 xxl:py-14 xxl:mb-20">
        <motion.button
          variants={slideIn("up", "tween", 0.2, 0.5)}
          type="button"
          className={`${styles.mpRectDarkBtn} 
            flex items-center h-fit gap-2`}
        >
          <img
            src={google_play_white}
            alt="google play white"
            className="w-[12px] h-[12px] xxl:w-[48px] xxl:h-[48px] object-contain"
          />
          Soon on Android
        </motion.button>
        <motion.button
          variants={slideIn("up", "tween", 0.2, 0.5)}
          type="button"
          className={`${styles.mpRectOutlinBtn} 
            flex items-center h-fit gap-2`}
        >
          <img
            src={apple}
            alt="apple"
            className="w-[14px] h-[14px] xxl:w-[48px] xxl:h-[48px] object-contain"
          />
          Soon on iOs
        </motion.button>
      </div>
      <motion.a
        href="/temppage"
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={`${styles.nbOutlinBtn} ${styles.flexStart} my-16 xxl:my-4 xxl:mb-10 text-[#707070]`}
      >
        <span className={styles}>Be the first to know when we launch</span>
        <img
          src={arrow_right_short}
          alt="Arrow right"
          className="w-14 h-4 xxl:w-64 xxl:h-12 -mr-6"
        />
      </motion.a>
    </motion.div>
    {/* Double Iphone Div */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-row space-x-52 justify-center mx-16 xs:mx-28 xxl:my-[180px] xxl:mt-60 my-8 px-2 relative z-10"
    >
      <motion.img
        variants={fadeIn("left", "tween", 0.2, 1)}
        src={iphone_wht}
        alt="white iphone"
        className="h-[400px] xs:h-[520px] xxl:h-[1340px] mr-32 xxl:mr-[338px] xxl:mt-44 max-w-[100%] max-h-[100%] float-left z-[1]"
      />
      <motion.img
        variants={fadeIn("left", "tween", 0.5, 1)}
        src={iphone_blk}
        alt="white iphone"
        className="absolute xs:h-[520px] xxl:h-[1340px] xxl:mt-44 max-w-[100%] max-h-[100%] float-right"
      />
    </motion.div>
  </section>
);

export default Hero;
