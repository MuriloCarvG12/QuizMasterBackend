import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateBiologyTopics1762996203325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (2, 'BioEnergetics')
                (2, 'Ecology')
                (2, 'Evolution')
                (2, 'Physiology')
                (2, 'Genetics')
                (2, 'Histology')
                (2, 'MicroBiology')
                (2, 'Nucleus')
                (2, 'HumanReproduction')
                (2, 'BioChemistry')
                (2, 'ExponentialFunctions')
        `);      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
