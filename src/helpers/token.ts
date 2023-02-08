import jwt from "jsonwebtoken";
import { Customer } from "../entities/Customer";

export const signToken = async (customer: Customer) => {
    return jwt.sign(
        {
            id: customer.id,
            role: customer.role
        },
        process.env.TOKEN || "secret_token_test",
        {
            expiresIn: "12h"
        }
    );
}