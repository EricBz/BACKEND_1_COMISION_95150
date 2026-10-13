import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: true
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
        default: true,
        index: true
    }
});

serviceSchema.plugin(paginate);

const serviceModel = model("Services", serviceSchema);

export default serviceModel;
