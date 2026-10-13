import { Router, json, urlencoded } from "express";
import BookingController from "../controllers/bookings.controller.js";

const router = Router();

router.get("/:bid", BookingController.getById);
router.post("/:bid/services/:sid", BookingController.createById);

router.use(json(), urlencoded({ extended: true }));

router.post("/", BookingController.create);

export default router;