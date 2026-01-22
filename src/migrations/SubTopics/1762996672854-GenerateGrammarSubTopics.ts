import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId";

export class GenerateGrammarSubTopics1762996672854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const PronounsTopicId =
        await selectTopicId(queryRunner, "Pronouns");

        const NameClassesTopicId =
        await selectTopicId(queryRunner, "NameClasses");

        const VerbClassesTopicId =
        await selectTopicId(queryRunner, "VerbClasses");

        const RelationalClassesTopicId =
        await selectTopicId(queryRunner, "RelationalClasses");

        const CohesionTopicId =
        await selectTopicId(queryRunner, "Cohesion");

        const PronomialPlacementTopicId =
        await selectTopicId(queryRunner, "PronominalPlacement");

        const AgreementTopicId =
        await selectTopicId(queryRunner, "Agreement");

        const StylisticsTopicId =
        await selectTopicId(queryRunner, "Stylistics");

        const WordFormationTopicId =
        await selectTopicId(queryRunner, "WordFormation");

        const FunctionsOfQueAndSeTopicId =
        await selectTopicId(queryRunner, "FunctionsOfQueAndSe");

        const OrtographyTopicId =
        await selectTopicId(queryRunner, "Orthography");

        const CompoundPeriodTopicId =
        await selectTopicId(queryRunner, "CompoundPeriod");

        const PunctuationTopicId =
        await selectTopicId(queryRunner, "Punctuation");

        const RegencyAndCraseTopicId =
        await selectTopicId(queryRunner, "RegencyAndCrase");

        const AcessoryTermsTopicId =
        await selectTopicId(queryRunner, "AccessoryTerms");

        const EssentialTermsTopicId =
        await selectTopicId(queryRunner, "EssentialTerms");

        const IntegrantTermsTopicId =
        await selectTopicId(queryRunner, "IntegrantTerms");

        await queryRunner.query(`
            INSERT INTO "SubTopics" ("SubjectId", "TopicName")
            VALUES 
                (${PronounsTopicId}, 'Pronoums')
                (${NameClassesTopicId}, 'NameClasses')
                (${VerbClassesTopicId}, 'VerbClasses')
                (${RelationalClassesTopicId}, 'RelationalClasses')
                (${CohesionTopicId}, 'Cohesion')
                (${PronomialPlacementTopicId}, 'PronomialPlacement')
                (${AgreementTopicId}, 'Agreement')
                (${StylisticsTopicId}, 'Stylistics')
                (${WordFormationTopicId}, 'WordFormation')
                (${FunctionsOfQueAndSeTopicId}, 'FunctionsOfQueAndSe')
                (${OrtographyTopicId}, 'Ortography')
                (${CompoundPeriodTopicId}, 'CompoundPeriod')
                (${PunctuationTopicId}, 'Punctuation')
                (${RegencyAndCraseTopicId}, 'RegencyAndCrase')
                (${AcessoryTermsTopicId}, 'AcessoryTerms')
                (${EssentialTermsTopicId}, 'EssentialTerms')
                (${IntegrantTermsTopicId}, 'IntegrantTerms')
        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
