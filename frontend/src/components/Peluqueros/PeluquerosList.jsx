import { peluqueros } from "../../assets/data/peluqueros";
import PeluquerosCard from "./PeluqueroCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData.jsx";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const PeluquerosList = () => {

  const {data: peluqueros, loading, error } = useFetchData(`${BASE_URL}/peluqueros`)
  return (
    <>
    {loading && <Loader />}
    {error && <Error />}
     {!loading && !error && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {peluqueros.map(peluquero => (
          <PeluquerosCard key={peluquero._id} peluquero={peluquero} />
        ))}
      </div>}
    </>
  );
};

export default PeluquerosList;
