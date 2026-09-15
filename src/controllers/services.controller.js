import ServiceManager from "../managers/ServiceManager.js";

const serviceManager = new ServiceManager("./src/data/service.json");

class ServiceController {
    static async getAll(req, res, next) {
        try {
            const services = await serviceManager.getServices();
            res.status(200).json(services);
        } catch (error) {
            console.log(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const service = await serviceManager.getServicesById(id);
            res.status(200).json(service);
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { name, description, price, available } = req.body;
            const newService = serviceManager.createService(name, description, price, available);
            res.status(201).json({ message: "servicio creado", newService });
        } catch (error) {
            console.log(error);
        }
    }

    static async updateById(req, res, next) {
        try {
            const { id } = req.params;
            const updatedService = serviceManager.updateService(id, req.body);
            res.status(201).json({ message: "servicio actualizado", updatedService });
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteById(req, res, next) {
        try {
            const { id } = req.params;
            const deletedService = serviceManager.deleteService(id);
            res.status(201).json({ message: "servicio eliminado", deletedService });
        } catch (error) {
            console.log(error);
        }
    }
}

export default ServiceController