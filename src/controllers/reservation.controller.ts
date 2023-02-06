import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Reservation } from "../entities/Reservation";
const reservationRepository = AppDataSource.getRepository(Reservation);

// POST
export const createReservation = async (req: Request, res: Response) => {
    try {
        const { check_in, check_out, room, customer } = req.body;
        const reservation = new Reservation();
        reservation.check_in = check_in;
        reservation.check_out = check_out;
        reservation.room = room;
        reservation.customer = customer;
        await reservationRepository.save(reservation);
        return res.status(201).send({message: `Reservada la habitación ${room} con entrada ${check_in} y salida ${check_out}`});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
    }
}