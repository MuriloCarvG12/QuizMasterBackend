import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateGrammarTopics1762996251077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (1, 'Pronoums')
                (2, 'NameClasses')
                (3, 'VerbClasses')
                (4, 'RelationalClasses')
                (5, 'Cohesion')
                (6, 'PronomialPlacement')
                (7, 'Agreement')
                (8, 'Stylistics')
                (9, 'WordFormation')
                (10, 'FunctionsOfQueAndSe')
                (11, 'Ortography')
                (12, 'CompoundPeriod')
                (13, 'Punctuation')
                (14, 'RegencyAndCrase')
                (15, 'AcessoryTerms')
                (16, 'EssentialTerms')
                (17, 'IntegrantTerms')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
