import { Inject, Injectable } from "@nestjs/common";
import { CreateQuizDto } from "src/DTO/CreateQuiz.dto";
import { QuizRepository } from "src/repositories/quiz.repository";

@Injectable()
export class QuizService{
    constructor(
        @Inject("QUIZ_REPOSITORY") 
        private quizRepository : QuizRepository,
        
    ){}

    getAllQuiz(){
        return [1,2,3,"hello"];
    }

    async getQuizById(id){
        return await this.quizRepository.findOne(id);
    }

   async createQuiz(quiz : CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}