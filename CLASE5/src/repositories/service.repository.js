import ServiceDao from "../daos/service.dao.js";

class ServicesRepository {
    constructor(dao = new ServiceDao("./src/data/service.json")) {
        this.dao = dao;
    }

    async getService() {
        return await this.dao.getServices();
    }

    async getServicesById(id) {
        return await this.dao.getServicesById(id);
    }

    async createService(data) {
        return await this.dao.createService(data);
    }

    async updateService(id, data) {
        return await this.dao.updateService(id, data);
    }

    async deleteService(id) {
        return this.dao.deleteService(id);
    }
}

export default ServicesRepository