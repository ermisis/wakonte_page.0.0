import styles from "../style";
import { circle_logo, right_footer_banner, left_footer_banner, people1, people2, people3 } from "../assets";

const MemberSection = () => (
  <section className="relative h-[vh] w-xs sm:w-xl xxl:h-[2180px] xs:scrollbar-hide">
    <div className="ralative flex justify-between space-x-4 gap-4 bg-black h-[238px] xxl:h-[598px]">
      <div className="flex-none justify-start">
        <img
          src={left_footer_banner}
          alt="Left Footer Banner"
          className="relative h-[100%] w-[65%] xs:w-[100%] float-left items-start"
        />
      </div>
      <div className="absolute mx-10 px-10 w-[100%] items-center justify-center">
        <img
          src={circle_logo}
          alt="wakonte logo"
          className="flex containter mx-auto my-2 py-2 xxl:object-contain xxl:w-[200px] xxl:h-[200px] xxl:my-24"
        />
        <p className="break-words font-normal sm:mt-[8px] mt-[16px] xxl:text-[38px] sm:text-[16px] text-[14px] text-center text-[#FFFFFF]">
          He nicked it tickety boo harry the cras bargy chap mush <br></br>
          spiffing spend a penny the full monty burke butty.
        </p>
      </div>
      <div className="flex-none justify-end items-end">
        <img
          src={right_footer_banner}
          alt="Right Footer Banner"
          className="ralative h-[100%] w-[65%] xs:w-[100%] float-left items-end"
        />
      </div>
    </div>
    <div className="ralative flex flex-col container mx-auto mt-8 xxl:my-24 justify-center items-center gap-4 h-[vh]">
      <h1 className={styles.trafficHeading}>Meet our Team Members</h1>
      <p className="font-jost font-normal xxl:mb-20 xxl:text-[58px] md:text-[18px] sm:text-[16px] text-[16px] text-black">
        Different layouts and styles for team sections.
      </p>
      <div className="relative grid sm:grid-cols-4 grid-flow-row gap-8 xxl:gap-20 justify-between items-center xxl:mt-20 m-4 p-4">
        <div className="w-48 h-64 xxl:w-[580px] xxl:h-[580px] flex flex-col">
          <img className="w-auto rounded-t-xl" src={people1} alt="avatar" />
          <div className="text-center flex flex-col p-2">
            <span className="text-jost font-bold xxl:text-[65px]">Name Surname</span>
            <span className="text-xs text-jost xxl:my-6 xxl:text-[48px]">CEO-Founder</span>
          </div>
        </div>
        <div className="w-48 h-64 xxl:w-[580px] xxl:h-[580px] flex flex-col">
          <img className="w-auto rounded-t-xl" src={people2} alt="avatar" />
          <div className="text-center flex flex-col p-2">
            <span className="text-jost font-bold xxl:text-[65px]">Name Surname</span>
            <span className="text-xs text-jost xxl:my-6 xxl:text-[48px]">CEO-Founder</span>
          </div>
        </div>
        <div className="w-48 h-64 xxl:w-[580px] xxl:h-[580px] flex flex-col">
          <img className="w-auto rounded-t-xl" src={people1} alt="avatar" />
          <div className="text-center flex flex-col p-2">
            <span className="text-jost font-bold xxl:text-[65px]">Name Surname</span>
            <span className="text-xs text-jost xxl:my-6 xxl:text-[48px]">CEO-Founder</span>
          </div>
        </div>
        <div className="w-48 h-64 xxl:w-[580px] xxl:h-[580px] flex flex-col">
          <img className="w-auto rounded-t-xl" src={people3} alt="avatar" />
          <div className="text-center flex flex-col p-2">
            <span className="text-jost font-bold xxl:text-[65px]">Name Surname</span>
            <span className="text-xs text-jost xxl:my-6 xxl:text-[48px]">CEO-Founder</span>
          </div>
        </div>
      </div>
      <button className={`${styles.nbOutlinBtn} mb-8 xxl:mt-64`}>View all members</button>
    </div>
  </section>
);


export default MemberSection;