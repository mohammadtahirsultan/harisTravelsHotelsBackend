import express from 'express'
import {  checkAvailabilityByHotelCode, checkAvailabilityFilters } from '../controllers/hotelAvailability.js'


const router = express.Router()

router.post("/hotels", checkAvailabilityByHotelCode)
router.post("/filter", checkAvailabilityFilters)

export default router