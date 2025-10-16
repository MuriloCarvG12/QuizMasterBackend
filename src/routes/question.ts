import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Topic } from "../entities/Topic";
import {Subject} from "../entities/Subject";
import { Subtopic } from "../entities/SubTopic";
import { Question } from "../entities/Question";


const QuestionRepository = AppDataSource.getRepository(Question)
const TopicRepository = AppDataSource.getRepository(Topic)
const SubTopicRepository = AppDataSource.getRepository(Subtopic)
const SubjectRepository = AppDataSource.getRepository(Subject)

const questionRouter = Router();

questionRouter.get('/getQuestions' ,async(req:Request, res:Response) => {
    try 
    {

        const QuestionsFound = await QuestionRepository.find();
        return res.status(200).json(QuestionsFound)
        
    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);   
    }
})

questionRouter.get('/getQuestion', async (req:Request, res: Response) => {
    try 
    {
        const QuestionId = req.body.QuestionId;

        if(QuestionId == "") 
            {
                return res.status(400).json("No Question has been specified")
            }
        
        const QuestionFound = await QuestionRepository.findOneBy({id: QuestionId})

        if(!QuestionFound)
            {
                return res.status(404).json("Couldn't find the specified question!")
            }

        return res.status(200).json(QuestionFound)
    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);      
    }
})

questionRouter.post('/createQuestion', async (req:Request, res: Response) => {
    try 
    {
        const SubjectId = req.body.SubjectId;
        const TopicId = req.body.TopicId;
        const SubTopicId = req.body.SubTopicId;
        const QuestionPrompt = req.body.QuestionPrompt;
        const QuestionText = req.body.QuestionText;
        const ImageUrl = req.body.ImageUrl;
        const QuestionAltA = req.body.QuestionAltA;
        const QuestionAltB = req.body.QuestionAltB;
        const QuestionAltC = req.body.QuestionAltC;
        const QuestionAltD = req.body.QuestionAltD;
        const QuestionAltE = req.body.QuestionAltE;
        const CorrectAlternative = req.body.CorrectAlternative;
        const QuestionDifficulty = req.body.QuestionDifficulty;

         if(SubjectId == '')
            {
               return res.status(400).json("No Subject has been specified") 
            }
            
        if(TopicId == '')
            {
               return res.status(400).json("No Topic has been specified") 
            }
            
        if(SubTopicId == '')
            {
               return res.status(400).json("No SubTopic has been specified") 
            }
            
        if(QuestionPrompt == '')
            {
               return res.status(400).json("No Question Prompt has been specified") 
            }
            
         if(QuestionText == '')
            {
               return res.status(400).json("No Question Text has been specified") 
            }

         if(QuestionAltA == '')
            {
               return res.status(400).json("No Alternative A has been specified") 
            }

         if(QuestionAltB == '')
            {
               return res.status(400).json("No Alternative B has been specified") 
            }

         if(QuestionAltC == '')
            {
               return res.status(400).json("No Alternative C has been specified") 
            }


         if(QuestionAltD == '')
            {
               return res.status(400).json("No Alternative D has been specified") 
            } 

         if(CorrectAlternative == '')
            {
               return res.status(400).json("No Correct Alternative has been specified") 
            } 

        if(!(await SubjectRepository.findOneBy({Id: SubjectId})))
            {
                return res.status(404).json("Couldn't find the specified subject!")
            }
        
        if(!(await TopicRepository.findOneBy({Id: TopicId})))
            {
              return res.status(404).json("Couldn't find the specified Topic!")  
            }
            
        if(!(await SubTopicRepository.findOneBy({Id: SubTopicId})))
            {
              return res.status(404).json("Couldn't find the specified SubTopic!")  
            }

        const NewQuestion = await QuestionRepository.create
        ({
            ImageUrl: ImageUrl,
            subjectId: SubjectId, 
            TopicId: TopicId,
            SubTopicId: SubTopicId,
            QuestionText:   QuestionText,
            QuestionPrompt:  QuestionPrompt,
            QuestionAltA: QuestionAltA,
            QuestionAltB:  QuestionAltB,
            QuestionAltC: QuestionAltC,
            QuestionAltD: QuestionAltD,
            QuestionAltE: QuestionAltE,
            CorrectAlternative: CorrectAlternative,
            QuestionDifficulty: QuestionDifficulty
        })

        await QuestionRepository.save(NewQuestion)
            
        return res.status(201).json(NewQuestion)
             
    } 
    catch (error) 
    {
      return res.status(500).json("An error occured while acessing this route! " + error);       
    }
})

questionRouter.delete('/deleteQuestion', async (req:Request, res: Response) => {
    try 
    {
        const QuestionId = req.body.questionId;
        if(QuestionId == '')
            {
                res.status(400).json("The Question id supplied is empty!")
            }

        const QuestionFound = await QuestionRepository.findOneBy({id: QuestionId});

        if(!QuestionFound)   
            {
                return res.status(404).json("Couldn't find the specified question!")
            }

        await QuestionRepository.delete(QuestionFound?.id);
        return res.status(200).json({ message: "Question deleted successfully" })
    } 
    catch (error) 
    {
      return res.status(500).json("An error occured while acessing this route! " + error);       
    }
})

export default questionRouter;