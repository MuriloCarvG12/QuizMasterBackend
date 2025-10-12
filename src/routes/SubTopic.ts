import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Topic } from "../entities/Topic";
import { Subtopic } from "../entities/SubTopic";



const TopicRepository = AppDataSource.getRepository(Topic)
const SubTopicRepository = AppDataSource.getRepository(Subtopic)

const subtopicRouter = Router();

subtopicRouter.get('/GetSubTopics', async( req:Request, res: Response) => {
    try 
    {
        const SubTopicsFound = await SubTopicRepository.find();
        return res.status(200).json(SubTopicsFound); 
    } 

    catch (error) 
    {
         return res.status(500).json("An error occured while acessing this route! " + error);    
    }
  
})

subtopicRouter.get('/GetSubTopic', async( req:Request, res: Response) => {
    try 
    {
        const BodySubTopicName = req.body.SubTopicName;
        const SubTopicFound = await SubTopicRepository.findOneBy({SubTopicName: BodySubTopicName});
        return res.status(200).json(SubTopicFound); 
    } 

    catch (error) 
    {
         return res.status(500).json("An error occured while acessing this route! " + error);    
    }
  
})

export default subtopicRouter;