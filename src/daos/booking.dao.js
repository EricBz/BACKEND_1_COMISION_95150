import crypto from "crypto";
import fs from "fs/promises";

class BookingManager {
    constructor(path) {
        this.path = path;
    }

    async #readBookings() {
        const data = await fs.readFile(this.path, "utf-8");
        return JSON.parse(data); //transformamos de json a obj
    }

    async #writeBookings(booking) {
        fs.writeFile(this.path, JSON.stringify(booking, null, 2));
    }

    async getBookingsById(id) {
        const bookings = await this.#readBookings();
        return bookings.find(booking => booking.id === id);
    }

    async createBooking(/*revisar props para poner args*/) {
        const booking = await this.#readBookings();
        const newBooking = {
            id: crypto.randomUUID(),
            // hay que ver que props podemos necesitar
        };
        booking.push(newBooking);
        await this.#writeBookings(booking);
        return newBooking;
    }
}

export default BookingManager;