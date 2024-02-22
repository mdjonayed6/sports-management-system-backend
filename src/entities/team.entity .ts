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
    staff: string;

    @Column({ unique: true })
    players: string;

    @Column({ unique: true })
    email: string;
    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column()
    createTeam: string;
    @Column()
    updateTeam: string;
    @Column()
    deleteTeam: string;
    @Column()
    manageTeamRoster: string;


    @Column({ nullable: true })
    authStrategy: string;

}