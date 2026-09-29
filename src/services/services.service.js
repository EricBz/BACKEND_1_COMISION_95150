import ServicesRepository from "../repositories/service.repository.js";

class ServicesService {
    constructor(repository = new ServicesRepository()) {
        this.repository = repository;
    }

    async getServices() {
        return await this.repository.getService();
    }

    async getServiceById(id) {
        const service = await this.repository.getServicesById(id);
        if (!service) throw new Error("Servicio no encontrado.");
        return service;
    }

    async createService(data) {
        const { name, description, price, available } = data;
        if (!name || !description || !price || !available) {
            throw new Error("Faltan campos obligatorios: name, description, price, available.");
        }
        if (price < 0) throw new Error("El precio no puede ser negativo.");
        return await this.repository.createService({ name, description, price, available });
    }

    async updateService(id, data) {
        const service = await this.repository.updateService(id, data);
        if (!service) throw new Error("Servicio no encontrado.");
        return service
    }

    async deleteService(id) {
        const deleted = await this.repository.deleteService(id);
        if (!deleted) throw new Error("Servicio no encontrado.");
        return deleted
    }

}

export default ServicesService;