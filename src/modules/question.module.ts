import { Module } from "@nestjs/common";
import { questionProviders } from "src/config/question.providers";
import { quizProviders } from "src/config/quiz.providers";
import { QuestionController } from "src/controllers/question.controller";
import { QuestionRepository } from "src/repositories/question.repository";
import { QuestionService } from "src/services/question.service";
import { QuizService } from "src/services/quiz.service";
import { DatabaseModule } from "./database.module";

@Module({
    imports:[DatabaseModule,QuestionRepository],
    controllers:[ QuestionController],
    providers:[QuestionService,...questionProviders,QuizService,...quizProviders]
})
export class QuestionModule {

}