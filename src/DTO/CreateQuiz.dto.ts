import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto{
    
 @IsNotEmpty({message:" the title avn't be empty"})
 @Length(3,20)
    title : string;

 @IsNotEmpty({message:" the title avn't be empty"})
 @Length(3,200)
    description : string;
}