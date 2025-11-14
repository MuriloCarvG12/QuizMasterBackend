import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateGeographyTopics1762996307444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (7, 'America')
                    (7, 'Biosphere')
                    (7, 'ModernAge')
                    (7, 'Demography')
                    (7, 'CapitalismPhases')
                    (7, 'EnergySources')
                    (7, 'AgrarianGeography')
                    (7, 'Geology')
                    (7, 'GeoPolitics')
                    (7, 'Globalization')
                    (7, 'Hidrosphere')
                    (7, 'Industry')
                    (7, 'Enviroment')
                    (7, 'Transports')
                    (7, 'Urbanization')
                    (7, 'JapanIndiaAsianTigers')
                    (7, 'BrazilRegionalization')
            `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
