 import type  { QueryRunner } from "typeorm";
 
 export async function selectTopicId(
  queryRunner: QueryRunner,
  topicName: string
): Promise<number> 
{

    const result = await queryRunner.query(`
                    SELECT "Id" FROM "Topics" WHERE "TopicName" = $1`,
    [topicName]);

      if (!result || result.length === 0) {
    console.warn(`Topic not found: ${topicName}`);
    return 0;
  }
                
    return result[0].Id
}
