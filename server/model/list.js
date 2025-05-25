import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    decription: {
        type: String,

    },
    address: {
        type: String,
        require: true
    },
    priceregular: {
        type: Number,
        require: true
    },
    priceDiscounded: {
        type: Number,
        require: true
    },
    bathroom: {
        type: Number,
    },
    badroom: {
        type: Number,
    },
    parking: {
        type: Boolean,
        require: true
    },
    furnish: {
        type: Boolean,
        require: true
    },
    offer: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    ImageUrls: {
        type: Buffer,
        require: true
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    }
},{timestamps:true})
const lists = mongoose.model("list", listSchema)

export default lists