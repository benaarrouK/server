import { Inject, Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "src/DTO/createQuestion.dto";
import { Question } from "src/entities/question.entity";
import { Quiz } from "src/entities/quiz.entity";
import { QuestionRepository } from "src/repositories/question.repository";

@Injectable()
export class QuestionService{

    constructor( @Inject("QUESTION_REPOSITORY")
    private questioRepository: QuestionRepository){ }

    async saveQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>{
        return await this.questioRepository.save({question: question.question, });
    }
}