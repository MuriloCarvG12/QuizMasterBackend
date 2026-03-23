 import type { QueryRunner } from "typeorm";
 

 export async function selectSubjectId(
  queryRunner: QueryRunner,
  subjectName: string
): Promise<number> 
{


    const result = await queryRunner.query(
            `Select "Id" from "Subjects" where  "SubjectName" = $1`,
    [subjectName]
            )

            
    if (!result || result.length === 0) {
    console.warn(`Subject not found: ${subjectName}`);
    return 0;
  }
                
    return result[0].Id
}
