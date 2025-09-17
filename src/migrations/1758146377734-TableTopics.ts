import { MigrationInterface, QueryRunner } from "typeorm";

export class TableTopics1758146377734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(
            `create table if not exists Topics(
            "Id" serial primary key,
            "SubjectId" integer not null,
            "TopicName" varchar(50) not null,
            constraint Subject_fk foreign key ("SubjectId") REFERENCES Subjects("Id")
            )
            `
         )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
