 import { QueryRunner } from "typeorm";
 

 export async function selectTopicId(
  queryRunner: QueryRunner,
  topicName: string
): Promise<number> 
{

    const result = await queryRunner.query(`
                    SELECT "Id" FROM "Topics" WHERE "TopicName" = ${topicName}
                `);
                
    return result[0].Id
}
