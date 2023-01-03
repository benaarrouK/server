import { Question } from "src/entities/question.entity";
import { DataSource } from "typeorm";

export const questionProviders = [
    {
        provide: "QUESTION_REPOSITORY",
        useFactory: (dataSourse:DataSource)=>dataSourse.getRepository(Question),
        inject:["DATA_SOURCE"],
    }
]