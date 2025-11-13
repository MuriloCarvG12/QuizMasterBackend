import { MigrationInterface, QueryRunner } from "typeorm";

export class OrganicChemistry1763075217585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (1, 'Introduction')
                    (2, 'Isomery')
                    (3, 'NitrogenFunctions')
                    (3, 'OxygenatedFunctions')
                    (3, 'HidroCarbons')
            `);    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
