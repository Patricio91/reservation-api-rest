import { Router } from "express";
import { createReservation, getReservationsFromCustomer } from "../controllers/reservation.controller";
const router = Router();

router.post("/create-reservation", createReservation);
router.get("/reservations", getReservationsFromCustomer);

export default router;