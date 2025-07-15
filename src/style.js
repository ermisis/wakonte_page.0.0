const styles = {
    boxWidth: "w-xs sm:w-xl w-full",
    imgBox: "flex container justify-center itmes-center h-12 w-12 xxl:h-[25%] xxl:w-[25%] xxl:mt-[65px]",
    cardFrame: "flex flex-col items-center justify-center bg-white sm:w-[14%] sm:h-[240px] xxl:w-[17%] xxl:h-[635px] w-[50%] h-[210px] m-8 p-4 rounded-xl xxl:rounded-3xl",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "xs:px-20 xxl:px-24 px-6",
    paddingY: "xs:py-16 xxl:py-16 py-6",
    padding: "xs:px-16 px-6 xs:py-12 py-4",

    marginX: "xs:mx-16 xxl:mx-[8%] mx-6",
    marginY: "xs:my-16 my-6",

    // Button groups
    //Rounded outline 
    nbOutlinBtn: "font-jost inline-block font-normal text[14px] xs:text-[16px] xs:px-6 xs:py-2 xxl:text-[40px] xxl:px-20 xxl:py-4 px-4 py-2 border-2 border-gray-800 text-black-500 font-medium text-xs leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out",
    //Rounded Dark
    nbDarkBtns: "font-jost inline-block font-normal sm:text-[16px] text-[21px] xxl:text-[42px] px-6 py-2.5 xxl:px-8 xxl:py-4 bg-gray-800 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out",
    //Rectangular outline 
    mpRectOutlinBtn: "font-jost inline-block font-normal text[16px] xs:text-[16px] xs:px-6 xs:py-2 xxl:text-[38px] xxl:px-10 xxl:py-6 px-6 py-2 border-2 border-gray-800 text-black-500 leading-tight rounded-xl hover:bg-black hover:bg-opacity-5 outline-gray-400 focus:ring-0 transition duration-150 ease-in-out",
    //Rectangular Dark
    mpRectDarkBtn: "font-jost inline-block font-normal text[16px] xs:text-[16px] xs:px-6 xs:py-2 xxl:text-[38px] xxl:px-10 xxl:py-6 px-6 py-2.5 bg-gray-800 text-white leading-tight rounded-xl shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out",

    //NavBar Fonts
    nbFonts: "font-jost font-normal text[25px] leading[20px] text-black",

    
    cardHeading: "flex items-center m-[4px] p-[8px] xxl:mx-[38px] xxl:pt-[44px] font-semibold text-[14px] xxl:text-[48px]",
    cardText: "font-jost flex justify-center items-center text-[13px] m-[4px] p-[8px] xxl:text-[38px] xxl:mx-[28px] xxl:p-[8px] xxl:mt-[78px] text-center break-normal text-[#696969]",
    trafficHeading:
        "font-jost font-semibold xxl:text-[155px] md:text-[38px] sm:text-[21px] text-[28px] xxl:leading-[180px] sm:leading-[50px] leading-[86px] text-black",
    smallTexts:
        "font-normal lg:text-[26px] md:text-[23px] sm:text-[18px] text-[18px] lg:leading-[158.4px] md:leading-[106.4px] sm:leading-[86.4px] leading-[95px] text-[#707070]",
    trafficText:
        "font-jost font-semibold xxl:text-[78px] md:text-[22px] sm:text-[16px] text-[18px] lg:leading-[38px] md:leading-[26.4px] sm:leading-[26.4px] leading-[44px] text-black-400",
    cardText_sm:
        "font-jost font-normal lg:text-[26px] md:text-[26px] sm:text-[26px] text-[26px] lg:leading-[158.4px] md:leading-[26.4px] sm:leading-[26.4px] leading-[26.4px] text-[#707070]",
    cardText_bg:
        "font-jost font-bold lg:text-[80px] md:text-[60px] sm:text-[40px] text-[34px] lg:leading-[100px] md:leading-[80px] sm:leading-[60px] leading-[40px] text-black",
    headings2: "font-jost font-semibold xs:text-[55px] xxl:text-[198px] text-[38px] text-black xs:leading-[58.8px] xxl:leading-[168px] leading-[46.8px]",
    paragraph: "font-jost font-normal xs:text-start xs:text-[18px] xxl:text-[62px] text-[21px] xxl:my-10 text-black leading-[30.8px] xxl:leading-[82px]",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;