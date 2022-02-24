import { Column, Table, Model } from "sequelize-typescript"; 
import { User } from "src/user/user.models";
import { JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Table 
export class Control extends Model{ 
    @PrimaryGeneratedColumn()
    id:number;
    @Column 
    project: number; 
    @Column 
    role: number; 
    @Column 
    intended_hours: number;  

    @ManyToOne(type => User, user => user.controls)
    @JoinColumn({ name: 'user_id'})
    user: User;

}