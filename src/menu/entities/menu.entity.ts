import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

}
