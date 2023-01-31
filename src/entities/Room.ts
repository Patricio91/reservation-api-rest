import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Reservation } from "./Reservation";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    capacity!: number;

    @OneToMany(type => Reservation, reservation => reservation.room)
    reservations!: Reservation[];
}