import { Router } from "express";
import { createReservation, getReservationsFromCustomer } from "../controllers/reservation.controller";
const router = Router();

// POST
router.post("/create-reservation", createReservation);

// GET
router.get("/reservations", getReservationsFromCustomer);

export default router;