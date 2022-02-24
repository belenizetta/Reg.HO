import { Column, Table, Model } from "sequelize-typescript"; 
@Table 
export class User extends Model{ 
    @Column 
    name:string; 
    @Column 
    email:string; 
    @Column 
    password:string; 
}