import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'compliance' })
export class ComplianceEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number; 
    @Column({ unique: true })
    complianceId: number;
    @Column()
    rule: string;
    @Column()
    documentation: string;
    @Column()
    ensureCompliance: string;
    @Column()
    manageDocumentation: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}