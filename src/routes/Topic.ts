import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Topic } from "../entities/Topic";



const TopicRepository = AppDataSource.getRepository(Topic)

const topicRouter = Router();

topicRouter.get('/', async( req:Request, res: Response) => {
    try 
    {
        const TopicsFound = await TopicRepository.find();
        res.status(200).json(TopicsFound); 
    } 

    catch (error) 
    {
         return res.status(500).json("An error occured while acessing this route! " + error);    
    }
  
})