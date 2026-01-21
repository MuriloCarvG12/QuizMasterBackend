import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId";

export class GenerateBiologySubTopics1762996640650 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

            const BioEnergeticsTopicId = await selectTopicId(queryRunner, "BioEnergetics");

            const EcologyTopicId = await selectTopicId(queryRunner, "Ecology");

            const EvolutionTopicId = await selectTopicId(queryRunner, "Evolution");

            const PhysiologyTopicId = await selectTopicId(queryRunner, "Physiology");

            const GeneticsTopicId = await selectTopicId(queryRunner, "Genetics");

            const HistologyTopicId = await selectTopicId(queryRunner, "Histology");

            const MicroBiologyTopicId = await selectTopicId(queryRunner, "MicroBiology");

            const NucleusTopicId = await selectTopicId(queryRunner, "Nucleus");

            const HumanReproductionTopicId = await selectTopicId(queryRunner, "HumanReproduction");

            const BioChemistryTopicId = await selectTopicId(queryRunner, "BioChemistry");

        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (${BioEnergeticsTopicId}, 'BioChemistry')
                (${EcologyTopicId}, 'Botanics')
                (${BioEnergeticsTopicId}, 'Cytology')
                (${BioEnergeticsTopicId}, 'Embryology')
                (${BioEnergeticsTopicId}, 'FactorsThatImpactPhotoSynthesis')
                (${BioEnergeticsTopicId}, 'Fermentation')
                (${BioEnergeticsTopicId}, 'Photosynthesis')
                (${BioEnergeticsTopicId}, 'AerobicRespiration')
                (${EcologyTopicId}, 'Biomes')
                (${EcologyTopicId}, 'BioGeoChemicalCycles')
                (${EcologyTopicId}, 'Unbalances')
                (${EcologyTopicId}, 'EnergyFluxes')
                (${EcologyTopicId}, 'Introduction')
                (${EcologyTopicId}, 'Polution')
                (${EcologyTopicId}, 'EcologicalRelations')
                (${EcologyTopicId}, 'EcologicalSucession')
                (${EcologyTopicId}, 'BioGeoChemicalCycles')
                (${EvolutionTopicId}, 'ConceptsAndEvidances')
                (${EvolutionTopicId}, 'Speciation')
                (${EvolutionTopicId}, 'EvolutionFactors')
                (${EvolutionTopicId}, 'PopulationGenes')
                (${EvolutionTopicId}, 'EvolutionTheories')
                (${EvolutionTopicId}, 'EcologicalSucession')
                (${PhysiologyTopicId}, 'CirculatorySystem')
                (${PhysiologyTopicId}, 'DigestiveSystem')
                (${PhysiologyTopicId}, 'ExcretorySystem')
                (${PhysiologyTopicId}, 'NervousSystem')
                (${PhysiologyTopicId}, 'RespiratorySystem')
                (${GeneticsTopicId}, 'LethalAndErrorGenes')
                (${GeneticsTopicId}, 'GenealogiesAndProbability')
                (${GeneticsTopicId}, 'Introduction')
                (${GeneticsTopicId}, 'AboSYstemAndPolyAleles')
                (${GeneticsTopicId}, 'Sex')
                (${GeneticsTopicId}, 'RhSystem')
                (${HistologyTopicId}, 'Skin')
                (${HistologyTopicId}, 'ImuneSystem')
                (${HistologyTopicId}, 'CartilageousAndBoneTissue')
                (${HistologyTopicId}, 'ConjuctiveTissue')
                (${HistologyTopicId}, 'EpitilealTissue')
                (${HistologyTopicId}, 'MuscularTissue')
                (${HistologyTopicId}, 'NervousSystem')
                (${HistologyTopicId}, 'BloodTissue')
                (${MicroBiologyTopicId}, 'DiseasesCausedByRiboViruses')
                (${MicroBiologyTopicId}, 'DiseasesCausedByRetroViruses')
                (${MicroBiologyTopicId}, 'Introduction')
                (${MicroBiologyTopicId}, 'Virus')
                (${NucleusTopicId}, 'Cariotype')
                (${NucleusTopicId}, 'StemCells')
                (${NucleusTopicId}, 'CelularCycleAndCancer')
                (${NucleusTopicId}, 'Meiosis')
                (${NucleusTopicId}, 'Mitosis')
                (${NucleusTopicId}, 'Nucleus')
                (${HumanReproductionTopicId}, 'OvarianCycle')
                (${HumanReproductionTopicId}, 'Fecundation')
                (${HumanReproductionTopicId}, 'GametGenesis')
                (${HumanReproductionTopicId}, 'ReproductiveSystem')
                (${BioChemistryTopicId}, 'BioChemistry')
        `);      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
