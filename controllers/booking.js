import axios from 'axios'
import CryptoJS from 'crypto-js'

const hotelAvailabilityURL = "https://api.test.hotelbeds.com/hotel-api/1.0/hotels"

// const apiKey = "7adff7217cbcb01a245bb29dc0d08c8e"
// const apiSecret = "91fec9925b"

const apiKey = "db96ccfed6c2f19db10a3c60c8a3fd95"
const apiSecret = "e7b20ba748"

console.log(apiSecret, "And Here is Key", apiKey);
const timestamp = Math.floor(Date.now() / 1000);

const dataToHash = apiKey + apiSecret + timestamp;
const xSignature = CryptoJS.SHA256(dataToHash).toString(CryptoJS.enc.Hex);


export const bookingConfirmation = async (req, res) => {

    try {
        const { holder, clientReference, rooms } = req.body;
        const { name: holderName, surname: holderSurname } = holder;
        const { rateKey, paxes } = rooms[0];
        const { roomId, type, name, surname } = paxes[0];

        console.log(req.body);

        const response = await axios.post(
            `${hotelAvailabilityURL}`,
            { holder: { holderName, holderSurname }, rooms: [{ rateKey, paxes: [{ roomId, type, name, surname }] }], clientReference },
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