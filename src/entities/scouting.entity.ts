import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'scouting' })
export class ScoutingEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    username: string;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}