import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateMathTopics1762996186545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (1, 'FirstDegreeFunctions')
                (1, 'CombinatoryAnalysis')
                (1, 'Packages')
                (1, 'Statistics')
                (1, 'Functions')
                (1, 'AnalyticalGeometry')
                (1, 'FlatGeometry')
                (1, 'Logarithms')
                (1, 'Probability')
                (1, 'SecondDegreeFunctions')
                (1, 'ExponentialFunctions')
        `);         
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
