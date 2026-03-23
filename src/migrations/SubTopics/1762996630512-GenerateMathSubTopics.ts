import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId.js";


export class GenerateMathSubTopics1762996630512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const FirstDegreeFunctionsTopicId = await selectTopicId(queryRunner, "FirstDegreeFunctions")

        const CombinatoryAnalysisTopicId = await selectTopicId(queryRunner, "CombinatoryAnalysis")

        const PackagesTopicId = await selectTopicId(queryRunner, "Packages")
        
        const StatisticsTopicId = await selectTopicId(queryRunner, "Statistics")

        const FunctionsTopicId = await selectTopicId(queryRunner, "Functions")

        const AnalyticalGeometryTopicId = await selectTopicId(queryRunner, "AnalyticalGeometry")

        const FlatGeometryTopicId = await selectTopicId(queryRunner, "FlatGeometry")

        const LogarithmsTopicId = await selectTopicId(queryRunner, "Logarithms")

        const ProbabilityTopicId = await selectTopicId(queryRunner, "Probability")
      
        const SecondDegreeFunctionsTopicId = await selectTopicId(queryRunner, "SecondDegreeFunctions");

        const ExponentialFunctionsTopicId = await selectTopicId(queryRunner, "ExponentialFunctions");
        
        
        await queryRunner.query(`
            INSERT INTO "SubTopics" ("TopicId", "SubTopicName")
            VALUES 
                (${FirstDegreeFunctionsTopicId}, 'FirstDegreeFunctions'),
                (${CombinatoryAnalysisTopicId}, 'CombinatoryAnalysis'),
                (${PackagesTopicId}, 'Packages'),
                (${StatisticsTopicId}, 'Statistics'),
                (${FunctionsTopicId}, 'Functions'),
                (${AnalyticalGeometryTopicId}, 'AnalyticalGeometry'),
                (${FlatGeometryTopicId}, 'FlatGeometry'),
                (${LogarithmsTopicId}, 'Logarithms'),
                (${ProbabilityTopicId}, 'Probability'),
                (${SecondDegreeFunctionsTopicId}, 'SecondDegreeFunctions'),
                (${ExponentialFunctionsTopicId}, 'ExponentialFunctions')
        `);    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
