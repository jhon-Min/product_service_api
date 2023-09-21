import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    title:string;

    @Column({default:false})
    deleted_at:boolean;

    @Column({nullable:false})
    created_at: Date;

    @Column({nullable:false})
    updated_at: Date;
}