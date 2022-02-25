import { Column, Table, Model } from 'sequelize-typescript';
@Table
export class Project extends Model {
  @Column
  name: string;
  @Column
  start_date: Date;
  @Column
  ending_date: Date;
  @Column
  client: string;
  @Column
  status: string;
}
