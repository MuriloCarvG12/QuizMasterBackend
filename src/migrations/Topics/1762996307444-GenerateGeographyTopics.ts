import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateGeographyTopics1762996307444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const geography_code_bd = await queryRunner.query('Select Id from Subjects where SubjectName = "Geography"')
        
        const geography_code_id = geography_code_bd[0].Id;

        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (${geography_code_id}, 'America'),
                    (${geography_code_id}, 'Biosphere'),
                    (${geography_code_id}, 'ModernAge'),
                    (${geography_code_id}, 'Demography'),
                    (${geography_code_id}, 'CapitalismPhases'),
                    (${geography_code_id}, 'EnergySources'),
                    (${geography_code_id}, 'AgrarianGeography'),
                    (${geography_code_id}, 'Geology'),
                    (${geography_code_id}, 'GeoPolitics'),
                    (${geography_code_id}, 'Globalization'),
                    (${geography_code_id}, 'Hidrosphere'),
                    (${geography_code_id}, 'Industry'),
                    (${geography_code_id}, 'Enviroment'),
                    (${geography_code_id}, 'Transports'),
                    (${geography_code_id}, 'Urbanization'),
                    (${geography_code_id}, 'JapanIndiaAsianTigers'),
                    (${geography_code_id}, 'BrazilRegionalization')
            `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
