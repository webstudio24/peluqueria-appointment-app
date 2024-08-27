import User from "../models/UserSchema.js";
import Peluquero from "../models/PeluqueroSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "peluquero") {
      user = await Peluquero.findOne({ email });
    }

    //check if user exist

    if (user) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    if (role === "peluquero") {
      user = new Peluquero({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();
    res
      .status(200)
      .json({ success: true, message: "Usuario creado con exito" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear usuario, intentalo de vuelta",
    });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;

    const patient = await User.findOne({ email });
    const peluquero = await Peluquero.findOne({ email });

    if (patient) {
      user = patient;
    }

    if (peluquero) {
      user = peluquero;
    }

    //check if user exist

    if (!user) {
      return res.status(404).json({ message: "El usuario  no existe" });
    }

    // compare password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "credenciales invalidas" });
    }

    // get token
    const token = generateToken(user);

    const { password, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "Inicio de sesion exitosa",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Inicio de sesion fallida" });
  }
};

export default { register, login };
