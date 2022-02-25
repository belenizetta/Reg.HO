import { Column, Table, Model, HasMany } from 'sequelize-typescript';
import { Control } from 'src/control/control.models';
//import { OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Table
export class User extends Model {
  // @PrimaryGeneratedColumn()
  // id:number;
  @Column
  name: string;
  @Column
  email: string;
  @Column
  password: string;
  @Column
  phone: string;
  @Column
  role: string;
  @HasMany(() => Control)
  controls: Control[];
}
