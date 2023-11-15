import axios from 'axios'
import CryptoJS from 'crypto-js'

const hotelAvailabilityURL = "https://api.test.hotelbeds.com/hotel-api/1.0/hotels"


// const apiKey = process.env.apiKey
// const apiSecret = process.env.apiSecret
const apiKey = "7adff7217cbcb01a245bb29dc0d08c8e"
const apiSecret = "91fec9925b"

const timestamp = Math.floor(Date.now() / 1000);

const dataToHash = apiKey + apiSecret + timestamp;
const xSignature = CryptoJS.SHA256(dataToHash).toString(CryptoJS.enc.Hex);

export const checkAvailabilityByHotelCode = async (req, res) => {

    try {
        const { stay, occupancies, hotels } = req.body;
        const { checkIn, checkOut } = stay;
        const { rooms, adults, children } = occupancies[0];


        const response = await axios.post(
            `${hotelAvailabilityURL}`,
            { stay: { checkIn, checkOut }, occupancies: [{ rooms, adults, children }], hotels },
            {
                headers: {
                    'Api-Key': apiKey,
                    'X-Signature': xSignature,
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );

        // console.log(response.data);
        res.json(response.data);
    } catch (error) {
        // console.log(error);
        res.status(error.response.status).json(error.response.data);
    }
}


export const checkAvailabilityFilters = async (req, res) => {

    try {
        const { stay, occupancies, hotels, filter } = req.body;
        const { checkIn, checkOut } = stay;
        const { rooms, adults, children } = occupancies[0];

    

        const response = await axios.post(
            `${hotelAvailabilityURL}`,
            { stay: { checkIn, checkOut }, occupancies: [{ rooms, adults, children }], hotels, filter },
            {
                headers: {
                    'Api-Key': apiKey,
                    'X-Signature': xSignature,
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );

        // console.log(response.data);
        res.json(response.data);
    } catch (error) {
        // console.log(error);
        res.status(error.response.status).json(error.response.data);
    }

}


export const checkAvailabilityByGeoLocation = async (req, res) => {

    try {
        const { stay, occupancies, geolocation } = req.body;
        const { checkIn, checkOut } = stay;
        const { rooms, adults, children } = occupancies[0];


        const response = await axios.post(
            `${hotelAvailabilityURL}`,
            { stay: { checkIn, checkOut }, occupancies: [{ rooms, adults, children }], geolocation },
            {
                headers: {
                    'Api-Key': apiKey,
                    'X-Signature': xSignature,
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }

}