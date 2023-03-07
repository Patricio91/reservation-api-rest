import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Customer } from "../entities/Customer";
import bcrypt from "bcrypt";
import { signToken } from "../helpers/token";
import { logInSchema, signUpSchema } from "../validators/customer.validator";
const saltround = 10;
export const customerRepository = AppDataSource.getRepository(Customer);
const salt = bcrypt.genSaltSync();

// POST
export const signUp = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, email, phone, dni, age, password } = req.body;
        await signUpSchema.validateAsync(req.body);
        const customer: Customer = new Customer();
        customer.firstname = firstname;
        customer.lastname = lastname;
        customer.password = bcrypt.hashSync(password, salt);
        customer.email = email;
        customer.phone = phone;
        customer.dni = dni;
        customer.age = age;
        await customerRepository.save(customer);
        return res.status(201).send({ message: `¡Cuenta creada! Bienvenido ${customer.firstname} ${customer.lastname}` });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

// GET
export const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers: Customer[] = await customerRepository.find();
        if (customers.length === 0) {
            return res.status(404).send({ message: "No hay ningún cliente registrado aún" });
        }
        return res.status(200).send({ message: `Customers: `, customers });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

// GET
export const getCustomerById = async (req: Request, res: Response) => {
    try {
        const customer: Customer | null = await customerRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!customer || customer === null) {
            return res.status(404).send({ message: "No se encontró ningún cliente con ese ID" });
        }
        return res.status(200).send({ message: `Cliente #${req.params.id}`, customer });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

// DELETE 
export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const customer: Customer | null = await customerRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!customer || customer === null) {
            return res.status(404).send({ message: "No se encontró ningún cliente con ese ID" });
        }
        await customerRepository.delete(customer);
        return res.status(200).send({ message: `Cliente #${req.params.id} eliminado` });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

// POST 
export const logIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        await logInSchema.validateAsync(req.body);
        const customer: Customer | null = await customerRepository.findOne({ where: { email: (email) } });
        if (!customer || customer === null) {
            return res.status(404).send({ message: `No se encontró ninguna cuenta con el email '${email}'. Intente nuevamente` })
        }
        const validatePassw: boolean = await bcrypt.compare(password, customer.password);
        if (!validatePassw) {
            return res.status(404).send({ message: "Contraseña incorrecta. Intente nuevamente" });
        }
        const token: string = await signToken(customer);
        return res.status(200).send({ message: "Ingreso exitoso. ¡Bienvenido!", token })
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
}