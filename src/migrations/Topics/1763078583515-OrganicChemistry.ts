import { MigrationInterface, QueryRunner } from "typeorm";

export class OrganicChemistry1763078583515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (4, 'Introduction')
                    (4, 'Isomery')
                    (4, 'NitrogenFunctions')
                    (4, 'OxygenatedFunctions')
                    (4, 'HydroCarbons')
            `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
