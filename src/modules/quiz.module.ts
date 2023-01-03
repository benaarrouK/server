import { Module } from '@nestjs/common';
import { quizProviders } from 'src/config/quiz.providers';
import { QuizController } from 'src/controllers/quiz.controller';
import { QuizRepository } from 'src/repositories/quiz.repository';
import { QuizService } from 'src/services/quiz.service';
import { DatabaseModule } from './database.module';

@Module({
    imports : [DatabaseModule, QuizRepository],
    controllers:[QuizController],
    providers:[QuizService,...quizProviders]
})
export class QuizModule {}
