import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'equipments' })
export class EquipmentEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: string;
    @Column({ unique: true })
    equipmentId: number;
    @Column()
    equipmentsName: string;
    @Column()
    quantity: string;
    @Column({ unique: true })
    status: string
    @Column()
    manageInventory: string;
    @Column()
    trackUsage: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}