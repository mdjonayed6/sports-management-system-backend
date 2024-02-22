import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'injuries' })
export class InjuryEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    username: string;

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

    @Column({ unique: true })
    role: string; // ????

    @Column()
    nationality: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}