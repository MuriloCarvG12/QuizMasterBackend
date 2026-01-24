import { MigrationInterface, QueryRunner } from "typeorm";

export class TableQuestions1758146451813 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table if not exists Questions(
            "Id" serial primary key,
            "SubjectId" integer not null,
            "TopicId" integer not null,
            "SubTopicId" integer not null,
            "ImageUrl" text,
            "QuestionText" text,
            "QuestionPrompt" text not null,
            "QuestionAltA" text not null,
            "QuestionAltB" text not null,
            "QuestionAltC" text not null,
            "QuestionAltD" text not null,
            "QuestionAltE" text,
            "CorrectAlternative" char,
            "QuestionDifficulty" varchar(20),
            constraint Subject_Fk foreign key ("SubjectId") references "Subjects"("Id"),
            constraint Topic_Fk foreign key ("TopicId") references "Topics"("Id"),
            constraint SubTopic_Fk foreign key ("SubTopicId") references "SubTopics"("Id")
            )
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
