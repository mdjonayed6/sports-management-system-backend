import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'performances' })
export class PerformanceEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;


    @Column({ unique: true })
    userId: number; 
    @Column({ unique: true })
    analysisId: number;
    @Column()
    player: string;
    @Column()
    team: string;
    @Column()
    statistics: string
    @Column({ unique: true })
    viewPlayerPerformance: string;
    @Column()
    generateReports: string;


    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}