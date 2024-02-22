import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'communications' })
export class CommunicationEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId:number; 
    @Column({ unique: true })
    messageId: number;
    @Column()
    sender: string;
    @Column()
    recipients: string;
    @Column()
    message: string;
    @Column()
    sendAnnouncement: string;
    @Column()
    facilitateCommunication: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}