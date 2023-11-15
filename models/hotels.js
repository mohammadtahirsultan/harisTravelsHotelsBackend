// models/Hotel.js
import mongoose from 'mongoose';

const coordinatesSchema = new mongoose.Schema({
    longitude: Number,
    latitude: Number
});

const addressSchema = new mongoose.Schema({
    content: String,
    street: String,
    number: String,
});

const phoneSchema = new mongoose.Schema({
    phoneNumber: Number,
    phoneType: String
});

const roomSchema = new mongoose.Schema({
    roomCode: String,
    isParentRoom: Boolean,
    minPax: Number,
    maxPax: Number,
    maxChildren: Number,
    minAdults: Number,
    maxAdults: Number,
    roomType: String,
    characteristicCode: String
});

const facilitySchema = new mongoose.Schema({
    facilityCode: Number,
    facilityGroupCode: Number,
    order: Number,
    number: Number,
    voucher: Boolean,
});

const terminalSchema = new mongoose.Schema({
    terminalCode: String,
    distance: Number
});

const interestPointSchema = new mongoose.Schema({
    facilityCode: Number,
    facilityGroupCode: Number,
    order: Number,
    poiName: String,
    distance: String,

});

const imageSchema = new mongoose.Schema({
    imageTypeCode: String,
    path: String,
    order: Number,
    visualOrder: Number,
    characteristicCode: String,
    roomCode: String,
    roomType: String,
});

const wildcardSchema = new mongoose.Schema({
    roomType: String,
    roomCode: String,
    characteristicCode: String,
    hotelRoomDescription: {
        content: String,
    }
});

const hotelSchema = new mongoose.Schema({
    code: Number,
    name: Object,
    description: Object,
    countryCode: String,
    stateCode: String,
    destinationCode: String,
    zoneCode: Number,
    //   coordinates: coordinatesSchema,
    categoryCode: String,
    categoryGroupCode: String,
    chainCode: String,
    accommodationTypeCode: String,
    //   boardCodes: [String],
    //   segmentCodes: [String],
    //   address: addressSchema,
    postalCode: String,
    city: Object,
    email: String,
    license: String,
    //   phones: [phoneSchema],
    //   rooms: [roomSchema],
    //   facilities: [facilitySchema],
    //   terminals: [terminalSchema],
    //   interestPoints: [interestPointSchema],
    //   images: [imageSchema],
    //   wildcards: [wildcardSchema],
    web: String,
    lastUpdate: String,
    S2C: String,
    ranking: Number,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
