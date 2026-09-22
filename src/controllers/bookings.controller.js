import BookingManager from "../managers/BookingManager.js";

const bookingManager = new BookingManager("./src/data/service.json");

class BookingController {
    static async getById(req, res, next) {
        try {
            const { bid } = req.params;
            const booking = await bookingManager.getBookingsById(bid);
            res.status(200).json(booking);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const newBooking = await bookingManager.createBooking();
            res.status(201).json({ message: "Booking creado", newBooking });
        } catch (error) {
            next(error);
        }
    }

    static async setServiceToBooking(req, res, next) {
        try {
            const { bid, sid } = req.params;
            const updatedBooking = await bookingManager.setServiceToBooking(sid, bid);
            res.status(201).json({ message: "Servicio asignado", updatedBooking });
        } catch (error) {
            next(error);
        }
    }
}

export default BookingController;