import { Router } from "express";
import { createReservation } from "../controllers/reservation.controller";
const router = Router();

router.post("/create-reservation", createReservation);

export default router;