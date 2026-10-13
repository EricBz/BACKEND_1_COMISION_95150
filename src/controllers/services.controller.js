import ServicesService from "../services/services.service.js";

const servicesService = new ServicesService();

class ServiceController {
    static async getAll(req, res, next) {
        try {
            const services = await servicesService.getServices();
            res.status(200).json(services);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const service = await servicesService.getServiceById(id);
            res.status(200).json(service);
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: error.message });
        }
    }

    static async create(req, res, next) {
        try {
            //const { name, description, price, available } = req.body;
            const data = req.body;
            const newService = await servicesService.createService(data);
            res.status(201).json({ message: "servicio creado", newService });
        } catch (error) {
            console.log(error.message);
            res.status(404).json({ error: error.message });
        }
    }

    static async updateById(req, res, next) {
        try {
            const { id } = req.params;
            const updatedService = await servicesService.updateService(id, req.body);
            res.status(201).json({ message: "servicio actualizado", updatedService });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteById(req, res, next) {
        try {
            const { id } = req.params;
            const deletedService = await servicesService.deleteService(id);
            res.status(201).json({ message: "servicio eliminado", deletedService });
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: error.message });
        }
    }
}

export default ServiceController