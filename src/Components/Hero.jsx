import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    const common = {
      origin: "top",
      distance: "60px",
      duration: 2500,
      reset: true,
    };
    ScrollReveal().reveal(".home_content", {
      ...common,
      delay: 300,
    });

    ScrollReveal().reveal(".home_img", {
      ...common,
      delay: 500,
      scale: 0.5,
    });
  }, []);

  return (
    <section id="home" className="">
      <div className="container mt-16">
        {/* Glue-1 */}
        <div className="w-64 h-64 bg-[#FC7617] rounded-full blur-3xl -z-10 opacity-40 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        {/*end of Glue-1 */}
        {/* Glue-2 */}
        <div className="w-64 h-64 bg-[#FC7617] rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0"></div>
        {/*end of Glue-2 */}
        <div className="flex flex-col items-center lg:gap-5 gap-y-16 lg:flex-row">
          {/* content */}
          <div className=" w-full space-y-5 lg:w-1/2">
            <p className="text-[#545454] text-[1.9rem] leading-5 font-bold">
              Hi, I am
            </p>
            <h1 className="font-Jost">Muhammad Razaq</h1>
            <div className="flex flex-col gap-2 md:gap-4 sm:flex-row xl:pt-10 lg:pt-5">
              <button className="btn flex items-center gap-1">
                <span>Contact Me</span>
                <i class="ri-contacts-fill"></i>
              </button>
              <button className="btn btn_outline flex items-center gap-1">
                <span>Download CV</span>
                <i class="ri-download-2-line"></i>
              </button>
            </div>
            <div className="flex items-center gap-5 text-[1.5rem] lg:pt-10">
              <i className="ri-facebook-fill text-slate-300 hover:text-[#FC7617] duration-300 cursor-pointer border-slate-300 border-[2px] hover:border-[#FC7617] px-2 rounded-[1rem] hover:-translate-y-1"></i>
              <i className="ri-twitter-x-line text-slate-300 hover:text-[#FC7617] duration-300 cursor-pointer border-slate-300 border-[2px] hover:border-[#FC7617] px-2 rounded-[1rem] hover:-translate-y-1"></i>
              <i className="ri-instagram-line text-slate-300 hover:text-[#FC7617] duration-300 cursor-pointer border-slate-300 border-[2px] hover:border-[#FC7617] px-2 rounded-[1rem] hover:-translate-y-1"></i>
              <i className="ri-linkedin-fill text-slate-300 hover:text-[#FC7617] duration-300 cursor-pointer border-slate-300 border-[2px] hover:border-[#FC7617] px-2 rounded-[1rem] hover:-translate-y-1"></i>
            </div>
          </div>
          {/*end of content */}
          {/* image */}
          <div className="home_img w-full relative lg:w-1/2">
            <img src="./assets/myimg.png" alt="" />
            {/* leaf */}
            <div className="absolute -top-10 right-0 xl:top-5 opacity-50 animate-movingY">
              <i className="ri-javascript-line text-6xl text-[#FC7617]"></i>
            </div>
            {/* flower */}
            <div className="absolute bottom-0 left-0 xl:bottom-12 opacity-50 animate-rotating">
              <i className="ri-reactjs-line text-6xl text-[#FC7617]"></i>
            </div>
            {/* plant */}
            <div className="absolute -top-8 -left-5 opacity-50 hidden lg:block animate-scalingUp">
              <i class="ri-nodejs-line text-6xl text-[#FC7617]"></i>
            </div>
          </div>
          {/*end of image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
