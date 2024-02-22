import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'finance' })
export class FinanceEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    userId: number;     
    @Column({ unique: true })         	
    financeId: number;  
    @Column({ unique: true })       	
    transactionType: string;
    @Column({ unique: true })
    totalAmount:string;   
    @Column({ unique: true })	
    date: Date;
    @Column()           	
    description: string;
    @Column()      	
    playersAllowance: string;
    @Column()	
    totalPlayingCost: string;
    @Column()	
    addTicketSellingAmount: string; 
    @Column()
    recordTransaction: string;
    @Column()   	
    generateFinancialReports: string;
    @Column()  
    manageBudgets: string;
    @Column()     	
    recordPlayerFine: string;
    @Column()
    deductPlayerAmount: string;
    @Column()
    addMembershipFee: string;
    @Column()
    addPlayersAllowance: string;
    @Column()
    deductPlayingCost: string;
    @Column()     
    showPlayerAmountAfterDeduction: string;
    @Column()
    showRemainingAmount: string;

    @Column()
    createdAt: Date;
    @Column({ nullable: true })
    authStrategy: string;

}