import Joi from "joi";

export const signUpSchema = Joi.object({
    firstname: Joi.string().min(3).max(20).required(),
    lastname: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(6).max(30).pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
    email: Joi.string().email().required(),
    phone: Joi.number().min(6).required(),
    dni: Joi.number().min(8).required(),
    age: Joi.number().min(18).required()
});

export const logInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required()
});