import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateChemistrySubTopics1762996651184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (22, 'Electrolysis')
                (22, 'Batteries')
                (23, 'EquilibriumConstant')
                (24, 'Dislocation')
                (24, 'IonicBalance')
                (24, 'Hydrolysis')
                (25, 'StoichiometryFactors')
                (25, 'StoichiometryFormulas')
                (25, 'StoichiometryUnits')
                (26, 'OxygenatedFunctionsSaltsAndBases')
                (26, 'OxygenatedFunctionsAcidsAndBases')
                (26, 'OxygenatedFunctionsOxideStudies')
                (26, 'OxygenatedFunctionsInorganicReactions')
                (27, 'Gases')
                (28, 'IntermolecularStrenghts')
                (28, 'HibridizationAndPolarization')
                (28, 'Bonds')
                (29, 'NoxCalculus')
                (29, 'NoxRedox')
                (29, 'NoxReductionOxidation')
                (30, 'Kinetics')
                (31, 'ColigativeProperties')
                (32, 'PhysicalChemicalOfOrganicalCompounds')
                (33, 'EnviromentalChemistry')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
