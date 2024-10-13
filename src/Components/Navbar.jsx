import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`bg-[#0000001a] fixed right-0 left-0 w-full z-50 ${
        showBorder ? "border-b border-yellow-500" : ""
      }`}
    >
      <nav
        className={`container mx-auto p-[2rem] flex justify-between items-center h-20 sm:20`}
      >
        <div className="text-[#FC7617] md:text-3xl font-Lobster sm:text-2xl text-[1.6rem] ">
          Muhammad Razaq
        </div>
        {/* right side */}
        <div
          id="nav-menu"
          className={`absolute top-0 ${
            menu ? "left-[0]" : "left-[-100%]"
          } min-h-[80vh] w-full bg-orange-100/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-4 lg:flex-row list">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#popular" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#review" className="nav-link">
                Skill
              </a>
            </li>
            <li>
              <a href="#review" className="nav-link">
                Portfolio
              </a>
            </li>
            <div className="flex items-center gap-4">
              <button className="text-white outline-none bg-[#FC7617] md:py-3 sm:py-2 py-1.5 md:px-7 sm:px-5 px-4 text-[1.1rem] duration-300 font-semibold hover:bg-transparent hover:text-[#FC7617] border-[2px] hover:border-[#FC7617] rounded-[0.5rem]">
                Github
              </button>
            </div>
          </ul>
        </div>
        {/* end of right side */}
        {/* menu icon */}
        {/*for menu icon we use cdn.js-remixIcon */}
        <div
          onClick={() => setMenu(!menu)}
          className="text-xl sm:text-3xl text-[tomato] cursor-pointer z-50 lg:hidden flex"
        >
          <i
            class={`duration-300 ${
              menu ? "ri-close-large-line" : "ri-menu-4-line"
            }`}
          ></i>
        </div>
        {/*end of menu icon */}
      </nav>
    </header>
  );
};

export default Navbar;
