import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateBiologySubTopics1762996640650 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (12, 'BioChemistry')
                (13, 'Botanics')
                (12, 'Cytology')
                (12, 'Embryology')
                (12, 'FactorsThatImpactPhotoSynthesis')
                (12, 'Fermentation')
                (12, 'Photosynthesis')
                (12, 'AerobicRespiration')
                (13, 'Biomes')
                (13, 'BioGeoChemicalCycles')
                (13, 'Unbalances')
                (13, 'EnergyFluxes')
                (13, 'Introduction')
                (13, 'Polution')
                (13, 'EcologicalRelations')
                (13, 'EcologicalSucession')
                (13, 'BioGeoChemicalCycles')
                (14, 'ConceptsAndEvidances')
                (14, 'Speciation')
                (14, 'EvolutionFactors')
                (14, 'PopulationGenes')
                (14, 'EvolutionTheories')
                (14, 'EcologicalSucession')
                (15, 'CirculatorySystem')
                (15, 'DigestiveSystem')
                (15, 'ExcretorySystem')
                (15, 'NervousSystem')
                (15, 'RespiratorySystem')
                (16, 'LethalAndErrorGenes')
                (16, 'GenealogiesAndProbability')
                (16, 'Introduction')
                (16, 'AboSYstemAndPolyAleles')
                (16, 'Sex')
                (16, 'RhSystem')
                (17, 'Skin')
                (17, 'ImuneSystem')
                (17, 'CartilageousAndBoneTissue')
                (17, 'ConjuctiveTissue')
                (17, 'EpitilealTissue')
                (17, 'MuscularTissue')
                (17, 'NervousSystem')
                (17, 'BloodTissue')
                (18, 'DiseasesCausedByRiboViruses')
                (18, 'DiseasesCausedByRetroViruses')
                (18, 'Introduction')
                (18, 'Virus')
                (19, 'Cariotype')
                (19, 'StemCells')
                (19, 'CelularCycleAndCancer')
                (19, 'Meiosis')
                (19, 'Mitosis')
                (19, 'Nucleus')
                (20, 'OvarianCycle')
                (20, 'Fecundation')
                (20, 'GametGenesis')
                (20, 'ReproductiveSystem')
                (21, 'BioChemistry')
        `);      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
