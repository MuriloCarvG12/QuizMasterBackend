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
        if(BodySubTopicName == "")
            {
                return res.status(400).json("No Subtopic specified!")
            }
        const SubTopicFound = await SubTopicRepository.findOneBy({SubTopicName: BodySubTopicName});
        return res.status(200).json(SubTopicFound); 
    } 

    catch (error) 
    {
         return res.status(500).json("An error occured while acessing this route! " + error);    
    }
  
})

subtopicRouter.post('/CreateSubtopic', async( req:Request, res: Response) => {
    try 
    {
        const BodySubTopicName = req.body.SubTopicName;
        const BodyTopicId = req.body.TopicId;
        if(BodySubTopicName == "")
            {
                return res.status(400).json("No Subtopic specified!")
            }

        if( !(await TopicRepository.findOneBy({Id: BodyTopicId})) )  
        {
            return res.status(404).json("Couldn't find the specified topic!")
        }

        if( (await SubTopicRepository.findOneBy({SubTopicName: BodySubTopicName})) )
            {
                 return res.status(400).json("A subtopic with this name has already been created!")
            }

        const newSubTopic = SubTopicRepository.create
        ({
            SubTopicName: BodySubTopicName,
            TopicId: BodyTopicId
        }) 

        await SubTopicRepository.save(newSubTopic);
        return res.status(201).json({message:"New SubTopic Created! ", newSubTopic}) 
    }         
    catch (error) 
    {
         return res.status(500).json("An error occured while acessing this route! " + error);    
    }
  
})

subtopicRouter.delete('/DeleteSubTopic', async(req:Request, res: Response) => 
{
    try 
    {
        const BodySubTopicName = req.body.SubTopicName;
        const SubTopicFound = await SubTopicRepository.findOneBy({SubTopicName: BodySubTopicName});

        if(!SubTopicFound)
            {
                return res.status(404).json("Couldn't find the specified SubTopic!")
            }
        
        await SubTopicRepository.delete(SubTopicFound?.Id);
        return res.status(200).json("Subtopic deleted successfully!")

    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);     
    }
})

subtopicRouter.put('/ChangeSubTopic', async(req:Request, res: Response) => 
{
    try 
    {
        const SubTopicName = req.body.SubTopicName;
        const NewSubTopicName = req.body.NewSubTopicName;
        
        const SubTopicFound = await SubTopicRepository.findOneBy({SubTopicName: SubTopicName});

        if(!SubTopicFound)
            {
               return res.status(404).json("Couldn't find the specified SubTopic!") 
            }
        
        SubTopicFound.SubTopicName = NewSubTopicName;
        await SubTopicRepository.save(SubTopicFound) 
        return res.status(200).json({ message: "Subject updated successfully", SubTopicFound })
    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);     
    }
})



export default subtopicRouter;