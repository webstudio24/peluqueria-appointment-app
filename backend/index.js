import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import peluqueroRoute from './Routes/peluquero.js';
import reviewRoute from './Routes/review.js';


dotenv.config()

const app =   express()
const port = process.env.PORT || 8000


const corsOptions = {
    origin: true,
   
}


app.get('/', (req,res)=>{
    res.send('Api corriendo')
})

//database connection
mongoose.set('strictQuery', false);
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
          
        });
        console.log('Mongo DB databse is conected');
        
    }
    catch(err){
        console.log(err);
    }
}


//MIDDLEWARES

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);//domain/api/v1/register
app.use('/api/v1/users', userRoute);
app.use('/api/v1/peluqueros', peluqueroRoute);
app.use('/api/v1/reviews', reviewRoute);

app.listen(port, ()=>{
    connectDB();
    console.log('Server is runnig on port ' + port);
    
})




