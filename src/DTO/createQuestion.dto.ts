import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto{

    @IsNotEmpty({message:"the question can not be empty"})
    @Length(0,500)
    question: string;

    @IsNotEmpty()
    quizId: number;
}