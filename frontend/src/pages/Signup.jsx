import signUpImg from "../assets/images/signup.gif";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import  {BASE_URL}  from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setpreviewURL] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  })

  const navigate = useNavigate()

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file)

    setpreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })


  }

  const submitHandler = async event => {

    event.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const { message } = await res.json()

      if (!res.ok) {
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate('/login')


    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/*IMG BOX */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signUpImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          {/*SIGN UP */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Crear una <span className="text-primaryColor">cuenta</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4  px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 
              text-headingColor placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4  px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 
              text-headingColor placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4  px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 
              text-headingColor placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Soy un:
                  <select
                    name="role"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="patient">Cliente</option>
                    <option value="peluquero">Peluquero</option>
                    {/* revisar value */}
                  </select>
                </label>
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Género:
                  <select
                    name="gender"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccionar</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                    <option value="other">Otro</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3 ">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-solid border-primaryColor flex items-center  justify-center">
                    <img
                      src={previewURL}
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
                disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  {loading ? <HashLoader size={35} color="#fff"/> :'Registrarse'}
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Iniciar Sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
