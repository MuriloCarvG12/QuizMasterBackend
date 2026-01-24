import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId.js";

export class GenerateHistorySubTopics1762997037237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const ancient_age_history_code = await selectTopicId(queryRunner, "AncientAge");
        const medium_age_history_code = await selectTopicId(queryRunner, "MiddleAge");
        const modern_age_history_code = await selectTopicId(queryRunner, "ModernAge");
        const contemporary_age_history_code = await selectTopicId(queryRunner, "ContemporaryAge");
        const histografy_history_code = await selectTopicId(queryRunner, "Histografy");

        await queryRunner.query(`
            INSERT INTO "SubTopics" ("TopicId", "SubTopicName")
                VALUES 
                    (${ancient_age_history_code}, 'Greece'),
                    (${ancient_age_history_code}, 'MesopotamiaAndEgypt'),
                    (${ancient_age_history_code}, 'PreHistory'),
                    (${ancient_age_history_code}, 'Rome'),
                    (${medium_age_history_code}, 'EarlyMediumAge'),
                    (${medium_age_history_code}, 'BizantineSacroEmpire'),
                    (${medium_age_history_code}, 'Feudalism'),
                    (${medium_age_history_code}, 'IslamismAfrica'),
                    (${modern_age_history_code}, 'MercantilismAbsolutismNationalStates'),
                    (${modern_age_history_code}, 'UsaHistory'),
                    (${modern_age_history_code}, 'IluminismDespotism'),
                    (${modern_age_history_code}, 'IndustrialRevolution'),
                    (${modern_age_history_code}, 'PreColombianCivilizations'),
                    (${modern_age_history_code}, 'FrenchRevolutionNapoleonEmpire'),
                    (${modern_age_history_code}, 'EnglishRevolutionsReligiousReforms'),
                    (${contemporary_age_history_code}, 'ColdWar'),
                    (${contemporary_age_history_code}, 'Imperialism'),
                    (${contemporary_age_history_code}, 'NazismFacism'),
                    (${contemporary_age_history_code}, 'WW1'),
                    (${contemporary_age_history_code}, 'WW2'),
                    (${histografy_history_code}, 'HistoryHistografy')
            `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
