import { Router } from "express";
import { getAllCustomers, getCustomerById, signUp } from "../controllers/customer.controller";
const router = Router();

router.post("/sign-up", signUp);
router.get("/customers", getAllCustomers);
router.get("/customers/:id", getCustomerById);

export default router;