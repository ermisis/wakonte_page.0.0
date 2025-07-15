import { motion } from "framer-motion";
import styles from "../style";
import { smallText, bigText } from "../constants";
import { bg_bk, bg_msc, bg_aud, bg_vid, bg_stry } from "../assets";
import { staggerContainer, textVariant } from "../utils/motion";

const CardSection = () => (
  <section
    className={`${styles.boxWidth} flex flex-col justify-center items-center xxl:h-[1280px] h-[vh] xs:h-[620px] xs:scrollbar-hide`}
    id="cards"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" sm:my-16 my-10"
    >
      <motion.h1
        variants={textVariant(1.1)}
        className={`${styles.headings2} ${styles.flexCenter} ml-8 sm:my-8 my-2`}
      >
        {bigText[1]}
      </motion.h1>
      <motion.p
        variants={textVariant(1.1)}
        className={`${styles.paragraph} ${styles.flexCenter} mx-8`}
      >
        {smallText[2]}
      </motion.p>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.flexCenter} flex-col sm:flex-row bg-[#F1F1F1] w-xs sm:w-xl xxl:w-screen xxl:h-4/5`}
    >
      <div className={styles.cardFrame}>
        <div className={styles.imgBox}>
          <img src={bg_bk} alt="Book" className="object-contain" />
        </div>
        <h5 className={styles.cardHeading}>Books</h5>
        <p className={styles.cardText}>
          Colorful, masterfully written African & Caribbean literature.
        </p>
      </div>
      <div className={styles.cardFrame}>
        <div className={styles.imgBox}>
          <img src={bg_msc} alt="Music" className="object-contain" />
        </div>
        <h5 className={styles.cardHeading}>Music</h5>
        <p className={styles.cardText}>
          The best of African & Caribbean Music.
        </p>
      </div>
      <div className={styles.cardFrame}>
        <div className={styles.imgBox}>
          <img
            src={bg_aud}
            alt="Podcasts & Audio Books"
            className="object-contain"
          />
        </div>
        <h5 className={styles.cardHeading}>
          Podcasts & <br /> Audio Books
        </h5>
        <p className={styles.cardText}>
          Mucker plastered bugger all mate morish are.
        </p>
      </div>
      <div className={styles.cardFrame}>
        <div className={styles.imgBox}>
          <img src={bg_vid} alt="Film & Tv" className="object-contain" />
        </div>
        <h5 className={styles.cardHeading}>Film & Tv</h5>
        <p className={styles.cardText}>
          Mucker plastered bugger all mate morish are.
        </p>
      </div>
      <div className={styles.cardFrame}>
        <div className={styles.imgBox}>
          <img
            src={bg_stry}
            alt="Magazines & Comic books"
            className="object-contain"
          />
        </div>
        <h5 className={styles.cardHeading}>
          Magazines & <br />
          Comic books
        </h5>
        <p className={styles.cardText}>
          Mucker plastered bugger all mate morish are.
        </p>
      </div>
    </motion.div>
  </section>
);

export default CardSection;
