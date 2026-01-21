import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateGrammarTopics1762996251077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const grammar_code_bd = await queryRunner.query('Select Id from Subjects where SubjectName = "Grammar"')

        const grammar_id = grammar_code_bd[0].Id;

        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                    (${grammar_id}, 'Pronouns'),
                    (${grammar_id}, 'NameClasses'),
                    (${grammar_id}, 'VerbClasses'),
                    (${grammar_id}, 'RelationalClasses'),
                    (${grammar_id}, 'Cohesion'),
                    (${grammar_id}, 'PronominalPlacement'),
                    (${grammar_id}, 'Agreement'),
                    (${grammar_id}, 'Stylistics'),
                    (${grammar_id}, 'WordFormation'),
                    (${grammar_id}, 'FunctionsOfQueAndSe'),
                    (${grammar_id}, 'Orthography'),
                    (${grammar_id}, 'CompoundPeriod'),
                    (${grammar_id}, 'Punctuation'),
                    (${grammar_id}, 'RegencyAndCrase'),
                    (${grammar_id}, 'AccessoryTerms'),
                    (${grammar_id}, 'EssentialTerms'),
                    (${grammar_id}, 'IntegrantTerms')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
