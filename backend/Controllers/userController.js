import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Peluquero from "../models/PeluqueroSchema.js";
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Actualización de usuario exitosa",
        data: updateUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Actualización de usuario fallida" });
  }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    try {
       await User.findByIdAndDelete(
        id,
      );
  
      res
        .status(200)
        .json({
          success: true,
          message: "Usuario eliminado exitosamente",
        
        });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Error al eliminar" });
    }
  };

  export const getSingleUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await User.findById(
        id,
      ).select("-password");
  
      res
        .status(200)
        .json({
          success: true,
          message: "Uusuario encontrado",
          data: user,
        });
    } catch (error) {
      res
        .status(404)
        .json({ success: false, message: "Usuario no encontrado" });
    }
  };
  


  export const getAllUsers = async (req, res) => {
  
    try {
      const users = await User.find({}).select("-password");
  
      res
        .status(200)
        .json({
          success: true,
          message: "Usuarios encontrados",
          data: users,
        });
    } catch (error) {
      res
        .status(404)
        .json({ success: false, message: "Usuarios no encontrado" });
    }
  };
  
  export const getUserProfile = async(req,res)=>{
      const userId = req.userId


      try {
        const user  = await User.findById(userId)

        if(!user){
          return res.status(404).json({success:false,message:'Usuario no encontrado'})
        }

        const {password,...rest} = user._doc


        res.status(200).json({succes:true, message:'Usuario encontrado',data:{...rest}})
      } catch (err) {
        res
        .status(500)
        .json({ success: false, message: "Algo se rompió, intentalo de nuevo" });
      }
  };


  export const getMyAppointments = async(req,res)=>{
    try {
      //paso -1 : retrieve appointments from booking for specirfic user
      const bookings = await Booking .find({user:req.userId})
      //paso -2 : extract doctor ids from appointments bookings
      const peluqueroIds = bookings.map(el=>el.peluquero.id)
       //paso -3 : retrieve doctors using doctors ids

       const peluqueros = await Peluquero.find({_id:{$in:peluqueroIds}}).select('-password')

       res.status(200).json({success:true,message:'Exitoso',data:peluqueros})
    } catch (err) {
      res.status(500).json({ success: false, message: 'Algo salió mal' })
    }
  }