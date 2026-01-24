import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId.js";

export class GenerateGeographySubTopics1762997044409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const america_code = await selectTopicId(queryRunner, "America");
        const biosphere_code = await selectTopicId(queryRunner, "Biosphere");
        const europe_code = await selectTopicId(queryRunner, "Europe");
        const demography_code = await selectTopicId(queryRunner, "Demography");
        const capitalism_phases_code = await selectTopicId(queryRunner, "CapitalismPhases");
        const energy_sources_code = await selectTopicId(queryRunner, "EnergySources");
        const agrarian_geography_code = await selectTopicId(queryRunner, "AgrarianGeography");
        const geology_code = await selectTopicId(queryRunner, "Geology");
        const geopolitics_code = await selectTopicId(queryRunner, "GeoPolitics");
        const globalization_code = await selectTopicId(queryRunner, "Globalization");
        const hidrosphere_code = await selectTopicId(queryRunner, "Hidrosphere");
        const industry_code = await selectTopicId(queryRunner, "Industry");
        const environment_code = await selectTopicId(queryRunner, "Enviroment");
        const transports_code = await selectTopicId(queryRunner, "Transports");
        const urbanization_code = await selectTopicId(queryRunner, "Urbanization");
        const japan_india_asian_tigers_code = await selectTopicId(queryRunner, "JapanIndiaAsianTigers");
        const brazil_regionalization_code = await selectTopicId(queryRunner, "BrazilRegionalization");

        await queryRunner.query(`
            INSERT INTO "SubTopics" ("TopicId", "SubTopicName")
                VALUES 
                    (${america_code}, 'SouthAmerica'),
                    (${america_code}, 'CentralAmerica'),
                    (${america_code}, 'NorthAmerica'),
                    (${biosphere_code}, 'WorldBiomes'),
                    (${biosphere_code}, 'MorphoClimaticDomainsBrazil'),
                    (${demography_code}, 'VegetativeBrazilianGrowth'),
                    (${demography_code}, 'PolulationComposition'),
                    (${demography_code}, 'PopulationalGrowth'),
                    (${demography_code}, 'AgeStructure'),
                    (${demography_code}, 'AgePiramid'),
                    (${demography_code}, 'IDH'),
                    (${demography_code}, 'SocialIndicators'),
                    (${demography_code}, 'MigrationsAndInternationalMigrations'),
                    (${demography_code}, 'ExternalMigrations'),
                    (${demography_code}, 'InternalMigrations'),
                    (${demography_code}, 'PEA'),
                    (${europe_code}, 'EuropePhysicalAspects'),
                    (${europe_code}, 'EuropeDemography'),
                    (${europe_code}, 'EuropeEconomy'),
                    (${europe_code}, 'EuropeGeoPolitics'),
                    (${capitalism_phases_code}, 'CapitalismPhases'),
                    (${energy_sources_code}, 'EnergySources'),
                    (${energy_sources_code}, 'EnergySourcesBrazil'),
                    (${agrarian_geography_code}, 'Agriculture'),
                    (${agrarian_geography_code}, 'FundiaryStructure'),
                    (${agrarian_geography_code}, 'Extrativism'),
                    (${agrarian_geography_code}, 'AgriculturalProductionAndPecuary'),
                    (${geology_code}, 'InternalStructureAndGeologicEras'),
                    (${geology_code}, 'GeologyAndBrazilianTerrain'),
                    (${geology_code}, 'FloorIntemperism'),
                    (${geopolitics_code}, 'OldOrder'),
                    (${geopolitics_code}, 'NewOrder'),
                    (${globalization_code}, 'EconomicalBlocks'),
                    (${globalization_code}, 'ExternalCommerce'),
                    (${globalization_code}, 'GlobalizationProcess'),
                    (${hidrosphere_code}, 'HidrographyConcepts'),
                    (${hidrosphere_code}, 'BrazilianHidrography'),
                    (${industry_code}, 'Industry'),
                    (${industry_code}, 'BrazilianIndustry'),
                    (${environment_code}, 'GlobalWarming'),
                    (${environment_code}, 'Deforesting'),
                    (${environment_code}, 'EnviromentHistory'),
                    (${environment_code}, 'EnviromentProblems'),
                    (${transports_code}, 'Transports'),
                    (${transports_code}, 'BrazilianTransports'),
                    (${urbanization_code}, 'UrbanizationConcepts'),
                    (${urbanization_code}, 'UrbanizationHistoric'),
                    (${urbanization_code}, 'BrazilianUrbanizationProblems'),
                    (${urbanization_code}, 'BrazilianUrbanization'),
                    (${japan_india_asian_tigers_code}, 'JapanIndiaAsianTigers'),
                    (${brazil_regionalization_code}, 'BrazilianRegionalization')
            `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
