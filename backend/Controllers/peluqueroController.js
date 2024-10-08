import Peluquero from "../models/PeluqueroSchema.js";
import Booking from "../models/BookingSchema.js";
export const updatePeluquero = async (req, res) => {
  const id = req.params.id;

  try {
    const updatePeluquero = await Peluquero.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Actualización de peluquero exitosa",
      data: updatePeluquero,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Actualización de peluquero fallida" });
  }
};

export const deletePeluquero = async (req, res) => {
  const id = req.params.id;

  try {
    await Peluquero.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "peluquero eliminado exitosamente",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al eliminar" });
  }
};

export const getSinglePeluquero = async (req, res) => {
  const id = req.params.id;

  try {
    const peluquero = await Peluquero.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "peluquero encontrado",
      data: peluquero,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "peluquero no encontrado" });
  }
};

export const getAllPeluqueros = async (req, res) => {
  try {
    const { query } = req.query;
    let peluqueros;

    if (query) {
      peluqueros = await Peluquero.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      peluqueros = await Peluquero.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "peluquero encontrado",
      data: peluqueros,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "peluquero no encontrado" });
  }
};

export const getPeluqueroProfile = async (req, res) => {
  const peluqueroId = req.userId;

  try {
    const peluquero = await Peluquero.findById(peluqueroId);

    if (!peluquero) {
      return res
        .status(404)
        .json({ success: false, message: "Peluquero no encontrado" });
    }

    const { password, ...rest } = peluquero._doc;
    const appointments = await Booking.find({ peluquero: peluqueroId });

    res
      .status(200)
      .json({ succes: true, message: "Usuario encontrado", data: { ...rest,appointments } });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Algo se rompió, intentalo de nuevo" });
  }
};
