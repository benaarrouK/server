import { Controller, Post,Body, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "src/DTO/createQuestion.dto";
import { QuestionService } from "src/services/question.service";
import { QuizService } from "src/services/quiz.service";


@Controller('question')
export class QuestionController {

    constructor(private questionService : QuestionService,
        private quizService: QuizService
        ){}
    
    @Post("")
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question:CreateQuestionDto){
        const quiz = await this.quizService.getQuizById(question.quizId);
        return this.questionService.saveQuestion(question,quiz);
    }
}