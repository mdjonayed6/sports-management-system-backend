import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'players' })
export class PlayerEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number;

    @Column()
    playerName: string;

    @Column()
    position: string;

    
    @Column()
    injuryStatus: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    phoneNumber: string; //mistake

    @Column()
    password: string;

    @Column()
    fullName: string;

    @Column({ unique: true })
    profilePicture: string; // ????

    @Column()
    dateOfBirth: string;
    
    @Column()
    gender: string;

    @Column()
    nationality: string;

    @Column({ unique: true })
    playingSpecialization: string

    @Column()
    createdAt: Date;
    
    @Column()
    viewPlayerInfo: string;

    @Column()
	updatePlayerInfo: string;


    @Column({ nullable: true })
    authStrategy: string;

}