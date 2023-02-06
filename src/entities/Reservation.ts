import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Customer } from "./Customer";
import { Room } from "./Room";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    check_in!: Date;

    @Column()
    check_out!: Date;

    @ManyToOne(() => Room, room => room.reservations)
    @JoinColumn({name: "room_id"})
    room!: Room;

    @ManyToOne(() => Customer, (customer) => customer.reservation)
    @JoinColumn({name: "customer_id"})
    customer!: Customer;
}