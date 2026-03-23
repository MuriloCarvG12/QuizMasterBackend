import { MigrationInterface, QueryRunner } from "typeorm";

export class TableImages1769638598271 implements MigrationInterface {
    name = 'TableImages1769638598271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "images" (
            "Id" SERIAL PRIMARY KEY,
            "QuestionId" INTEGER NOT NULL,
            "ImageUrl" TEXT NOT NULL,

            CONSTRAINT "QuestionId_Fk"
            FOREIGN KEY ("QuestionId")
            REFERENCES "Questions"("Id")
            ON DELETE CASCADE
            );
            `);


    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
