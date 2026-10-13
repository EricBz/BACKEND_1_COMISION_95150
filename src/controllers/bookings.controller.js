import { bookingModel } from "../models/booking.model.js";

class BookingController {
    static async getById(req, res, next) {
        try {
            const { bid } = req.params;
            const requiredBooking = await bookingModel.findOne({ _id: bid });
            res.status(200).json(requiredBooking);
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res, next) {
        try {
            const newBooking = await bookingModel.create({});
            res.status(200).json({ status: "success", newBooking });
        } catch (error) {
            console.log(error);
        }
    }

    static async addServiceToBookingById(req, res, next) {
        try {
            const { sid, bid } = req.params;
            const requiredBooking = await bookingModel.findByIdAndUpdate(bid, { $push: { services: { service: sid } } });
            res.status(200).json(requiredBooking);
        } catch (error) {
            console.log(error);
        }
    }
}

export default BookingController;