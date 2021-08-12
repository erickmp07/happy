import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import Institution from "./models/Institutions";

const routes = Router();

routes.post("/institutions", async (request: Request, response: Response) => {
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
});

export default routes;