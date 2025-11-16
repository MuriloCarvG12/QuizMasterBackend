import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateHistorySubTopics1762997037237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (65, 'HistoryAncientAge')
                    (66, 'HistoryMediumAge')
                    (67, 'HistoryModernAge')
                    (68, 'HistoryContemporaryAge')
                    (69, 'HistoryHistografy')
            `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
