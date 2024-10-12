import React from "react";

const MobileNavbar = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`w-[100vw] h-[100vh] fixed left-0 top-0 z-50 shadow-lg duration-500 bg-[#0000004d] ${
        showMenu ? " " : " "
      }`}
    >
      <div className="w-[60vw] h-[100vh] p-[2rem] bg-gray-700">
        <div className="flex justify-between items-center ">
          <h1 className="cursor-pointer font-semibold font-sans text-[tomato] md:text-3xl sm:text-2xl text-[1.3rem] leading-7">
            Muhammad Razaq
          </h1>
          <button>
            <i
              className="ri-close-large-line sm:text-[3rem] text-[2rem]"
              onClick={toggleMenu}
            ></i>
          </button>
        </div>
        <ul className="lg:flex items-center gap-[0.5rem] hidden list">
          <li className="">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skill</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
