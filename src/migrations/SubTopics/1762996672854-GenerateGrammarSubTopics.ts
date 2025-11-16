import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateGrammarSubTopics1762996672854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (45, 'Pronoums')
                (46, 'NameClasses')
                (47, 'VerbClasses')
                (48, 'RelationalClasses')
                (49, 'Cohesion')
                (50, 'PronomialPlacement')
                (51, 'Agreement')
                (52, 'Stylistics')
                (53, 'WordFormation')
                (54, 'FunctionsOfQueAndSe')
                (55, 'Ortography')
                (56, 'CompoundPeriod')
                (57, 'Punctuation')
                (58, 'RegencyAndCrase')
                (59, 'AcessoryTerms')
                (60, 'EssentialTerms')
                (61, 'IntegrantTerms')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
