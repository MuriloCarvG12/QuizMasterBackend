import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateBrasilianHistory1762997026363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (62, 'BrazilHistoryColony')
                    (63, 'BrazilHistoryEmpire')
                    (64, 'BrazilHistoryRepublic')
            `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
