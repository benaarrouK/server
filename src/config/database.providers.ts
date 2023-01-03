import { DataSource } from "typeorm"

export const databaseProviders = [ 
    {
        provide : "DATA_SOURCE",
        useFactory:async() => {
            const dataSourse = new DataSource({
                type : "mysql",
                host : "localhost",
                port: 3306,
                database: "quiz",
                username : "root",
                password : "root",
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize : true
            });

            return dataSourse.initialize();
        }
    }
]