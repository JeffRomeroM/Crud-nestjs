import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genders {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

}
