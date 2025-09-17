import { MigrationInterface, QueryRunner } from "typeorm";

export class TableSubTopics1758146428056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table if not exists SubTopics(
            "Id" serial primary key,
            "TopicId" integer not null,
            "SubTopicName" varchar(50) not null,
            add constraint "Topic_fk" foreign key (TopicId) references "Topics"(Id)
            )
            `) 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
