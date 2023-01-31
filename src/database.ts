import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Room } from "./entities/Room";
import { Reservation } from "./entities/Reservation";
dotenv.config();

// DATABASE
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    port: 3306,
    database: process.env.DB_NAME,
    entities: [Room, Reservation],
    logging: true,
    synchronize: true
})