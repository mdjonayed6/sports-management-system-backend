import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({ name: 'schedule' })
export class ScheduleEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number;

    @Column({ unique: true })
    scheduleId: string;
    
    @Column()
    type: string;
    
    @Column()
    date: Date;
    
    @Column({ unique: true })
    time: string;
    
    @Column()
    location: string;

    @Column()
    createdAt: Date;
   
    @Column()
    createSchedule: string;
    
    @Column()
    updateSchedule: string;
    
    @Column()
    deleteSchedule: string;


    @Column({ nullable: true })
    authStrategy: string;

}