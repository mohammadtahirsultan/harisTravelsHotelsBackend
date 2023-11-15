import express from 'express'
import { Destinations, countries, facilities, facilityGroups, getAllHotels, rooms, searchHotels } from '../controllers/hotels.js'


const router = express.Router()


router.get("/hotels", getAllHotels)
router.get("/singlehotel", searchHotels)
router.get("/countries", countries)
router.get("/destinations", Destinations)
router.get("/facilities", facilities)
router.get("/facilitygroups", facilityGroups)
router.get("/rooms", rooms)



export default router