import AppDataSource from "../data_source";
import { Request , Response } from "express";
import { Topic } from "../entities/Topic";
import { Subject } from "../entities/Subject";


class topicController {
  private TopicRepository;
  private SubjectRepository;

  constructor() {
    this.TopicRepository = AppDataSource.getRepository(Topic)
    this.SubjectRepository = AppDataSource.getRepository(Subject)
  }

  GetTopics = async (req:Request, res:Response) =>
  {
    try 
    {
        const TopicsFound = await this.TopicRepository.find();
        res.status(200).json(TopicsFound); 
    } 

    catch (error) 
    {
        res.status(500).json("An error occured while acessing this route! " + error);    
    }
  }

  getTopic = async  (req:Request, res:Response) =>
  {
    const ReqBodyName = req.body.TopicName;
    try 
    {
        if(ReqBodyName == "")
            {
                return res.status(400).json("Couldn't find a Topic with that code!");    
            }

        const TopicFound = await this.TopicRepository.findOneBy({TopicName: ReqBodyName});
        if(! TopicFound)
            {
                res.status(400).json("Couldn't find a topic with that name!");    
            }

        res.status(200).json(TopicFound); 
    } 

    catch (error) 
    {
        res.status(500).json("An error occured while acessing this route! " + error);    
    }
  
}

    createTopic = async( req:Request, res: Response) => 
    {
        try 
        {
            const BodyTopicName = req.body.TopicName;
            const TopicSubject = req.body.SubjectId;   
            const Subjectfound = await this.SubjectRepository.findOneBy({Id: TopicSubject});
    
            if(!Subjectfound)
                 {
                    res.status(400).json("Couldn't find a subject with that code!");    
                }
            
            const TopicFound = await this.TopicRepository.findOneBy({TopicName: BodyTopicName});
            if(!TopicFound)
                {
                    const newTopic = this.TopicRepository.create
                    ({
                            TopicName: BodyTopicName,
                            SubjectId: TopicSubject
                    }) 
    
                    await this.TopicRepository.save(newTopic)
                    res.status(201).json(newTopic)
                }
            else
                {
                    res.status(400).json("This topic already exists!")
                }
                
        } 
        catch (error) 
        {
            res.status(500).json("An error occured while acessing this route! " + error);      
        }
    }

    deleteTopic = async( req:Request, res: Response) => 
    {
        try 
        {
            const BodyTopicName = req.body.TopicName;
    
            if(BodyTopicName == "")
                {
                    res.status(400).json("A Subject Name must be provided!");
                }
            const Topicfound = await this.TopicRepository.findOneBy({TopicName: BodyTopicName});
    
            if(!Topicfound)
                {
                  res.status(400).json("Couldn't find a Topic with that Name!");  
                }
            else
                {
                    await this.TopicRepository.delete(Topicfound?.Id);
                    res.status(200).json({ message: "Topic deleted successfully" })
                } 
    
        } 
    
        catch (error) 
        {
            res.status(500).json("An error occured while acessing this route! " + error);  
        }
    
    }

    updateTopic = async( req:Request, res: Response) => {
        try 
        {
            const NewTopicName = req.body.NewTopicName;
            const TopicName = req.body.TopicName;
            
            const TopicFound = await this.TopicRepository.findOneBy({TopicName: TopicName});
    
            if(!TopicFound)
                {
                    return res.status(404).json("Couldn't find the specified Topic!");
                }
    
            TopicFound.TopicName = NewTopicName;
    
            await this.TopicRepository.save(TopicFound);
            res.status(200).json({ message: "Error updating subject ", TopicFound });
    
        } 
    
        catch (error) 
        {
            res.status(500).json("An error occured while acessing this route! " + error);    
        }
    
    }
}

export default topicController;