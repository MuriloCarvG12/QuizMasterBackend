import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateHistoryTopics1762996299806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const history_code_bd = await queryRunner.query('Select Id from Subjects where SubjectName = "History"')

        const history_code_id = history_code_bd[0].Id;
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (${history_code_id}, 'AncientAge'),
                    (${history_code_id}, 'MiddleAge'),
                    (${history_code_id}, 'ModernAge'),
                    (${history_code_id}, 'ContemporaryAge'),
                    (${history_code_id}, 'Histografy')
            `); 
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
