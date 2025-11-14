import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratePhysicsTopics1762996242070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (5, 'Cinematics')
                (5, 'Dinamics')
                (5, 'ElectroDynamics')
                (5, 'ElectroStatics')
                (5, 'Static')
                (5, 'Gravitation')
                (5, 'HydroDynamics')
                (5, 'HydroStatics')
                (5, 'Ondulatory')
                (5, 'Optics')
                (5, 'Thermology')
        `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
