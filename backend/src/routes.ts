import { Router, Request, Response } from "express";
import InstitutionsController from "./controllers/InstitutionsController";

const routes = Router();

routes.post("/institutions", InstitutionsController.create);

export default routes;