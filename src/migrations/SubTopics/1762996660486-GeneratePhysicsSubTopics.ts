import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratePhysicsSubTopics1762996660486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (34, 'HorizontalThrows')
                (34, 'ObliqueThrows')
                (34, 'CircularMovement')
                (34, 'UniformMovementAccelaration')
                (34, 'UniformMovement')
                (34, 'VerticalMovement')
                (34, 'Vectors')
                (35, 'Friction')
                (35, 'Elastics')
                (35, 'CentripetalForce')
                (35, 'Newton')
                (35, 'InclinatedSurfaces')
                (35, 'QuantityOfMovement')
                (35, 'Pulleys')
                (36, 'ResistorAssociation')
                (36, 'Circuits')
                (36, 'ElectricalCurrent')
                (36, 'Generators')
                (36, 'Instruments')
                (36, 'LawsOfOhm')
                (36, 'PotentialEnergy')
                (37, 'ElectricalFields')
                (37, 'Capacitors')
                (37, 'CoulombLaw')
                (37, 'ElectricalPotential')
                (38, 'Statics')
                (39, 'Gravitation')
                (40, 'HydroDynamics')
                (41, 'Density')
                (41, 'Pressure')
                (41, 'ArquimedesPrinciples')
                (41, 'PascalPrinciples')
                (42, 'StringsAndTubes')
                (42, 'OndulatoryPhenomenons')
                (42, 'SonoryPhenomenons')
                (42, 'OndulatoryFundaments')
                (42, 'PhysiologicalPropertiesOfSounds')
                (43, 'SphericalMirrors')
                (43, 'OpticalFundaments')
                (43, 'LensAndVision')
                (43, 'Refraction')
                (44, 'Calorimetry')
                (44, 'Dilatation')
                (44, 'TermoDynamicScales')
                (44, 'TermologyFundaments')
                (44, 'TermologyGases')
                (44, 'TermoDynamics')
                (44, 'HeatTransfer')

        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
