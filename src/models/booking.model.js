import { Schema, model, Types } from "mongoose";

const bookingSchema = new Schema({
    services: {
        type: [
            {
                service: {
                    type: Types.ObjectId,
                    ref: "Services"
                }
            }
        ],
        default: []
    }
});

bookingSchema.pre("findOne", function () {
    this.populate("services.service");
});

export const bookingModel = model("Bookings", bookingSchema);