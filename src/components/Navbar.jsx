import logo from "../images/logo.svg";
import iconHamburger from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";
import { useState } from "react";

const contacts = ["Home", "About", "Contact", "Blog", "Careers"];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className="p-6 bg-Very-Light-Gray shdw1 fixed top-0 w-full z-[4000]">
        <div className="w-full md:m-auto max-w-[1500px] flex items-center justify-between md:gap-10 gap-0">
          <img src={logo} alt="logo" />

          <div className="md:flex items-center justify-center gap-7 hidden w-full">
            {contacts.map((contact, index) => (
              <a
                key={index}
                className="font-Public-Sans relative block text-md text-Grayish-Blue focus:text-Dark-Blue focus:after:contents-[''] focus:after:h-1 focus:after:absolute focus:after:-bottom-[34px] focus:after:w-full focus:after:block focus:after:bg-gradient-to-r focus:after:from-Lime-Green focus:after:to-Bright-Cyan focus:after:rounded-t font-medium transition-all"
                href="#"
              >
                {contact}
              </a>
            ))}
          </div>

          <button className="md:block hidden px-9 py-3 shdw transition-all text-sm font-semibold text-Light-Grayish-Blue w-[300px] m-auto font-Public-Sans bg-gradient-to-r from-Lime-Green to-Bright-Cyan rounded-full">
            Request Invite
          </button>

          <button className="md:hidden block" onClick={navbarHandler}>
            <img
              src={navbar ? iconClose : iconHamburger}
              alt={navbar ? "icon-close" : "icon-hamburger"}
            />
          </button>
        </div>
      </div>

      <div
        className={`${
          navbar ? "opacity-100" : "opacity-0 -translate-y-[1000px]"
        } fixed md:hidden block top-0 bottom-0 right-0 left-0 transition-all duration-500 backdrop-blur-sm bg-Dark-Blue bg-opacity-60 z-[3000]`}
      >
        <div
          className={`${
            navbar ? "opacity-100" : "opacity-0"
          } transition-all p-6 bg-Very-Light-Gray fixed top-20 rounded-lg gap-5 w-[90%] flex justify-center items-center flex-col left-[50%] duration-300 -translate-x-[50%]`}
        >
          {contacts.map((contact, index) => (
            <a
              key={index}
              className="font-Public-Sans hover:text-Link transition-all text-md text-Dark-Blue"
              href="#"
            >
              {contact}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
