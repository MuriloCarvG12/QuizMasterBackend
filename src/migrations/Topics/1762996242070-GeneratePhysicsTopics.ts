import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratePhysicsTopics1762996242070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
                (1, 'Cinematics')
                (2, 'Dinamics')
                (3, 'ElectroDynamics')
                (4, 'ElectroStatics')
                (5, 'Static')
                (6, 'Gravitation')
                (7, 'HydroDynamics')
                (8, 'HydroStatics')
                (9, 'Ondulatory')
                (10, 'Optics')
                (11, 'Thermology')
        `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
