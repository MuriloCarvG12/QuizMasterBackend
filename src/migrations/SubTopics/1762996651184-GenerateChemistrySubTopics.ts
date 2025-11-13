import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateChemistrySubTopics1762996651184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (1, 'ElectroChemistry')
                (2, 'Equilibrium')
                (3, 'Stoichiometry')
                (4, 'Oxygenated Functions')
                (5, 'Gases')
                (6, 'ChemicalBonds')
                (7, 'NOX')
                (8, 'Kinetics')
                (9, 'ColigativeProperties')
                (10, 'PhysicalChemicalOfOrganicalCompounds')
                (11, 'EnviromentalChemistry')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
