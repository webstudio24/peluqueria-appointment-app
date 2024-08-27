import { formateDate } from "../../utils/formateDate";

const PeluqueroAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Sobre
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Díaz
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptate, adipisci, numquam accusantium minus ab sint exercitationem
          porro amet cumque odio ipsa, pariatur consequatur blanditiis mollitia
          omnis enim aspernatur at hic? Accusamus ipsam maiores, corporis quis
          ab nulla doloremque, cum libero rem possimus repellat officiis dicta
          quidem, nemo reprehenderit blanditiis.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Educación
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
              {formateDate("03-05-2012")} - {formateDate("03-05-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Curso de Peluquería Profesional
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
                Barber Córdoba
              </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate("03-05-2010")} - {formateDate("03-06-2012")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
              Curso de Barbero Profesional
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
            Barber Córdoba
              </p>
          </li>
          
        </ul>
      </div>


      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experiencia
        </h3>
        <ul className="grid sm:grid-cols-2  gap-[30px] pt-4 md:p-5 ">
            <li className="p-4 rounded bg-[#fff9ea] ">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("03-05-2010")} - {formateDate("02-28-2012")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Barbera
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                Barbería Córdoba
              </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea] ">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("03-05-2010")} - {formateDate("02-28-2012")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Barbera
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                Barbería Córdoba
              </p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default PeluqueroAbout;
