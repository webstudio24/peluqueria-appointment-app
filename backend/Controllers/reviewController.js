import Review  from "../models/ReviewSchema.js";
import Peluquero from "../models/PeluqueroSchema.js";



//get all reviews

export const getAllReviews = async(req,res)=>{
    try {
        const reviews = await Review.find({});;
        res.status(200).json({success:true,message:'Exitoso',data:reviews})

    } catch (err) {
        res.status(404).json({success:false,message:'No encontrado'})
    }
}


//create review 

export const createReview = async(req,res)=>{
    if(!req.body.peluquero) req.body.peluquero = req.params.peluqueroId
    if(!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)


    try {
        const savedReview = await newReview.save();


        await Peluquero.findByIdAndUpdate(req.body.peluquero, {
            $push:{reviews:savedReview._id}
        })

        res.status(200).json({success:true, message:'Creado exitosamente',data:savedReview})

    } catch (err) {
        res.status(500).json({success:false, message:err.message})
    }
}