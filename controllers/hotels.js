
import axios from 'axios'
import CryptoJS from 'crypto-js'
import dotenv from "dotenv"
import Hotel from '../models/hotels.js'


// Using MiddleWares 
dotenv.config({
    path: "../config/config.env"
})


const hotelBedUrl = 'https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/?from=162897&to=162900'
// const singleHotelDetailsURL = 'https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/1067/details'
// const searchHotelsAPI = `https://api.test.hotelbeds.com/hotel-content-api/1.0/locations/${cityCode}/hotels`

const countryURL = "https://api.test.hotelbeds.com/hotel-content-api/1.0/locations/countries?fields=description&language=ENG&from=1&to=2"

const destinationURL = "https://api.test.hotelbeds.com/hotel-content-api/1.0/locations/destinations?fields=all&countryCodes=AE,US&language=ENG&from=1&to=100"

const facilityGroupsURL = "https://api.test.hotelbeds.com/hotel-content-api/1.0/types/facilitygroups?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=True"

const facilitiesURL = "https://api.test.hotelbeds.com/hotel-content-api/1.0/types/facilities?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=True"

const roomsURL = "https://api.test.hotelbeds.com/hotel-content-api/1.0/types/rooms?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=True"



// const apiKey = process.env.apiKey
// const apiSecret = process.env.apiSecret
const apiKey = "7adff7217cbcb01a245bb29dc0d08c8e"
const apiSecret = "91fec9925b"
// const apiKey = "db96ccfed6c2f19db10a3c60c8a3fd95"
// const apiSecret = "e7b20ba748"

const timestamp = Math.floor(Date.now() / 1000);

const dataToHash = apiKey + apiSecret + timestamp;
const xSignature = CryptoJS.SHA256(dataToHash).toString(CryptoJS.enc.Hex);


export const getAllHotels = async (req, res) => {
    try {

        const { data } = await axios.get(`${hotelBedUrl}`, {
            headers: {
                'Api-Key': apiKey,
                'X-Signature': xSignature,
                "Access-Control-Allow-Origin": "*",
            },
        });

        for (const hotelData of data.hotels) {
            // Create a new Hotel instance using the data
            const hotel = new Hotel(hotelData);
            await hotel.save();
        }
        console.log("Number of hotels: ", data?.hotels?.length);
        return res.json({
            message: "Hotel Data Added Successfully",
            HotelAdded: `${data?.hotels?.length} , from ${data?.from} to ${data?.to}`
        })

    } catch (error) {
        res.json(error?.response?.data);
    }
}

export const getAllPKHotels = async (req, res) => {
    try {

        let PKHotels = await Hotel.find({ countryCode: "PK" })
        return res.json({
            message: "Pakistani Hotels are Following",
            Hotels: `${PKHotels?.length}`,
            PKHotels
        })

    } catch (error) {
        res.json(error?.response?.data);
    }
}


export const Destinations = async (req, res) => {
    try {

        const response = await axios.get(`${destinationURL}`, {
            headers: {
                'Api-Key': apiKey,
                'X-Signature': xSignature,
                "Access-Control-Allow-Origin": "*",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}


export const facilities = async (req, res) => {
    try {

        const response = await axios.get(`${facilitiesURL}`, {
            headers: {
                'Api-Key': apiKey,
                'X-Signature': xSignature,
                "Access-Control-Allow-Origin": "*",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}

export const facilityGroups = async (req, res) => {
    try {

        const response = await axios.get(`${facilityGroupsURL}`, {
            headers: {
                'Api-Key': apiKey,
                'X-Signature': xSignature,
                "Access-Control-Allow-Origin": "*",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}

export const countries = async (req, res) => {
    try {

        const response = await axios.get(`${countryURL}`, {
            headers: {
                'Api-Key': apiKey,
                'X-Signature': xSignature,
                "Access-Control-Allow-Origin": "*",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}

export const rooms = async (req, res) => {
    try {

        const response = await axios.get(`${roomsURL}`, {
            headers: {
                'Api-Key': apiKey,
                'X-Signature': xSignature,
                "Access-Control-Allow-Origin": "*",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}



export const searchHotels = async (req, res) => {
    try {

        const response = await axios.get(`${hotelBedUrl}`, {
            headers: {
                'Api-Key': apiKey,
                'X-Signature': xSignature,
                "Access-Control-Allow-Origin": "*",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}

