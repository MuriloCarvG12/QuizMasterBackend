import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateGrammarTopics1762996251077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (9, 'Pronoums')
                (9, 'NameClasses')
                (9, 'VerbClasses')
                (9, 'RelationalClasses')
                (9, 'Cohesion')
                (9, 'PronomialPlacement')
                (9, 'Agreement')
                (9, 'Stylistics')
                (9, 'WordFormation')
                (9, 'FunctionsOfQueAndSe')
                (9, 'Ortography')
                (9, 'CompoundPeriod')
                (9, 'Punctuation')
                (9, 'RegencyAndCrase')
                (9, 'AcessoryTerms')
                (9, 'EssentialTerms')
                (9, 'IntegrantTerms')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
