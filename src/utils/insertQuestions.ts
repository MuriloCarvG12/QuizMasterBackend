import { existsSync, readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { selectTopicId } from './selectTopicId.js';
import { selectSubjectId } from './selectSubjectId.js';
import { selectSubTopicId } from './selectSubTopicId.js';
import AppDataSource from '../data_source.js';
import { QueryRunner } from 'typeorm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function listFilesRecursively(dirPath: string, queryRunner: QueryRunner) {
  const fullPath = join(__dirname, dirPath);
  if (!existsSync(fullPath)) {
    throw new Error("The specified folder does not exist");
  }

  const entries = await readdir(fullPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = join(fullPath, entry.name);

    if (entry.isDirectory()) {
      await listFilesRecursively(join(dirPath, entry.name), queryRunner); 
    } else if (entry.isFile() && extname(entry.name) === ".json") {
    
        await processFile(entryPath, entry.name, dirPath, queryRunner);
    }
  }
}

async function processFile(fullPath: string, fileName: string, relativeDir: string, queryRunner: QueryRunner) {
 
   
    const parts = join(relativeDir, fileName)
      .split(/[\\/]/)
      .filter(Boolean);

    if (parts.length < 4) {
      console.log("Skipping file, invalid path:", parts);
      return;
    }



    let S_CurrentSubject = parts[1];
    let S_CurrentTopic = parts[2];
    let S_CurrentSubTopic = parts[3];

    console.log("Processing file:", fullPath);
    console.log("Parts:", parts);

    S_CurrentSubTopic = S_CurrentSubTopic.replace(".json", "");

    const I_CurrentSubjectId = await selectSubjectId(queryRunner, S_CurrentSubject);
    const I_CurrentTopicId = await selectTopicId(queryRunner, S_CurrentTopic);
    const I_CurrentSubTopicId = await selectSubTopicId(queryRunner, S_CurrentSubTopic);

    const data =  readFileSync(fullPath, 'utf8');
    const jsonObject =  JSON.parse(data);

    for (const question of jsonObject.questions)
      {
        let QuestionId = question.questionId;
        let QuestionText = question.questionText ?? "";
        let Question = question.question ?? "";
        let QuestionImages = question.images ?? [];
        if (!Array.isArray(QuestionImages)) {
          QuestionImages = [];
        }

        let QuestionAlternatives = question.alternatives ?? {};
        if (typeof QuestionAlternatives === 'object' && !Array.isArray(QuestionAlternatives)) {
          QuestionAlternatives = Object.values(QuestionAlternatives);
        }

        let QuestionAnswer = question.answer ?? "";
        const alternativeA = QuestionAlternatives[0]
        const alternativeB = QuestionAlternatives[1]
        const alternativeC = QuestionAlternatives[2]
        const alternativeD = QuestionAlternatives[3]
        const alternativeE = QuestionAlternatives[4] ?? ""

        const result = await queryRunner.query(
        `
        INSERT INTO "Questions"
        ("SubjectId", "TopicId", "SubTopicId",
        "QuestionId", "QuestionText", "QuestionPrompt",
        "QuestionAltA", "QuestionAltB", "QuestionAltC",
        "QuestionAltD", "QuestionAltE",
        "CorrectAlternative")
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
        RETURNING "Id"
        `,
        [
          I_CurrentSubjectId,
          I_CurrentTopicId,
          I_CurrentSubTopicId,
          QuestionId,
          QuestionText,
          Question,
          alternativeA,
          alternativeB,
          alternativeC,
          alternativeD,
          alternativeE,
          QuestionAnswer
        ]
      );

      const insertedQuestionId = result[0].Id;

        for (const image of QuestionImages) {
        await queryRunner.query(
          `
          INSERT INTO "images"
          ("QuestionId", "ImageUrl")
          VALUES ($1,$2)
          `,
          [insertedQuestionId, image]
        );
      }

    } // ✅ closes: for (const question)

} // ✅ closes: processFile function

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

async function main() {
  try {
    console.log("Initializing DB...");
    await AppDataSource.initialize();

    console.log("Connecting queryRunner...");
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    console.log("Starting file scan...");
    await listFilesRecursively("/questoes_copiar", queryRunner);

    console.log("Releasing queryRunner...");
    await queryRunner.release();

    console.log("Done.");
  } catch (err) {
    console.error("REAL ERROR:", err);
  }
}

main();

//npm run insert:questions