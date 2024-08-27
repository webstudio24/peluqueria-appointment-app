import mongoose from "mongoose";
import Peluquero from "./PeluqueroSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    peluquero: {
      type: mongoose.Types.ObjectId,
      ref: "Peluquero",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);



reviewSchema.pre(/^find/, function (next) {
    this.populate({
      path:'user',
      select:'name photo'

    })

    next();
})

reviewSchema.statics.calcAverageRating = async function (peluqueroId) {
 //this point the current review
  const stats = await this.aggregate([{
    $match:{peluquero:peluqueroId}
  }, {
    $group:{
      _id:"$peluquero",
      numOfRating:{$sum:1}, 
      avgRating:{$avg:"$rating"}
    }
  }])

  await Peluquero.findByIdAndUpdate(peluqueroId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  })
  console.log(stats)
  
}


reviewSchema.post('save', function () {
  this.constructor.calcAverageRating(this.peluquero)
});

export default mongoose.model("Review", reviewSchema);