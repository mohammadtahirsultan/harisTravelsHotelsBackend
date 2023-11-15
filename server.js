import express from 'express'
import cors from 'cors'
import getHotelDataRouter from './routes/hotels.js';
import hotelAvailabilityRouter from './routes/hotelAvailability.js';
import bookingRouter from './routes/booking.js';
import dotenv from "dotenv"
import connectDB from './database/db.js';

const app = express();
const port = 3001;


// Using MiddleWares 
dotenv.config({
    path: "./config/config.env"
})
connectDB()
app.use(express.json());
app.use(cors())
app.use(express.json())
app.use(getHotelDataRouter)
app.use(hotelAvailabilityRouter)
app.use(bookingRouter)

// console.log(process.env.apiKey)
// Listening Server 
app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
