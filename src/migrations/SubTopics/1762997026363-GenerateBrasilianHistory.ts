import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId.js";

export class GenerateBrasilianHistory1762997026363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const brasilian_history_colony_code =  
        await selectTopicId(queryRunner, "Colony");
        
        const brasilian_history_empire_code =  
        await selectTopicId(queryRunner, "Empire");

        const brasilian_history_republic_code =  
        await selectTopicId(queryRunner, "Republic");

        await queryRunner.query(`
            INSERT INTO "SubTopics" ("TopicId", "SubTopicName")
                VALUES
                    (${brasilian_history_colony_code}, 'CaptaincyAndSlaveEconomy'),
                    (${brasilian_history_colony_code}, 'DutchInvasionsAndHibericUnion'),
                    (${brasilian_history_colony_code}, 'NativistRevolts'),
                    (${brasilian_history_colony_code}, 'JoaninePeriod'),
                    (${brasilian_history_colony_code}, 'MiningAndPombalinePeriod'),
                    (${brasilian_history_colony_code}, 'ColonialPeriodDiscovery'),
                    (${brasilian_history_colony_code}, 'FrenchColonizationAndJesuits'),
                    (${brasilian_history_empire_code}, 'FirstReign'),
                    (${brasilian_history_empire_code}, 'SecondReign'),
                    (${brasilian_history_empire_code}, 'RegencyReign'),
                    (${brasilian_history_republic_code}, 'Dictatorship'),
                    (${brasilian_history_republic_code}, 'VargasEra'),
                    (${brasilian_history_republic_code}, 'SwordRepublic'),
                    (${brasilian_history_republic_code}, 'DemocraticAndLiberalRepublic'),
                    (${brasilian_history_republic_code}, 'OligarquicRepublic'),
                    (${brasilian_history_republic_code}, 'RepublicRevolutions')
            `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
