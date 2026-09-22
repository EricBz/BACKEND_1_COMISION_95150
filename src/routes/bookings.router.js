import { Router, json, urlencoded } from "express";
import BookingController from "../controllers/bookings.controller.js";

const router = Router();

router.get("/:bid", BookingController.getById);
// asigna un turno disponible a un booking existente
router.post("/:bid/services/:sid", BookingController.setServiceToBooking);

// aca no necesitamos los middlewares de json uy urlencoded

// crea un registro de reservas particular
router.post("/", BookingController.create);

export default router;