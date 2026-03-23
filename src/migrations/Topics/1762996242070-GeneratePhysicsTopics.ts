import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratePhysicsTopics1762996242070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const physics_code_bd = await queryRunner.query(`Select "Id" from "Subjects" where "SubjectName" = 'Physics'`)

        const physics_id = physics_code_bd[0].Id;

        await queryRunner.query(`
            INSERT INTO "Topics" ("SubjectId", "TopicName")
            VALUES 
		        (${physics_id}, 'Cinematics'),
                (${physics_id}, 'Dinamics'),
                (${physics_id}, 'ElectroDynamics'),
                (${physics_id}, 'ElectroStatics'),
                (${physics_id}, 'Static'),
                (${physics_id}, 'Gravitation'),
                (${physics_id}, 'HydroDynamics'),
                (${physics_id}, 'HydroStatics'),
                (${physics_id}, 'Ondulatory'),
                (${physics_id}, 'Optics'),
                (${physics_id}, 'Thermology')
        `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
