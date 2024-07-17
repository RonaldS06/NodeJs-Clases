import { Router } from "express";
import { createCamada } from "../controllers/camadas";

const camadaRoutes = Router();

camadaRoutes.post("/", createCamada);

export default camadaRoutes;
