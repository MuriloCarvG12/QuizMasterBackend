import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Topic } from "../entities/Topic";
import {Subject} from "../entities/Subject";



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
        if(ReqBodyName == "")
            {
                return res.status(400).json("Couldn't find a Topic with that code!");    
            }

        const TopicFound = await TopicRepository.findOneBy({TopicName: ReqBodyName});
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
        const Subjectfound = await SubjectRepository.findOneBy({Id: TopicSubject});

        if(!Subjectfound)
             {
                return res.status(400).json("Couldn't find a subject with that code!");    
            }
        
        const TopicFound = await TopicRepository.findOneBy({TopicName: BodyTopicName});
        if(!TopicFound)
            {
                const newTopic = TopicRepository.create
                ({
                        TopicName: BodyTopicName,
                        SubjectId: TopicSubject
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

topicRouter.delete('/deleteTopic', async( req:Request, res: Response) => 
{
    try 
    {
        const BodyTopicName = req.body.TopicName;

        if(BodyTopicName == "")
            {
                return res.status(400).json("A Subject Name must be provided!");
            }
        const Topicfound = await TopicRepository.findOneBy({TopicName: BodyTopicName});

        if(!Topicfound)
            {
              return res.status(400).json("Couldn't find a Topic with that Name!");  
            }

        await TopicRepository.delete(Topicfound?.Id);
        return res.status(200).json({ message: "Topic deleted successfully" })

    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);  
    }

})

topicRouter.put('/updateTopic', async( req:Request, res: Response) => {
    try 
    {
        const NewTopicName = req.body.NewTopicName;
        const TopicName = req.body.TopicName;
        
        const TopicFound = await TopicRepository.findOneBy({TopicName: TopicName});

        if(!TopicFound)
            {
                return res.status(404).json("Couldn't find the specified Topic!");
            }

        TopicFound.TopicName = NewTopicName;

        await TopicRepository.save(TopicFound);
        return res.status(200).json({ message: "Error updating subject ", TopicFound });

    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);    
    }

})

export default topicRouter;