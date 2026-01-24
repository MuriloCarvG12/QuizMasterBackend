import { MigrationInterface, QueryRunner } from "typeorm";

export class TableSubjects1758146355205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(
            `create table if not exists "Subjects" 
            (
                "Id" serial primary key, 
                "SubjectName" varchar(50) not null 
            )`
           
         )    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS subjects
        `);
    }

}
