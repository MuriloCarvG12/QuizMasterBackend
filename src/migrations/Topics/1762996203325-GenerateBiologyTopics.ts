import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateBiologyTopics1762996203325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (1, 'BioEnergetics')
                (2, 'Ecology')
                (3, 'Evolution')
                (4, 'Physiology')
                (5, 'Genetics')
                (6, 'Histology')
                (7, 'MicroBiology')
                (8, 'Nucleus')
                (9, 'HumanReproduction')
                (10, 'BioChemistry')
                (11, 'ExponentialFunctions')
        `);      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
