import { Router } from "express";
import { createRoom, getAllRooms, getRoom, deleteRoom } from "../controllers/room.controller";
const router = Router();

router.post("/create-room", createRoom);
router.get("/get-rooms", getAllRooms);
router.get("/get-room/:id", getRoom);
router.delete("/delete-room/:id", deleteRoom);

export default router;