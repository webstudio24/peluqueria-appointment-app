/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
const Profile = ({ peluqueroData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: peluqueroData?.name,
      email: peluqueroData?.email,
      phone: peluqueroData?.phone,
      bio: peluqueroData?.bio,
      gender: peluqueroData?.gender,
      specialization: peluqueroData?.specialization,
      ticketPrice: peluqueroData?.ticketPrice,
      qualifications: peluqueroData?.qualifications,
      experiences: peluqueroData?.experiences,
      timeSlots: peluqueroData?.timeSlots,
      about:  peluqueroData?.about,
      photo: peluqueroData?.photo,
    });
  }, [peluqueroData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    console.log(peluqueroData);

    try {
      const res = await fetch(`${BASE_URL}/peluqueros/${peluqueroData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }

      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // reusable function for adding item

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  //reusable input change function

  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //reusable function for deleting item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "Técnico en Peluqueria",
      university: "UPC",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const addExperience = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "Peluquero Senior",
      peluqueria: "Peluquería Ameguino",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };
  const addTimeSlot = (e) => {
    e.preventDefault();

    addItem("timeSlots", {
      day: "Sunday",
      startingTime: "10:00",
      endingTime: "04:30",
    });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Información del Perfil{" "}
      </h2>
      <form action="">
        <div className="mb-5">
          <p className="form_label">Nombre Completo*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="form_input"
            placeholder="Nombre Completo"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Email*</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            className="form_input"
            onChange={handleInputChange}
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Telefono*</p>
          <input
            type="number"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            className="form_input"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Biografáa*</p>
          <input
            type="text"
            name="bio"
            placeholder="Biografía"
            value={formData.bio}
            className="form_input"
            onChange={handleInputChange}
            maxLength={100}
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3  gap-5 mb-[30px]">
            <div>
              <p className="form_label">Género*</p>
              <select
                name="gender"
                className="form_input py-3.5"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Selecciona</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <p className="form_label">Especialización*</p>
              <select
                name="specialization"
                className="form_input py-3.5"
                value={formData.specialization}
                onChange={handleInputChange}
              >
                <option value="">Selecciona</option>
                <option value="peluquero">Peluquero</option>
                <option value="barbero">Barbero</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <p className="form_label">Precio de Corte:</p>
              <input
                type="number"
                placeholder="$4000"
                name="ticketPrice"
                className="form_input"
                value={formData.ticketPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form_label">Cualificaciones*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Fecha de inicio*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Fecha de Finalización*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Títulos*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Universidad*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Agregar Cualificación
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Experiencias*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Fecha de inicio*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Fecha de Finalización*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Posición*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Peluquería*</p>
                    <input
                      type="text"
                      name="peluqueria"
                      value={item.peluqueria}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addExperience}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Agregar Experiencia
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Horarios*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form_label">Día*</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form_input py-3.5"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    >
                      <option value="">Seleccionar</option>
                      <option value="saturday">Sabado</option>
                      <option value="sunday">Domingo</option>
                      <option value="monday">Lunes</option>
                      <option value="tuesday">Martes</option>
                      <option value="wednesday">Miércoles</option>
                      <option value="thursday">Jueves</option>
                      <option value="friday">Viernes</option>
                    </select>
                  </div>
                  <div>
                    <p className="form_label">Hora de inicio*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form_input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Hora de Finalización*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form_input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div
                    onClick={(e) => deleteTimeSlot(e, index)}
                    className="flex items-center"
                  >
                    <button className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlot}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Agregar horarios
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Sobre mí*</p>
          <textarea
            name="about"
            id=""
            rows={5}
            value={formData.about}
            placeholder="Escribí sobre vos"
            onChange={handleInputChange}
            className="form_input"
          ></textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-solid border-primaryColor flex items-center  justify-center">
              <img
                src={formData.photo}
                alt=""
                className="w-full rounded-full "
              />
            </figure>
          )}
          <div className="relative w-[160px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              accept=".jpg,.png"
              onChange={handleFileInputChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label
              htmlFor="customFile"
              className="absolute top-0 
                  left-0 w-full h-full flex 
                  items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer "
            >
              Seleccionar imagen
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
          >
            Actualizar Perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
