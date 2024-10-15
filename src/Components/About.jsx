import React from "react";

const About = () => {
  return (
    <section>
      <div class="section-title">
        <h2 className="font-Lobster"> About </h2>
        <div class="underline"></div>
      </div>
      <div className="container about-center">
        {/* <!--about-img--> */}
        <article className="about-img">
          <img src="/assets/img.jpg" className="hero-photo" alt="about img" />
        </article>
        {/* <!--end of about-img--> */}
        {/* <!--about-info--> */}
        <article className="about-info">
          <div className="section-title about-title">
            <h2 className="font-bold">I'm Muhammad Razaq</h2>
            <div className="underline"></div>
          </div>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            repellendus debitis vero! Commodi eaque nesciunt reprehenderit sit,
            deleniti iste atque quia illum et voluptatum ipsam architecto ea
            sapiente iure mollitia illo! Excepturi possimus cum ipsum error
            aliquam sunt! Et, ipsam.
          </p>
          <a href="about.html" className="btn">
            about me
          </a>
        </article>
        {/* <!--end of about-info--> */}
      </div>
    </section>
  );
};

export default About;
