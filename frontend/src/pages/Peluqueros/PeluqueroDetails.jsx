import { useState } from "react";

import starIcon from "../../assets/images/star.png";
import PeluqueroAbout from "./PeluqueroAbout";
import FeedBack from "./FeedBack";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData.jsx";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import { useParams } from "react-router-dom";

const PeluqueroDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const {
    data: peluquero,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/peluqueros/${id}`);

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
  } = peluquero;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" className="w-full rounded-2xl" />
                </figure>

                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor px-6 py-1 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="" />
                      {averageRating}
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      ({totalRating})
                    </span>
                  </div>

                  <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[70px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7  text-headingColor font-semibold`}
                >
                  Saber más
                </button>

                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7  text-headingColor font-semibold`}
                >
                  Opiniones
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <PeluqueroAbout
                    name={name}
                    about={about}
                    specialization={specialization}
                    experiences={experiences}
                    qualifications={qualifications}
                  />
                )}

                {tab === "feedback" && (
                  <FeedBack reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>

            <div>
              <SidePanel
                peluqueroId={peluquero._id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PeluqueroDetails;
