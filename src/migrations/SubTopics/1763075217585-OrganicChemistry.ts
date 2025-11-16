import { MigrationInterface, QueryRunner } from "typeorm";

export class OrganicChemistry1763075217585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (87, 'CarbonicChains')
                    (87, 'FunctionsAndOrganicSeries')
                    (88, 'GeometricIsomery')
                    (88, 'PlaneIsomery')
                    (89, 'NitrogenatedFunctions')
                    (90, 'OxigenatedFunctions')
                    (89, 'HidroCarbons')
            `);    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
