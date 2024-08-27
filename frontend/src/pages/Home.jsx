import React from "react";
import heroImg01 from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroImg03 from "../assets/images/hero-img03.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-image.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import featureImg from "../assets/images/feature-img.jpg";
import PeluquerosList from "../components/Peluqueros/PeluquerosList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/*HERO SECTION*/}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/*HERO CONTENT */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    Te ayudamos a mejorar tu imagen
                  </h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Incidunt architecto sit laborum! Assumenda, voluptate
                    pariatur necessitatibus porro dicta veritatis culpa soluta
                    ducimus eos a at, sunt magni, quas vero itaque. Suscipit
                    dolores qui quae magni possimus commodi nobis quia
                    reprehenderit quod! Commodi consequuntur ipsam eaque!
                  </p>
                  <button className="btn">Sacar un turno</button>
                </div>

                {/*HERO COUNTER */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Años de experiencia</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      5+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Sucursales</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clientes satisfechos</p>
                  </div>
                </div>
              </div>
              {/*HERO CONTENT */}

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img
                    className="w-full rounded-3xl"
                    src={heroImg01}
                    alt="Hero Image"
                  />
                </div>

                <div className="mt-[30px]">
                  <img
                    src={heroImg02}
                    alt=""
                    className="w-full rounded-3xl mb-[30px]"
                  />
                  <img src={heroImg03} alt="" className="w-full  rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*HERO SECTION end*/}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Entregando el mejor servicio de barbería
              </h2>
              <p className="text__para text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                iure. Ab, quam doloribus expedita ducimus adipisci aut ipsum
                nostrum!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Buscar un peluquero
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur eveniet sapiente vitae quis et sit!
                  </p>
                  <Link
                    to="/peluqueros"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Buscar una sucursal
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur eveniet sapiente vitae quis et sit!
                  </p>
                  <Link
                    to="/peluqueros"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Agendar un turno
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur eveniet sapiente vitae quis et sit!
                  </p>
                  <Link
                    to="/peluqueros"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />

        {/*SERVICES SECTION START*/}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center ">Nuestros servicios</h2>
              <p className="text__para text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam cumque magni minima sapiente ad id fugiat minus neque.
              </p>
            </div>
            <ServiceList />
          </div>
        </section>

        {/*SERVICES SECTION END*/}

        {/*FEATURE SECTION*/}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              {/*FEATURE content*/}
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  Obtener asesoramiento virtual <br /> en cualquier momento
                </h2>
                <ul className="pl-4">
                  <li className="text__para">1. Horarios para un turno</li>
                  <li className="text__para">2. Agendar un turno</li>
                  <li className="text__para">
                    3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores dicta quisquam doloribus debitis rerum impedit,
                    eligendi laboriosam sint expedita doloremque, neque, animi
                    ipsam.
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn">Ver más</button>
                </Link>
              </div>
              {/*FEATURE IMG */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={featureImg} className="w-3/4 rounded-3xl" alt="" />

                <div className="flex items-center justify-between"></div>
              </div>
            </div>
          </div>
        </section>
        {/*FEATURE SECTION END*/}
        {/*OUR GREAT BARBERS*/}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center ">
                Nuestros grandes peluqueros
              </h2>
              <p className="text__para text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam cumque magni minima sapiente ad id fugiat minus neque.
              </p>
            </div>
            <PeluquerosList />
          </div>
        </section>

        {/*FAQ SECTION*/}
        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="w-1/2 hidden md:block">
                <img src={faqImg} alt="" className="rounded-3xl" />
              </div>

              <div className="w-full md:w-1/2">
                  <h2 className="heading">Preguntas frecuentes de nuestros clientes</h2>
                  <FaqList />
              </div>
            </div>
          </div>
        </section>
        {/*FAQ SECTION END*/}
        {/*TESTIMONIAL*/}
        <section>
          <div className="container">
          <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center ">
               ¿Qué dicen nuestros clientes?
              </h2>
              <p className="text__para text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam cumque magni minima sapiente ad id fugiat minus neque.
              </p>
            </div>

            <Testimonial/>
          </div>
        </section>
        {/*TESTIMONIAL END*/}

        
      </>
    </>
  );
};

export default Home;
