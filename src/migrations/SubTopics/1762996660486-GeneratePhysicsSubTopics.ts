import { MigrationInterface, QueryRunner } from "typeorm";
import { selectTopicId } from "../../utils/selectTopicId";

export class GeneratePhysicsSubTopics1762996660486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const CinematicsTopicId =
            await selectTopicId(queryRunner, "Cinematics");

            const DinamicsTopicId =
            await selectTopicId(queryRunner, "Dinamics");

            const ElectroDynamicsTopicId =
            await selectTopicId(queryRunner, "ElectroDynamics");

            const ElectroStaticsTopicId =
            await selectTopicId(queryRunner, "ElectroStatics");

            const StaticTopicId =
            await selectTopicId(queryRunner, "Static");

            const GravitationTopicId =
            await selectTopicId(queryRunner, "Gravitation");

            const HydroDynamicsTopicId =
            await selectTopicId(queryRunner, "HydroDynamics");

            const HydroStaticsTopicId =
            await selectTopicId(queryRunner, "HydroStatics");

            const OndulatoryTopicId =
            await selectTopicId(queryRunner, "Ondulatory");

            const OpticsTopicId =
            await selectTopicId(queryRunner, "Optics");

            const ThermologyTopicId =
            await selectTopicId(queryRunner, "Thermology");

        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                  (${CinematicsTopicId}, 'HorizontalThrows')
                (${CinematicsTopicId}, 'ObliqueThrows')
                (${CinematicsTopicId}, 'CircularMovement')
                (${CinematicsTopicId}, 'UniformMovementAcceleration')
                (${CinematicsTopicId}, 'UniformMovement')
                (${CinematicsTopicId}, 'VerticalMovement')
                (${CinematicsTopicId}, 'Vectors')
                (${DinamicsTopicId}, 'Friction')
                (${DinamicsTopicId}, 'Elastics')
                (${DinamicsTopicId}, 'CentripetalForce')
                (${DinamicsTopicId}, 'Newton')
                (${DinamicsTopicId}, 'InclinatedSurfaces')
                (${DinamicsTopicId}, 'QuantityOfMovement')
                (${DinamicsTopicId}, 'Pulleys')
                (${ElectroDynamicsTopicId}, 'ResistorAssociation')
                (${ElectroDynamicsTopicId}, 'Circuits')
                (${ElectroDynamicsTopicId}, 'ElectricalCurrent')
                (${ElectroDynamicsTopicId}, 'Generators')
                (${ElectroDynamicsTopicId}, 'Instruments')
                (${ElectroDynamicsTopicId}, 'LawsOfOhm')
                (${ElectroStaticsTopicId}, 'PotentialEnergy')
                (${ElectroStaticsTopicId}, 'ElectricalFields')
                (${ElectroStaticsTopicId}, 'Capacitors')
                (${ElectroStaticsTopicId}, 'CoulombLaw')
                (${ElectroStaticsTopicId}, 'ElectricalPotential')
                (${StaticTopicId}, 'Statics')
                (${GravitationTopicId}, 'Gravitation')
                (${HydroDynamicsTopicId}%, 'HydroDynamics')
                (${HydroStaticsTopicId}, 'Density')
                (${HydroStaticsTopicId}, 'Pressure')
                (${HydroStaticsTopicId}, 'ArquimedesPrinciples')
                (${HydroStaticsTopicId}, 'PascalPrinciples')
                (${OndulatoryTopicId}, 'StringsAndTubes')
                (${OndulatoryTopicId}, 'OndulatoryPhenomenons')
                (${OndulatoryTopicId}, 'SonoryPhenomenons')
                (${OndulatoryTopicId}, 'OndulatoryFundaments')
                (${OndulatoryTopicId}, 'PhysiologicalPropertiesOfSounds')
                (${OpticsTopicId}, 'SphericalMirrors')
                (${OpticsTopicId}, 'OpticalFundaments')
                (${OpticsTopicId}, 'LensAndVision')
                (${OpticsTopicId}, 'Refraction')
                (${ThermologyTopicId}, 'Calorimetry')
                (${ThermologyTopicId}, 'Dilatation')
                (${ThermologyTopicId}, 'TermoDynamicScales')
                (${ThermologyTopicId}, 'TermologyFundaments')
                (${ThermologyTopicId}, 'TermologyGases')
                (${ThermologyTopicId}, 'TermoDynamics')
                (${ThermologyTopicId}, 'HeatTransfer')


        `);  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
