import crypto from "crypto";

class ServiceManager {
    constructor() {
        this.services = [];
    }

    getServices() {
        return this.services;
    }

    getServicesById(id) {
        return this.services.find(service => service.id === id);
    }

    createService(name, description, price, avaitable) {
        const newService = {
            id: crypto.randomUUID(), name, description, price, avaitable
        };
        this.services.push(newService);
        return newService;
    }

    updateService(id, data) {
        const service = this.getServicesById(id);
        if (!service) { return null; }
        service.name = data.name ?? service.name;
        service.description = data.description ?? service.description;
        service.price = data.price ?? service.price;
        service.avaitable = data.avaitable ?? service.avaitable;
        return service;
    }

    deleteService(name) {
        const index = this.services.findIndex(service => service.name === name);
        if(index === -1) { return null;}
        return this.services.splice(index, 1)[0];
    }
}

export default ServiceManager;
/*
const fruta = ["manzanas", "peras", "naranjas"];
console.log(fruta[2]);*/
/*
const servicios = new ServiceManager();
const ver = servicios.createService("Clinico", "Medico clinico", 35000, true);
//const ver = servicios.getServices();
console.log(ver);*/