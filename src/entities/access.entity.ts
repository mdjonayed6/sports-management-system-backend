import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'access' })
export class AccessEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number;
    @Column({ unique: true })
    securityId: number;
    @Column()
    measure: string;
    @Column()
    accessControl: string;
    @Column()
    implementSecurityMeasures: string; // need help
    @Column()
    controlAccess: string; // need help

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}