import { MigrationInterface, QueryRunner } from "typeorm";

export class OrganicChemistry1763078583515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        const organic_chemistry_code_bd = await queryRunner.query('Select Id from Subjects where SubjectName = "OrganicChemistry"')

        const organic_chemistry_id = organic_chemistry_code_bd[0].Id;

        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                (${organic_chemistry_id}, 'Introduction'),
                (${organic_chemistry_id}, 'Isomery'),
                (${organic_chemistry_id}, 'NitrogenFunctions'),
                (${organic_chemistry_id}, 'OxygenatedFunctions'),
                (${organic_chemistry_id}, 'HydroCarbons')
            `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
