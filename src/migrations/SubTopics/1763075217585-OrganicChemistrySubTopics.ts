import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId";

export class OrganicChemistry1763075217585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const OrganicChemistryIntroductionTopicId =
        await selectTopicId(queryRunner, "Introduction");

        const IsomerismTopicId =
        await selectTopicId(queryRunner, "Isomery");

        const NitrogenFunctionsTopicId =
        await selectTopicId(queryRunner, "NitrogenFunctions");

        const OxygenatedFunctionsTopicId =
        await selectTopicId(queryRunner, "OxygenatedFunctions");

        const HydrocarbonsTopicId =
        await selectTopicId(queryRunner, "Hydrocarbons");

        await queryRunner.query(`
            INSERT INTO "SubTopics" ("SubjectId", "TopicName")
                VALUES 
                    (${OrganicChemistryIntroductionTopicId}, 'CarbonicChains')
                    (${OrganicChemistryIntroductionTopicId}, 'FunctionsAndOrganicSeries')
                    (${IsomerismTopicId}, 'GeometricIsomery')
                    (${IsomerismTopicId}, 'PlaneIsomery')
                    (${NitrogenFunctionsTopicId}, 'NitrogenFunctions')
                    (${OxygenatedFunctionsTopicId}, 'OxygenatedFunctions')
                    (${HydrocarbonsTopicId}, 'HydroCarbons')
            `);    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
