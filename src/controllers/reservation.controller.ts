import { Request, Response } from "express";

// POST
export const createReservation = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
    }
}