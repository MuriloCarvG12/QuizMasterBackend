import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function listFilesRecursively(dirPath: string) {
 const __dirname = dirname(__filename);
 const full_path = join(__dirname, dirPath)
  try {
    if(!existsSync(full_path))
        {
            throw new Error("The Specified Folder does not exist");
        }

    const files = await readdir(full_path, { recursive: true });
     
    for (let file of files) {
    //   const S_CurrentSubject :string;
    //   const S_CurrentTopic : string;
    //   const S_CurrentSubTopic :string;
    //   [S_CurrentSubject, S_CurrentTopic, S_CurrentSubTopic] = relative.split(/[\\/]/).filter(Boolean);
        if(extname(file) == '.json')
        {
            file = file.replace(__dirname, '');

            const [S_CurrentSubject, S_CurrentTopic, S_CurrentSubTopic] = file.split(/[\\/]/).filter(Boolean);

            console.log('Subject: ' + S_CurrentSubject + '\r\n' + 'Topic: ' + S_CurrentTopic + '\r\n' + 'Subtopic: ' + S_CurrentSubTopic + '\r\n');
        }

       

    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

// Usage example:
listFilesRecursively('/questoes_copiar'); // folder to be used