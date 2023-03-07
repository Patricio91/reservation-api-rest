import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Room } from "../entities/Room";
import moment, { Moment } from "moment";
import { reservationRepository } from "./reservation.controller";
const roomRepository = AppDataSource.getRepository(Room);

// POST
export const createRoom = async (req: Request, res: Response) => {
    try {
        const { name, capacity } = req.body;
        const room = new Room();
        room.name = name;
        room.capacity = capacity;
        await roomRepository.save(room);
        return res.status(201).send({ message: "Habitación creada correctamente" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

// GET
export const getAllRooms = async (req: Request, res: Response) => {
    try {
        const rooms = await roomRepository.find();
        if (rooms.length === 0) {
            return res.status(404).send({ message: "Lo sentimos, no hay habitaciones por el momento" });
        }
        return res.status(200).send({ message: "Rooms: ", rooms });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

// GET
export const getRoom = async (req: Request, res: Response) => {
    try {
        const room = await roomRepository.findOne({ where: { id: parseInt(req.params.id) } });
        if (!room) {
            return res.status(404).send({ message: `La habitación ID #${req.params.id} no existe` });
        }
        return res.status(200).send(room);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

// DELETE 
export const deleteRoom = async (req: Request, res: Response) => {
    try {
        const room = await roomRepository.findOne({ where: { id: parseInt(req.params.id) } });
        if (!room) {
            return res.status(404).send(`La habitación ID #${req.params.id} no existe`);
        }
        await roomRepository.delete(room);
        return res.status(200).send({ message: `Habitación ID #${req.params.id} eliminada correctamente` });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}