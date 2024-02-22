import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'facilities' })
export class FacilityEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number;

    @Column({ unique: true })
    facilityName: string;

    @Column({ unique: true })
    location: string;

    @Column()
    capacity: string;
    @Column()
    availability: boolean;
    @Column()
    createFacility: string;
    @Column()
    updateFacility: string;
    @Column()
    deleteFacility: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}