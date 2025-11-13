import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateLiteratureTopics1762996259725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (1, 'Colony')
                    (2, 'Empire')
                    (3, 'Republic')
            `);  
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
