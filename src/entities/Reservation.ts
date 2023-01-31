import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Room } from "./Room";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    checkIn!: Date;

    @Column()
    checkOut!: Date;

    @ManyToOne(type => Room, room => room.reservations)
    room!: Room;
}