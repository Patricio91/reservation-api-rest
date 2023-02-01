import "reflect-metadata";
import { AppDataSource } from "./database";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import customerRoutes from "./routes/customer.routes";
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.use("/", customerRoutes);

// SERVER
async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected - DBeaver");
        app.listen(3000);
        console.log("Server on port", 3000);
    } catch (error) {
        console.log("Error");
        console.log(error);
    }
}
main();