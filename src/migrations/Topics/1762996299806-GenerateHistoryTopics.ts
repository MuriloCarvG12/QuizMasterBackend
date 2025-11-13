import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateHistoryTopics1762996299806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (1, 'AncientAge')
                    (2, 'MediumAge')
                    (3, 'ModernAge')
                    (3, 'ContemporaryAge')
                    (3, 'Histografy')
            `); 
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
