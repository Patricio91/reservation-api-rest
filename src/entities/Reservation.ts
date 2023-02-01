import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Customer } from "./Customer";
import { Room } from "./Room";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    checkIn!: Date;

    @Column()
    checkOut!: Date;

    @ManyToOne(() => Room, room => room.reservations)
    room!: Room;

    @ManyToOne(() => Customer, (customer) => customer.reservation)
    customer!: Customer;
}