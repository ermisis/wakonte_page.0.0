import styles from "../style";
import { wakonte_logo_wht } from "../assets";
import { useState } from "react";
import {addDoc, collection} from "firebase/firestore"
import { db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phone, setPhone] = useState('');
  const [errMsg, setErroMsg] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    const errMsg = "Kindly enter your Email..."
    e.preventDefault()
    if(email === '') {
      setErroMsg(errMsg)
      // console.log(errMsg)
      // alert(errMsg)
      return
    }
    const Users = collection(db, 'users')
    addDoc(Users, {fname, lname, email, country, countryCode, phone})
    .then(respnse => {
      navigate('/mainpage')
      console.log(respnse)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  return (
    <section className={`${styles.boxWidth} ${styles.flexCenter} bg-[#F1F1F1] h-screen`}>
      <div className="my-8 bg-white shadow-md rounded-2xl border-2 border-gray-300 xs:h-[510px] h-[845px] w-[842px] xxl:h-[1695px] xxl:w-[2342px] flex flex-col xs:flex-row">
        <div className="w-[100%] h-[70%] xs:w-[60%] xs:h-[100%] rounded-l-2xl flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col py-4 my-4 mx-auto w-72 xxl:w-[750px] mb-3">
            <label htmlFor="first" className="m-1 xxl:m-5 xxl:text-[38px]">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={fname}
              onChange={e => setFname(e.target.value)}
              className="outline-gray-300 border-2 rounded-md p-1 text-sm xxl:text-[45px] flex-1 mb-2 xxl:mb-4 bg-gray-200 xxl:py-4"
            />
            <label htmlFor="last" className="m-1 xxl:m-5 xxl:text-[38px]">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={lname}
              onChange={e => setLname(e.target.value)}
              className="outline-gray-300 border-2 rounded-md p-1 text-sm xxl:text-[45px] flex-1 mb-2 xxl:mb-4 bg-gray-200 xxl:py-4"
            />
            <p className="font-semibold xxl:text-[38px] md:text-[23px] sm:text-[18px] text-[18px] text-[#b15b5b]">{errMsg}</p>
            <label htmlFor="email" className="m-1 xxl:m-5 xxl:text-[38px]">
              Email Adress
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="outline-gray-300 border-2 rounded-md p-1 text-sm xxl:text-[45px] flex-1 mb-2 xxl:mb-4 bg-gray-200 xxl:py-4"
            />
            <label htmlFor="country" className="m-1 xxl:m-5 xxl:text-[38px]">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="outline-gray-300 border-2 rounded-md p-1 text-sm xxl:text-[45px] flex-1 mb-2 xxl:mb-4 bg-gray-200 xxl:py-4"
            />
            <label htmlFor="telephone" className="m-1 xxl:m-5 xxl:text-[38px]">
              Country Code
            </label>
            <input
              type="text"
              name="countryCode"
              value={countryCode}
              onChange={e => setCountryCode(e.target.value)}
              className="outline-gray-300 border-2 rounded-md p-1 text-sm xxl:text-[45px] flex-1 mb-5 xxl:mb-10 bg-gray-200 xxl:py-4"
            />
            <label htmlFor="telephone" className="m-1 xxl:m-5 xxl:text-[38px]">
              Telephone #
            </label>
            <input
              type="text"
              name="telephone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="outline-gray-300 border-2 rounded-md p-1 text-sm xxl:text-[45px] flex-1 mb-5 xxl:mb-10 bg-gray-200 xxl:py-4"
            />
            <button type="submit" className={`${styles.nbDarkBtns} ${styles.flexCenter} w-32 xxl:w-64 xxl:my-10`}>
              Submit
            </button>
          </form>
        </div>
        <div className="w-[100%] h-[30%] xs:w-[40%] xs:h-[100%] flex bg-black rounded-r-2xl justify-center items-center">
          <img
            className="object-contain mx-auto xxl:w-96"
            src={wakonte_logo_wht}
            alt="Wakonte Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Registration;
