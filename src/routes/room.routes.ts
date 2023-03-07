import { Router } from "express";
import { createRoom, getAllRooms, getRoom, deleteRoom } from "../controllers/room.controller";
const router = Router();

// POST
router.post("/create-room", createRoom);

// GET
router.get("/get-rooms", getAllRooms);
router.get("/get-room/:id", getRoom);

// POST
router.delete("/delete-room/:id", deleteRoom);

export default router;