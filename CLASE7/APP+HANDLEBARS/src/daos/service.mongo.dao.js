import serviceModel from "../models/service.model.js";

class ServiceDao {

    async getServices() {
        return await serviceModel.find({}).lean();
    }

    async getServicesById(id) {
        return serviceModel.findById(id).lean()
    }

    async createService(data) {
        return await serviceModel.insertOne(data);
    }

    async updateService(id, data) {
        return await serviceModel.findByIdAndUpdate(id, data);
    }

    async deleteService(id) {
        return await serviceModel.findByIdAndDelete(id);
    }
}

export default ServiceDao;