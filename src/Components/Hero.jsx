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
    <section id="home">
      <div className="container">
        {/* Glue-1 */}
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        {/*end of Glue-1 */}
        {/* Glue-2 */}
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0"></div>
        {/*end of Glue-2 */}
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* content */}
          <div className="home_content w-full space-y-5 lg:w-1/2">
            <h1>
              <span className="text-yellow-500">Plants </span>make a <br />{" "}
              positive <span className="text-yellow-500"> impact</span> on
              <br />
              your environment
            </h1>
            <p className="text-slate-300 font-Lobster">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              tempora, at deserunt ducimus ullam voluptates quas temporibus nam
              dolorem odit?
            </p>
            <div className="flex flex-col gap-2 md:gap-4 sm:flex-row xl:pt-10 lg:pt-5">
              <button className="btn">
                <span>Shop now</span>
                <i class="ri-leaf-line"></i>
              </button>
              <button className="btn btn_outline">
                <span>Know more</span>
                <i class="ri-leaf-line"></i>
              </button>
            </div>
            <p className="text-xs font-Lobster text-slate-300">
              You will get 30 days free trial.
            </p>
            <div className="flex items-center gap-5 text-lg lg:pt-10">
              <i className="ri-facebook-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
              <i className="ri-twitter-x-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
              <i className="ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
              <i className="ri-linkedin-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </div>
          </div>
          {/*end of content */}
          {/* image */}
          <div className="home_img w-full relative lg:w-1/2">
            <img src="./assets/home.png" alt="" />
            {/* leaf */}
            <div className="absolute -top-10 right-0 xl:top-5 opacity-30 animate-movingY">
              <i className="ri-leaf-line text-6xl text-yellow-500 "></i>
            </div>
            {/* flower */}
            <div className="absolute bottom-0 left-0 xl:bottom-12 opacity-30 animate-rotating">
              <i className="ri-flower-line text-6xl text-yellow-500"></i>
            </div>
            {/* plant */}
            <div className="absolute -top-8 -left-5 opacity-30 hidden lg:block animate-scalingUp">
              <i className="ri-plant-line text-6xl text-yellow-500"></i>
            </div>
          </div>
          {/*end of image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
