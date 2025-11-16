import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateGeographySubTopics1762997044409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
                VALUES 
                    (70, 'CentralAmerica')
                    (70, 'NorthAmerica')
                    (70, 'SouthAmerica')
                    (71, 'WorldBiomes')
                    (71, 'BrazilianMorphoclimaticDomain')
                    (72, 'BrazilianVegetativeGrowth')
                    (72, 'BrazilianPopulationComposition')
                    (72, 'PopulationalGrowthAndDemographicTransition')
                    (72, 'EtaritarianStructureAndPiramids')
                    (72, 'EtaritarianStructure')
                    (72, 'IDH')
                    (72, 'SocialIndicators')
                    (72, 'MigrationsAndInternationalMigrations')
                    (72, 'ExternalMigrations')
                    (72, 'InternalMigrations')
                    (72, 'PEA')
                    (73, 'EuropePhysicalAspects')
                    (73, 'EuropeDemography')
                    (73, 'EuropeEconomy')
                    (73, 'EuropeGeoPolitics')
                    (74, 'CapitalismPhases')
                    (75, 'EnergySources')
                    (75, 'EnergySourcesBrazil')
                    (76, 'Agriculture')
                    (76, 'FundiaryStructure')
                    (76, 'Extrativism')
                    (76, 'AgriculturalAndLiveStockProduction')
                    (77, 'InternalStructureAndGeologicalEras')
                    (77, 'GeologyAndBrazilianTerrain')
                    (77, 'GroundIntemperism')
                    (78, 'OldGeopoliticalOrder')
                    (78, 'NewGeopoliticalOrder')
                    (79, 'EconomicalBlocks')
                    (79, 'ExternalCommerce')
                    (79, 'GlobalizationProcess')
                    (80, 'GeneralHidrography')
                    (80, 'BrazilianHidrography')
                    (81, 'BrazilianIndustry')
                    (81, 'Generalndustry')
                    (82, 'GlobalWarming')
                    (82, 'Deforestation')
                    (82, 'EnviromentalHistory')
                    (82, 'EnviromentalProblems')
                    (83, 'BrazilianTransport')
                    (83, 'GeneralTransport')
                    (84, 'UrbanizationConcepts')
                    (84, 'UrbanizationHistorical')
                    (84, 'BrazilianUrbanProblems')
                    (84, 'BrazilianUrbanization')
                    (85, 'JapanIndiaAsianTigers')
                    (86, 'BrazilianRegionalization')
            `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
