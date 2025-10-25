import AppDataSource from "../data_source";
import { Request , Response } from "express";
import { Topic } from "../entities/Topic";
import { Subject } from "../entities/Subject";
import ConstTopics from "../consts/ConstTopic";


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
        res.status(500).json(ConstTopics["GenericError"] + error);    
    }
  }

  getTopic = async  (req:Request, res:Response) =>
  {
    const ReqBodyName = req.body.TopicName;
    try 
    {
        if(ReqBodyName == "")
            {
                return res.status(400).json(ConstTopics["NoTopicName"]);    
            }

        const TopicFound = await this.TopicRepository.findOneBy({TopicName: ReqBodyName});
        if(! TopicFound)
            {
                res.status(400).json(ConstTopics["NoTopic"]);    
            }

        res.status(200).json(TopicFound); 
    } 

    catch (error) 
    {
        res.status(500).json(ConstTopics["GenericError"] + error);    
    }
  
}

    createTopic = async( req:Request, res: Response) => 
    {
        try 
        {
            const BodyTopicName = req.body.TopicName;
            const TopicSubject = req.body.SubjectId;   

            if(TopicSubject == "")
            {
                return res.status(400).json(ConstTopics["NoSubjectId"]);    
            }
            
            const Subjectfound = await this.SubjectRepository.findOneBy({Id: TopicSubject});
    
            if(!Subjectfound)
                 {
                    res.status(400).json(ConstTopics["NoSubject"]);    
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
                    res.status(400).json(ConstTopics["TopicAlreadyExists"])
                }
                
        } 
        catch (error) 
        {
            res.status(500).json(ConstTopics["GenericError"] + error);      
        }
    }

    deleteTopic = async( req:Request, res: Response) => 
    {
        try 
        {
            const BodyTopicName = req.body.TopicName;
    
            if(BodyTopicName == "")
                {
                    res.status(400).json(ConstTopics["NoTopicName"]);
                }
            const Topicfound = await this.TopicRepository.findOneBy({TopicName: BodyTopicName});
    
            if(!Topicfound)
                {
                  res.status(400).json(ConstTopics["NoTopic"]);  
                }
            else
                {
                    await this.TopicRepository.delete(Topicfound?.Id);
                    res.status(200).json({ message: ConstTopics["TopicDeleted"] })
                } 
    
        } 
    
        catch (error) 
        {
            res.status(500).json(ConstTopics["GenericError"] + error);  
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
                    return res.status(404).json(ConstTopics["NoSpecificTopic"]);
                }
    
            TopicFound.TopicName = NewTopicName;
    
            await this.TopicRepository.save(TopicFound);
            res.status(200).json(ConstTopics["TopicUpdated"] + TopicFound ); 
    
        } 
    
        catch (error) 
        {
            res.status(500).json(ConstTopics["GenericError"] + error);    
        }
    
    }
}

export default topicController;