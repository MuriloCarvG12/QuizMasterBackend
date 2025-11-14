import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateHistoryTopics1762996299806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (8, 'AncientAge')
                    (8, 'MediumAge')
                    (8, 'ModernAge')
                    (8, 'ContemporaryAge')
                    (8, 'Histografy')
            `); 
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
