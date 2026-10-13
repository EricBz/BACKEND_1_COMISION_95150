import { Router, json, urlencoded } from "express";
import ServiceController from "../controllers/services.controller.js";
import { validateServiceId } from "../middlewares/services.router.js";

const router = Router();

// esto nos va a servir para validar todo de una vez
router.param("id", validateServiceId);

// router.route("/")
//     .get(ServiceController.getAll)
//     .post(json(), urlencoded({ extended: true }), ServiceController.create);

// router.route("/:id")
//     .get(ServiceController.getById)
//     .put(json(), urlencoded({ extended: true }), ServiceController.updateById)
//     .delete(ServiceController.deleteById);
router.get("/", ServiceController.getAll);
router.get("/:id", ServiceController.getById);

router.use(json(), urlencoded({ extended: true }));

router.post("/", ServiceController.create);
router.put("/:id", ServiceController.updateById);
router.delete("/:id", ServiceController.deleteById);

export default router;