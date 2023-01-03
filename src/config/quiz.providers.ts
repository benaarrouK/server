import { Quiz } from "src/entities/quiz.entity";
import { DataSource } from "typeorm";

export const quizProviders = [
    {
        provide: "QUIZ_REPOSITORY",
        useFactory: (dataSourse:DataSource)=>dataSourse.getRepository(Quiz),
        inject:["DATA_SOURCE"],
    }
]