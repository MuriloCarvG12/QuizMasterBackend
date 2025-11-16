import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateGeographySubTopics1762997044409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (70, 'America')
                    (2, 'Biosphere')
                    (3, 'ModernAge')
                    (3, 'Demography')
                    (3, 'CapitalismPhases')
                    (3, 'EnergySources')
                    (3, 'AgrarianGeography')
                    (3, 'Geology')
                    (3, 'GeoPolitics')
                    (3, 'Globalization')
                    (3, 'Hidrosphere')
                    (3, 'Industry')
                    (3, 'Enviroment')
                    (3, 'Transports')
                    (3, 'Urbanization')
                    (3, 'JapanIndiaAsianTigers')
                    (3, 'BrazilRegionalization')
            `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
