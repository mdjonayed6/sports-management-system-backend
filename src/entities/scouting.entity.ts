import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'scouting' })
export class ScoutingEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number;
    @Column({ unique: true })
    scoutingId: number;
    @Column()
    player: string;
    @Column()
    report: string;
    @Column()
    manageScoutingReports: string;
    @Column()
    coordinateRecruitment: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}