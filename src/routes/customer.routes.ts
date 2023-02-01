import { Router } from "express";
import { deleteUserById, getAllCustomers, getCustomerById, logIn, signUp } from "../controllers/customer.controller";
const router = Router();

router.post("/log-in", logIn);
router.post("/sign-up", signUp);
router.get("/customers", getAllCustomers);
router.get("/customers/:id", getCustomerById);
router.delete("/customer/:id", deleteUserById);

export default router;