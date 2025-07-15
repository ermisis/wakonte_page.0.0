"use client";

import { motion } from "framer-motion";

import styles from "../style";
import { slideIn, staggerContainer } from "../utils/motion";
import Navbar from "../components/Navbar";

export default function TempPage() {
  return (
    <>
      <Navbar />
      <section className="relative flex sm:h-[400px] py-[10%] h-[5%] bg-gradient-to-r from-[#FEFEFE] to-[#E1E2E2] w-xs sm:w-xl xs:scrollbar-hide justify-center items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth}"flex my-[10%] h-[100%] w-[100%]`}
        >
          <motion.p
            variants={slideIn("down", "tween", 0.2, 1)}
            className={`${styles.headings2}flex py-8 justify-center items-center break-words font-bold text-center text-black`}
          >
            Thank you for signing in <br></br> get ready to Explore!
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
