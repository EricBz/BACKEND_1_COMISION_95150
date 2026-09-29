import express from "express";
import env from "./config/env.js";
import serviceRouter from "./routes/services.router.js";
import bookingRouter from "./routes/bookings.router.js";
import { notFound, rotingDetector } from "./middlewares/routingDetector.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import connectDB from "./config/db.js";

const app = express();

app.use(rotingDetector);

app.use("/api/services", serviceRouter);
app.use("/api/bookings", bookingRouter);

app.get("/", async (req, res, next) => {
    try {
        throw new Error("error de prueba");

    } catch (error) {
        next(error);
    }
});

app.use(errorHandler);
app.use(notFound);

app.listen(env.PORT, () => {
    console.log("server andando en el puerto " + env.PORT);
    connectDB()
        .then(() => console.log("conectado a DB"))
        .catch(e => console.log(e))
});