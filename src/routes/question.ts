import { Router, Request , Response } from "express";

import AppDataSource from "../data_source.js";

import { Topic } from "../entities/Topic.js";
import {Subject} from "../entities/Subject.js";
import { Subtopic } from "../entities/SubTopic.js";
import { Question } from "../entities/Question.js";
import questionController from "../controllers/questionController.ts";

const QuestionController = new questionController();

const QuestionRepository = AppDataSource.getRepository(Question)
const TopicRepository = AppDataSource.getRepository(Topic)
const SubTopicRepository = AppDataSource.getRepository(Subtopic)
const SubjectRepository = AppDataSource.getRepository(Subject)

const questionRouter = Router();



questionRouter.get('/getQuestions' , QuestionController.getQuestions);

questionRouter.post('/getQuestionBySubjectAndIds' ,QuestionController.getQuestionBySubjectAndIds);

questionRouter.post('/getQuestion', async (req:Request, res: Response) => {
    try 
    {
        const QuestionId = req.body.QuestionId;

        if(QuestionId == "") 
            {
                return res.status(400).json("No Question has been specified")
            }
        
        const QuestionFound = await QuestionRepository.findOneBy({Id: QuestionId})

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

questionRouter.post('/filterQuestionByUniversity', QuestionController.filterQuestionByUniversity)
questionRouter.post('/createQuestion', QuestionController.createQuestion)

questionRouter.delete('/deleteQuestion', QuestionController.deleteQuestion)

questionRouter.put('/changeQuestion', QuestionController.changeQuestion)





export default questionRouter;