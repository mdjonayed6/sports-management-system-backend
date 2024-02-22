import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'teams' })
export class TeamEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number;
    @Column({ unique: true })
    teamName: string;
    @Column({ unique: true })
    coach: string;
    
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}