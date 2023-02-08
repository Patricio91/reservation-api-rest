import jwt from "jsonwebtoken";
import { Customer } from "../entities/Customer";

export const signToken = async (customer: Customer) => {
    return jwt.sign(
        {
            id: customer.id,
            role: customer.role
        },
        process.env.TOKEN || "tokentest",
        {
            expiresIn: "12h"
        }
    );
}