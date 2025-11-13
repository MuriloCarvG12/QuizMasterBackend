import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateBiologySubTopics1762996640650 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (1, 'FirstDegreeFunctions')
                (2, 'CombinatoryAnalysis')
                (3, 'Packages')
                (4, 'Statistics')
                (5, 'Functions')
                (6, 'AnalyticalGeometry')
                (7, 'FlatGeometry')
                (8, 'Logarithms')
                (9, 'Probability')
                (10, 'SecondDegreeFunctions')
                (11, 'ExponentialFunctions')
        `);      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
