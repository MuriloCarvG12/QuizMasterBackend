import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateLiteratureTopics1762996259725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (6, 'Colony')
                    (6, 'Empire')
                    (6, 'Republic')
            `);  
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
