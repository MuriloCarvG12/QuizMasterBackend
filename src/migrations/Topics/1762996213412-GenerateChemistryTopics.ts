import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateChemistryTopics1762996213412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const chemistry_code_bd = await queryRunner.query(`Select "Id" from "Subjects" where "SubjectName" = 'Chemistry'`)

        const chemistry_id = chemistry_code_bd[0].Id;

        const organic_chemistry_code_bd = await queryRunner.query(`Select "Id" from "Subjects" where "SubjectName" = 'OrganicChemistry'`)

        const organic_chemistry_id = organic_chemistry_code_bd[0].Id;

        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (${chemistry_id}, 'ElectroChemistry'),
                (${chemistry_id}, 'Equilibrium'),
                (${chemistry_id}, 'Stoichiometry'),
                (${chemistry_id}, 'Oxygenated Functions'),
                (${chemistry_id}, 'Gases'),
                (${chemistry_id}, 'ChemicalBonds'),
                (${chemistry_id}, 'NOX'),
                (${chemistry_id}, 'Kinetics'),
                (${chemistry_id}, 'ColigativeProperties'),
                (${chemistry_id}, 'PhysicalChemicalOfOrganicalCompounds'),
                (${chemistry_id}, 'EnviromentalChemistry'),
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
