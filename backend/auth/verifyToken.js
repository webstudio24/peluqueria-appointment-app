import jwt from "jsonwebtoken";
import Peluquero from "../models/PeluqueroSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  //get token from headers
  const authToken = req.headers.authorization;
  // check token is exitws

  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(401).json({
      success: false,
      message: "Sin token, autorizacion denegada",
    });
  }

  try {
    const token = authToken.split(" ")[1];
    //VERIFY TOKEN
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next(); //must be call the next function
  } catch (error) {
    if (error.name === "TokenExpired") {
      return res.status(401).json({ message: "Token expirado" });
    }

    return res.status(401).json({ success: false, message: "Token invalido" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  let user;

  const patient = await User.findById(userId);
  const peluquero = await Peluquero.findById(userId);

  if (patient) {
    user = patient;
  }

  if (peluquero) {
    user = peluquero;
  }

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "No estás autorizado" });
  }

  next();
};
