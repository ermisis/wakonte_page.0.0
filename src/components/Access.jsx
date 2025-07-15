import { Tab } from "@headlessui/react";
import { FcGoogle } from "react-icons/fc";
import styles from "../style";
import { wakonte_logo_wht } from "../assets";

const Access = () => (
  <section className={`${styles.boxWidth} ${styles.flexCenter}`}>
    <div className="my-16 flex flex-row bg-white shadow-2xl rounded-md h-[540px] w-[842px]">
      <Tab.Group
        onChange={(index) => {
          console.log("Changed selected tab to:", index);
        }}
      >
        <div className="relative w-[100px]">
          <Tab.List className="flex-grow text-center py-52 items-center justify-center">
            <Tab
              className="block
                    font-medium
                    text-xs
                    leading-tight
                    px-6
                    py-5
                    my-2
                    w-[100%]
                    hover:hover:bg-gray-100
                    focus:border-l-4 border-black"
            >
              Sign In
            </Tab>
            <Tab
              className="block
                    font-medium
                    text-xs
                    leading-tight
                    px-6
                    py-5
                    my-2
                    w-[100%]
                    hover:hover:bg-gray-100
                    focus:border-l-4 border-black"
            >
              Sign Up
            </Tab>
          </Tab.List>
        </div>
        <div className="bg-black h-[540px] py-28">
          <img
            src={wakonte_logo_wht}
            alt="Wakonte Logo"
            className="object-contain mx-4 my-28 "
          />
        </div>
        <div className="w-[65%]">
          <div>
            {/* Sign In Tab */}
            <Tab.Panels>
              <Tab.Panel>
                <form className="flex flex-col py-12 my-8 mx-auto w-72 mb-3">
                  <h2 className={`${styles.smallTextsBlk}`}>Sign In</h2>
                  <button className="flex border-b-gray-400 rounded-sm shadow-md p-3 items-center space-x-8 mb-4 mt-4 hover:bg-gray-200">
                    <FcGoogle className="flex justify-start items-start" />
                    <span className="flex">Sign in with Google</span>
                  </button>

                  <div className="flex flex-row justify-between items-center">
                    <div className="w-24 border border-gray-200"></div>
                    <span>or</span>
                    <div className="w-24 border border-gray-200"></div>
                  </div>
                  <label htmlFor="email" className="m-2">
                    Email Adress
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="outline-gray-500 border-2 rounded-md p-2 text-sm flex-1 mb-4"
                  />
                  <label htmlFor="password" className="m-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="outline-gray-500 border-2 rounded-md p-2 text-sm flex-1"
                  />
                  <button
                    type="button"
                    className="font-normal text-white bg-black hover:text-gray-200 mt-3 border-2 rounded-md p-2 text-sm flex-1 mb-2"
                  >
                    Sign In
                  </button>
                  <a
                    href={"/landing"}
                    className="font-normal text-black text-sm items-center justify-center flex"
                  >
                    Forgot Password?
                  </a>
                </form>
              </Tab.Panel>
              {/* Sign Up Tab */}
              <Tab.Panel>
                <form className="flex flex-col py-12 my-8 mx-auto w-72 mb-3">
                  <h2 className={`${styles.smallTextsBlk}`}>Sign Up</h2>
                  <a
                    href="#"
                    className="flex border-b-gray-400 rounded-sm shadow-md p-3 items-center space-x-8 mb-4 mt-4 hover:bg-gray-200"
                  >
                    <FcGoogle className="flex justify-start items-start" />
                    <span className="flex">Sign in with Google</span>
                  </a>
                  <div className="flex flex-row justify-between items-center">
                    <div className="w-24 border border-gray-200"></div>
                    <span>or</span>
                    <div className="w-24 border border-gray-200"></div>
                  </div>
                  <label htmlFor="email" className="m-2">
                    Email Adress
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="outline-gray-500 border-2 rounded-md p-2 text-sm flex-1 mb-4"
                  />
                  <label htmlFor="password" className="m-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="outline-gray-500 border-2 rounded-md p-2 text-sm flex-1"
                  />
                  <button className="font-normal text-white bg-black hover:text-gray-200 mt-3 border-2 rounded-md p-2 text-sm flex-1 mb-2">
                    Sign Up
                  </button>
                </form>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  </section>
);

export default Access;
