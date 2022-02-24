import { Column, Table, Model } from "sequelize-typescript"; 
@Table 
export class Project extends Model{ 
    @Column 
    name: string; 
    @Column 
    fecha_inicio: Date; 
    @Column 
    fecha_fin: Date; 
    @Column 
    cliente: string;
    @Column 
    estado: string;
      
}