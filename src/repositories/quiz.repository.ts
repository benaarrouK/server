import { Quiz } from "src/entities/quiz.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz>{}