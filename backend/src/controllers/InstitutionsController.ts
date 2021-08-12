import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Institution from "../models/Institutions";

export default {
    async index(request: Request, response: Response) {
        const institutionsRepository = getRepository(Institution);

        const institutions = await institutionsRepository.find();

        return response.json(institutions);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const institutionsRepository = getRepository(Institution);

        const institution = await institutionsRepository.findOneOrFail(id);

        return response.json(institution);
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
    
        const institutionsRepository = getRepository(Institution);
    
        const institution = institutionsRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });
    
        await institutionsRepository.save(institution);
    
        return response.status(201).json(institution);
    }
};