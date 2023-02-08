import Joi from "joi";

export const createReservationSchema = Joi.object({
    check_in: Joi.number().min(1).required(),
    check_out: Joi.number().min(1).required(),
    room: Joi.number().min(1).required()
});