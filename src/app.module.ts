import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './modules/question.module';
import { QuizModule } from './modules/quiz.module';

@Module({
  imports:[QuizModule,QuestionModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
