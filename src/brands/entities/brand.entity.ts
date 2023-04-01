
import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Brands {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;



}
