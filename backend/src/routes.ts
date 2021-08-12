import { Router } from "express";
import InstitutionsController from "./controllers/InstitutionsController";

const routes = Router();

routes.get("/institutions", InstitutionsController.index);
routes.post("/institutions", InstitutionsController.create);

export default routes;