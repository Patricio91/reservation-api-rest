import { Router } from "express";
import { deleteUserById, getAllCustomers, getCustomerById, logIn, signUp } from "../controllers/customer.controller";
const router = Router();

// POST
router.post("/log-in", logIn);
router.post("/sign-up", signUp);

// GET
router.get("/customers", getAllCustomers);
router.get("/customers/:id", getCustomerById);

// DELETE
router.delete("/customer/:id", deleteUserById);

export default router;