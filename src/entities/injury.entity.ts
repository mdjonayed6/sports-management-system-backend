import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'injuries' })
export class InjuryEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number; 
    @Column({ unique: true })
    injuryId: number;
    @Column()
    player: string;
    @Column()
    type: string;
    @Column()
    rehabilitationProgress: string;
    @Column()
    trackInjury: string;
    @Column()
    recordRehabilitation: string;  
    @Column()
    gender: string;
    @Column()
    nationality: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}