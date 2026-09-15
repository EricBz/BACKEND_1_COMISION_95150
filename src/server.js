import express from "express";
import env from "./config/env.js";
import ServiceManager from "./managers/ServiceManager.js";
import { rotingDetector } from "./middlewares/routingDetector.js";

const serviceManager = new ServiceManager("./src/data/data.json");
const app = express();

app.use(rotingDetector);

app.get("/api/services", async (req, res, next) => {
    try {
        const services = await serviceManager.getServices();
        res.status(200).json(services);
    } catch (error) {
        console.log(error);
    }
});

app.get("/api/services/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const service = await serviceManager.getServicesById(id);
        res.status(200).json(service);
    } catch (error) {
        console.log(error);
    }
});

app.use(express.json(), express.urlencoded({ extended: true }));

app.post("/api/services", async (req, res, next) => {
    try {
        const { name, description, price, available } = req.body;
        const newService = serviceManager.createService(name, description, price, available);
        res.status(201).json({ message: "servicio creado", newService });
    } catch (error) {
        console.log(error);
    }
});

app.put("/api/services/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedService = serviceManager.updateService(id, req.body);
        res.status(201).json({ message: "servicio actualizado", updatedService });
    } catch (error) {
        console.log(error);
    }
});

app.delete("/api/services/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedService = serviceManager.deleteService(id);
        res.status(201).json({ message: "servicio eliminado", deletedService });
    } catch (error) {
        console.log(error);
    }
});

app.listen(env.PORT, () => {
    console.log("server andando en el puerto " + env.PORT);
});