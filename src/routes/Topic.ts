import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Topic } from "../entities/Topic";
import Subject from "./Subject";



const TopicRepository = AppDataSource.getRepository(Topic)
const SubjectRepository = AppDataSource.getRepository(Subject)

const topicRouter = Router();

topicRouter.get('/GetTopics', async( req:Request, res: Response) => {
    try 
    {
        const TopicsFound = await TopicRepository.find();
        return res.status(200).json(TopicsFound); 
    } 

    catch (error) 
    {
         return res.status(500).json("An error occured while acessing this route! " + error);    
    }
  
})

topicRouter.get('/getTopic', async( req:Request, res: Response) => {
    const ReqBodyName = req.body.TopicName;
    try 
    {
        const TopicFound = await TopicRepository.findBy({TopicName: ReqBodyName});
        if(! TopicFound)
            {
                return res.status(400).json("Couldn't find a topic with that name!");    
            }

        return res.status(200).json(TopicFound); 
    } 

    catch (error) 
    {
         return res.status(500).json("An error occured while acessing this route! " + error);    
    }
  
})

topicRouter.post('/createTopic', async( req:Request, res: Response) => 
{
    try 
    {
        const BodyTopicName = req.body.TopicName;
        const TopicSubject = req.body.SubjectId;   
        const Subjectfound = await SubjectRepository.findBy({Id: TopicSubject});

        if(!Subjectfound)
             {
                return res.status(400).json("Couldn't find a subject with that code!");    
            }
        
        if(!TopicRepository.findBy({TopicName: BodyTopicName}))
            {
                const newTopic = TopicRepository.create
                ({
                        TopicName: BodyTopicName,
                        subjectId: TopicSubject
                }) 

                await TopicRepository.save(newTopic)
                return res.status(201).json(newTopic)
            }
        else
            {
                return res.status(400).json("This topic already exists!")
            }
            
    } 
    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);      
    }
})