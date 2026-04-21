import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUsers1775410832199 implements MigrationInterface {
    name = 'TableUsers1775410832199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "Users" (
                "Id" SERIAL NOT NULL,
                "Name" text NOT NULL,
                "Email" text NOT NULL,
                "Password" text NOT NULL,
                "QuestionsCompleted" integer NOT NULL DEFAULT 0,
                "ExamsCompleted" integer NOT NULL DEFAULT 0,
                CONSTRAINT "UQ_Users_Email" UNIQUE ("Email"),
                CONSTRAINT "PK_Users_Id" PRIMARY KEY ("Id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }
}