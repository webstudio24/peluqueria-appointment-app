

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md ">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Precio del corte </p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          4000
        </span>
      </div>
      <div className="mt-[30px] ">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Horarios Laborales:
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Lunes
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              10:00 AM - 4:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Martes
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              11:00 AM - 4:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Miércoles
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              10:00 am - 3:00 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Reservar un turno</button>
    </div>
  );
};

export default SidePanel;
