import express from 'express'
import { bookingConfirmation } from '../controllers/booking.js'


const router = express.Router()

router.post("/booking", bookingConfirmation)

export default router