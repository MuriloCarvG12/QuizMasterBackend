import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Topic } from "../entities/Topic";
import {Subject} from "../entities/Subject";
import { Subtopic } from "../entities/SubTopic";
import { Question } from "../entities/Question";


const QuestionRepository = AppDataSource.getRepository(Question)
const TopicRepository = AppDataSource.getRepository(Topic)
const SubTopicRepostory = AppDataSource.getRepository(Subtopic)
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