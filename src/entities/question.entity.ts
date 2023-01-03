import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";

@Entity()
export class Question extends BaseEntity {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     question : string;

     @ManyToOne(()=>Quiz ,(quiz)=> quiz.question)
     quiz:Quiz;
}
