import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateLiteratureTopics1762996259725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const brazilian_history_code_bd = await queryRunner.query('Select Id from Subjects where SubjectName = "BrazilianHistory"');

        const brazilian_history_id = brazilian_history_code_bd[0].Id;

        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (${brazilian_history_id}, 'Colony'),
                    (${brazilian_history_id}, 'Empire'),
                    (${brazilian_history_id}, 'Republic')
            `);  
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
