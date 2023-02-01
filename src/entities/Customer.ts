import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "./Reservation";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstname!: string;

    @Column()
    lastname!: string;

    @Column()
    password!: string;

    @Column()
    email!: string;

    @Column()
    phone!: string;

    @Column()
    age!: number;

    @Column()
    dni!: string;

    @OneToMany(() => Reservation, (reservation) => reservation.customer)
    reservation!: Reservation[];

}