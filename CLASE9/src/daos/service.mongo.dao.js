import serviceModel from "../models/service.model.js";

class ServiceDao {

    async getServices(query) {
        const services = await serviceModel.paginate(
            {
                ...(query.name ? { name: { $regex: query.name, $options: "i" } } : {}),
                ...(query.available ? { available: query.available === "true" } : {})
            },
            //opciones de paginación
            {
                page: query.page || 1,
                limit: query.limit || 10,
                lean: true
                // sort: -1
            })
        return await services;
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