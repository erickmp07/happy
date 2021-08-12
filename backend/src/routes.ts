import { Router } from "express";
import InstitutionsController from "./controllers/InstitutionsController";

const routes = Router();

routes.get("/institutions", InstitutionsController.index);
routes.get("/institutions/:id", InstitutionsController.show);
routes.post("/institutions", InstitutionsController.create);

export default routes;