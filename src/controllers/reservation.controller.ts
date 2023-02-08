import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Reservation } from "../entities/Reservation";
import jwt from "jsonwebtoken";
import { IPayload } from "../helpers";
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

// GET 
export const getReservationsFromCustomer = async (req: Request, res: Response) => {
    try {
        const token = req.header("auth-header");
        if (!token) {
            return res.status(401).send({message: "No hay token en la petición. Petición no autorizada"});
        }
        const payload = jwt.verify(token, process.env.TOKEN || "tokentest") as IPayload;
        const customerId = payload.id;
        const reservations = await reservationRepository.find({
            where: {
                customer: {
                    id: parseInt(customerId)
                }
            },
            relations: {
                room: true
            },
            select: {
                room: { 
                    name: true,
                    capacity: true
                }
            }
        })
        if (reservations.length === 0) {
            return res.status(404).send({message: "Usted no reservó ninguna habitación aún"});
        }
        return res.status(200).send({message: "Reservaciones: ", reservations});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
    }
}