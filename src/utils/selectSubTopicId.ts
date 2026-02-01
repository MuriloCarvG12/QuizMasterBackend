 import type { QueryRunner } from "typeorm";
 
 export async function selectSubTopicId(
  queryRunner: QueryRunner,
  subTopicName: string
): Promise<number> 
{

    const result = await queryRunner.query(`
                    SELECT "Id" FROM "SubTopics" WHERE "SubTopicName" = $1`,
    [subTopicName]);

    if (!result || result.length === 0) {
    console.warn(`SubTopic not found: ${subTopicName}`);
    return 0;
  }
                
    return result[0].Id
}
