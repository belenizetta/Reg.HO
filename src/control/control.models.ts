import {
  Column,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/user/user.models';
//import { JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Table
export class Control extends Model {
  // @PrimaryGeneratedColumn()
  // id:number;
  @Column
  project: number;
  @Column
  role: number;
  @Column
  intended_hours: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
