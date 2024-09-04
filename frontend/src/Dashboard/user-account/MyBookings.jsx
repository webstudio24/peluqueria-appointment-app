import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import PeluqueroCard from "../../components/Peluqueros/PeluqueroCard.jsx";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((peluquero) => (
            <PeluqueroCard key={peluquero._id} peluquero={peluquero} />
          ))}

          {!loading && !error && appointments.length == 0 && (
            <h2 className="mt-5 text-center  leading-7 text-[20px] font-semibold text-primaryColor">
              No tienes ningún turno todavía
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
