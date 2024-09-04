import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import useGetProfile from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs.jsx";
import { useState } from "react";
import starIcon from "../../assets/images/star.png";
import PeluqueroAbout from "../../pages/Peluqueros/PeluqueroAbout.jsx";
import Profile from "./Profile.jsx";
import Appointments from "./Appointments.jsx";
const Dashboard = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/peluqueros/profile/me`
  );

  const [tab, setTab] = useState("overview");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px] ">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved == "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    Para poder confirmar su cuenta, por favor completar el
                    registro de su perfil. Nos contactaremos con usted a la
                    brevedad.
                  </div>
                </div>
              )}

              <div className="mt-8">
                {tab == "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px] ">
                        <img src={data?.photo} alt="" className="w-full" />
                      </figure>

                      <div>
                        <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                          {data.specialization}
                        </span>
                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                          {data.name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            <img src={starIcon} alt="" />
                            {data.averageRating}
                          </span>
                          <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            ({data.totalRatings})
                          </span>
                        </div>
                        <p className="text_par font-[15px] lg:max-w-[390px] leading-6">
                          {data?.bio}
                        </p>
                      </div>
                    </div>
                    <PeluqueroAbout
                      name={data.name}
                      about={data.about}
                      qualifications={data.qualifications}
                      experiences={data.experiences}
                    />
                  </div>
                )}
                {tab == "appointments" && (
                  <Appointments appointments={data.appointments} />
                )}
                {tab == "settings" && <Profile peluqueroData={data} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Dashboard;
