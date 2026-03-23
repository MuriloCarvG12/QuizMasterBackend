
import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv";

dotenv.config(); // Load .env variables

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: process.env.NODE_ENV === 'development' ? true : false ,
    entities: [`src/entities/*.ts`],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
    migrationsRun: process.env.NODE_ENV === "production" ? true : false
})

export default AppDataSource