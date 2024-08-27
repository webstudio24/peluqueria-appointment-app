import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/*ABOUT IMG */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} className="rounded-3xl" alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/*ABOUT CONTENT */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Orgullosos de nuestro trabajo</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem impedit, nesciunt, iste voluptatibus quo in eveniet
              laborum quos commodi obcaecati sit, perferendis neque blanditiis
              aliquam.
            </p>
            <p className="text__para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, saepe ipsum necessitatibus sunt error corporis nihil
              nesciunt distinctio amet unde quas expedita quia optio impedit
              nostrum? Aliquam temporibus beatae molestiae.
            </p>
            <Link to="/about">
              <button className="btn">Ver más</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  
};

export default About;
