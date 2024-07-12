import React, { useState } from "react";
// import { TiThMenu } from "react-icons/ti";
// import { IoMdCloseCircle } from "react-icons/io";

import img from "../../assets/profile-about.webp";
const Header = () => {
  const [closeButtonDekhineConditon, setcloseButtonDekhineConditon] =
    useState(false);
  const handleClick = () => {
    setcloseButtonDekhineConditon(!closeButtonDekhineConditon);
  };

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Blog",
    "Contact",
  ];
  return (
    <header className="w-full md:h-[70px] h-[65px] sticky backdrop-blur-sm backdrop-brightness-100 bg-white/40 top-0 z-[999] shadow-md md:leading-[70px] leading-[65px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center justify-center">
              <img src={img} alt="" className="h-8 w-8 rounded-full" />
            </div>
            <div className="leading-[20px]">
              <h3 className="text-[21px] md:text-[25px] font-bold text-smallTextColor">
                Sudip
              </h3>
            </div>
          </div>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <li className="font-poppins font-semibold cursor-pointer text-[16px] mr-10">
              <a href="/home" className="text-smallTextColor font-semibold">
                Home
              </a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] mr-10">
              <a href="/about" className="text-smallTextColor font-semibold">
                About
              </a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] mr-10">
              <a href="/services" className="text-smallTextColor font-semibold">
                Services
              </a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] mr-10">
              <a href="/contact" className="text-smallTextColor font-semibold">
                Contact
              </a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] mr-0">
              <a href="/blog" className="text-smallTextColor font-semibold">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <div className="sm:hidden mr-8 " onClick={handleClick}>
          {closeButtonDekhineConditon ? <IoMdCloseCircle /> : <TiThMenu />}
        </div>
        {closeButtonDekhineConditon ? (
          <div className="bg-violet-800 text-white absolute right-3 top-6 opfont-sans font-semibold text-lg px-5 py-5 rounded-lg">
            <div>Home</div>
            <div>About</div>
            <div>Skill</div>
            <div>Conatct</div>
          </div>
        ) : null}
      </div>
      {navLinks.map((eutanavlink) => {
        return <div>{eutanavlink}</div>;
      })}
    </header>
  );
};

export default Header;
