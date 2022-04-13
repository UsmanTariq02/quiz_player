import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// Here Quizes is Table Name 
@Entity('quizes')

export class Quiz extends BaseEntity {
    // Primary Generated Column is for Auto Incremented Key ID
    @PrimaryGeneratedColumn({
        comment: 'The Quiz Unique Identifier',
    })
    id: number;
    // @Column is used to create a new column in the table ....
    @Column({
        comment: 'Column For Title',
        type: 'varchar'
    })
    title: string;
    // Here are 2 columns title & description
    @Column({
        type: 'text' // Column Type is given here
    })
    description: string; // description is the column name 

    @Column({
        type: 'boolean',
        default: 1
    })
    isActive: boolean

}


