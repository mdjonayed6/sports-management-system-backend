import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'contents' })
export class ContentEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId:  number;
    @Column({ unique: true })
    contentId: number;
    @Column()
    type: string;
    @Column()
    title: string;
    @Column()
    content: string;
    @Column()
    updateContent: string;
    @Column()
    uploadMedia: string;


    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}