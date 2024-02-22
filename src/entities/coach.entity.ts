import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'coach' })
export class CoachEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
    
    @Column({ unique: true })
    userId: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    phoneNumber: number;

    @Column()
    password: string;

    @Column()
    fullName: string;

    @Column({ unique: true })
    profilePicture: string;

    @Column()
    dateOfBirth: string;
    
    @Column()
    gender: string;

    @Column({ unique: true })
    role: string;

    @Column({ unique: true })
    coachingSpecialization: string

    @Column()
    nationality: string;

    @Column()
    createdAt: Date;
    @Column()
    viewCoachInfo: string;
    @Column()
	updateCoachInfo: string;

    @Column({ nullable: true })
    authStrategy: string;

}