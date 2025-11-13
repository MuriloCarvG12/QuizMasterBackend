import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateSubjects1762995811498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Subjects" ("SubjectName")
            VALUES 
                ('Math')
                ('Biology')
                ('Chemistry')
                ('OrganicChemistry')
                ('Physics')
                ('BrazilianHistory')
                ('Geography')
                ('History')
                ('Grammar')
        `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
