import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  text: string;
}
