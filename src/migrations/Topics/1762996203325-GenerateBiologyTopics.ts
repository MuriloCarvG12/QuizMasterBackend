import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateBiologyTopics1762996203325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const biology_code_bd = await queryRunner.query(`SELECT "Id" FROM "Subjects" WHERE "Name" = 'Biology'`)

        const biology_id = biology_code_bd[0].Id;
        
         await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (${biology_id}, 'BioEnergetics'),
                (${biology_id}, 'Ecology'),
                (${biology_id}, 'Evolution'),
                (${biology_id}, 'Physiology'),
                (${biology_id}, 'Genetics'),
                (${biology_id}, 'Histology'),
                (${biology_id}, 'MicroBiology'),
                (${biology_id}, 'Nucleus'),
                (${biology_id}, 'HumanReproduction'),
                (${biology_id}, 'BioChemistry')
        `);      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
