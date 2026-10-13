import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
});

const serviceModel = model("Services", serviceSchema);

export default serviceModel;
