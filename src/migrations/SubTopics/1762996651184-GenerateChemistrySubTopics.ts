import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId.js";

export class GenerateChemistrySubTopics1762996651184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                
        const ElectroChemistryTopicId =
        await selectTopicId(queryRunner, "ElectroChemistry");

        const EquilibriumTopicId =
        await selectTopicId(queryRunner, "Equilibrium");

        const StoichiometryTopicId =
        await selectTopicId(queryRunner, "Stoichiometry");

        const GasesTopicId =
        await selectTopicId(queryRunner, "Gases");

        const ChemicalBondsTopicId =
        await selectTopicId(queryRunner, "ChemicalBonds");

        const NOXTopicId =
        await selectTopicId(queryRunner, "NOX");

        const KineticsTopicId =
        await selectTopicId(queryRunner, "Kinetics");

        const ColigativePropertiesTopicId =
        await selectTopicId(queryRunner, "ColigativeProperties");

        const PhysicalChemicalOfOrganicalCompoundsTopicId =
        await selectTopicId(queryRunner, "PhysicalChemicalOfOrganicalCompounds");

        const EnviromentalChemistryTopicId =
        await selectTopicId(queryRunner, "EnviromentalChemistry");  
        
        const OrganicChemistryIntroductionTopicId =
        await selectTopicId(queryRunner, "Introduction");

        const IsomerismTopicId =
        await selectTopicId(queryRunner, "Isomery");

        const NitrogenFunctionsTopicId =
        await selectTopicId(queryRunner, "NitrogenFunctions");

        const OxygenatedFunctionsTopicId =
        await selectTopicId(queryRunner, "OxygenatedFunctions");

        const HydrocarbonsTopicId =
        await selectTopicId(queryRunner, "HydroCarbons");
    
        await queryRunner.query(`
            INSERT INTO "SubTopics" ("TopicId", "SubTopicName")
            VALUES 
                (${ElectroChemistryTopicId}, 'Electrolysis'),
                (${ElectroChemistryTopicId}, 'Batteries'),
                (${EquilibriumTopicId}, 'EquilibriumConstant'),
                (${EquilibriumTopicId}, 'Dislocation'),
                (${EquilibriumTopicId}, 'IonicBalance'),
                (${EquilibriumTopicId}, 'Hydrolysis'),
                (${StoichiometryTopicId}, 'StoichiometryFactors'),
                (${StoichiometryTopicId}, 'StoichiometryFormulas'),
                (${StoichiometryTopicId}, 'StoichiometryUnits'),
                (${OxygenatedFunctionsTopicId}, 'OxygenatedFunctionsSaltsAndBases'),
                (${OxygenatedFunctionsTopicId}, 'OxygenatedFunctionsAcidsAndBases'),
                (${OxygenatedFunctionsTopicId}, 'OxygenatedFunctionsOxideStudies'),
                (${OxygenatedFunctionsTopicId}, 'OxygenatedFunctionsInorganicReactions'),
                (${GasesTopicId}, 'Gases'),
                (${ChemicalBondsTopicId}, 'IntermolecularStrenghts'),
                (${ChemicalBondsTopicId}, 'HibridizationAndPolarization'),
                (${ChemicalBondsTopicId}, 'Bonds'),
                (${NOXTopicId}, 'NoxCalculus'),
                (${NOXTopicId}, 'NoxRedox'),
                (${NOXTopicId}, 'NoxReductionOxidation'),
                (${KineticsTopicId}, 'Kinetics'),
                (${ColigativePropertiesTopicId}, 'ColigativeProperties'),
                (${PhysicalChemicalOfOrganicalCompoundsTopicId}, 'PhysicalChemicalOfOrganicalCompounds'),
                (${EnviromentalChemistryTopicId}, 'EnviromentalChemistry'),
                (${OrganicChemistryIntroductionTopicId}, 'CarbonicChains'),
                (${OrganicChemistryIntroductionTopicId}, 'FunctionsAndOrganicSeries'),
                (${IsomerismTopicId}, 'GeometricIsomery'),
                (${IsomerismTopicId}, 'PlaneIsomery'),
                (${NitrogenFunctionsTopicId}, 'NitrogenFunctions'),
                (${OxygenatedFunctionsTopicId}, 'OxygenatedFunctions'),
                (${HydrocarbonsTopicId}, 'HydroCarbons')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
