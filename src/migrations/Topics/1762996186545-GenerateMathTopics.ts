import { MigrationInterface, QueryBuilder, QueryRunner } from "typeorm";

export class GenerateMathTopics1762996186545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const math_code_bd = await queryRunner.query(
            "Select Id from Subjects where  SubjectName = 'Math'"
        )

        const math_id = math_code_bd[0].id;
        
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (${math_id}, 'FirstDegreeFunctions')
                (${math_id}, 'CombinatoryAnalysis')
                (${math_id}, 'Packages')
                (${math_id}, 'Statistics')
                (${math_id}, 'Functions')
                (${math_id}, 'AnalyticalGeometry')
                (${math_id}, 'FlatGeometry')
                (${math_id}, 'Logarithms')
                (${math_id}, 'Probability')
                (${math_id}, 'SecondDegreeFunctions')
                (${math_id}, 'ExponentialFunctions')
        `);         
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
