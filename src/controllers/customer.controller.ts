import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Customer } from "../entities/Customer";
const customerRepository = AppDataSource.getRepository(Customer);

// POST
export const signUp = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, email, phone } = req.body; //en un futuro validar con Joi
        const customer = new Customer();
        customer.firstname = firstname;
        customer.lastname = lastname
        customer.email = email;
        customer.phone = phone;
        await customerRepository.save(customer);
        return res.status(201).send({message: `¡Cuenta creada! Bienvenido ${customer.firstname} ${customer.lastname}`})
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
    }
}

// GET
export const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await customerRepository.find();
        if (customers.length === 0) {
            return res.status(404).send({message: "No hay ningún cliente registrado aún"});
        }
        return res.status(200).send({message: `Customers: `, customers});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
    }
}

// GET
export const getCustomerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const customer = await customerRepository.findOneBy({id: parseInt(id)});
        if (!customer) {
            return res.status(404).send({message: "No se encontró ningún cliente con ese ID"});
        }
        return res.status(200).send({message: `Customer #${id}`, customer});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
    }
}