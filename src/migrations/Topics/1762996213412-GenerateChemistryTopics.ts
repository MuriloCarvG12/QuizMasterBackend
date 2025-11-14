import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateChemistryTopics1762996213412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (3, 'ElectroChemistry')
                (3, 'Equilibrium')
                (3, 'Stoichiometry')
                (3, 'Oxygenated Functions')
                (3, 'Gases')
                (3, 'ChemicalBonds')
                (3, 'NOX')
                (3, 'Kinetics')
                (3, 'ColigativeProperties')
                (3, 'PhysicalChemicalOfOrganicalCompounds')
                (3, 'EnviromentalChemistry')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
