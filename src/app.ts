import "reflect-metadata";
import { AppDataSource } from "./database";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import customerRoutes from "./routes/customer.routes";
import roomRoutes from "./routes/room.routes";
import reservationRoutes from "./routes/reservation.routes";
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.use("/", customerRoutes);
app.use("/", roomRoutes);
app.use("/", reservationRoutes);
app.use("/", (req, res) => {
    res.send("404 - Page not found - 404")
})

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