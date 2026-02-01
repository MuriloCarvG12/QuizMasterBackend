import AppDataSource from "../data_source.js";
import { Request , Response } from "express";

import { Subtopic } from "../entities/SubTopic.js";
import { Subject } from "../entities/Subject.js";
import { Topic } from "../entities/Topic.js";
import ConstSubTopics from "../consts/ConstSubTopic.js";



class subTopicController {
  private SubTopicRepository;
  private SubjectRepository;
  private TopicRepository;

  constructor() {
    this.SubTopicRepository = AppDataSource.getRepository(Subtopic)
    this.TopicRepository = AppDataSource.getRepository(Topic)
    this.SubjectRepository = AppDataSource.getRepository(Subject)
  }

  GetSubTopics =  async( req:Request, res: Response) => {
      try 
      {
          const SubTopicsFound = await this.SubTopicRepository.find();
          return res.status(200).json(SubTopicsFound); 
      } 
  
      catch (error) 
      {
           return res.status(500).json(ConstSubTopics["GenericError"] + error);    
      }
    
  }

  GetSubTopic = async( req:Request, res: Response) => {
      try 
      {
          const BodySubTopicName = req.body.SubTopicName;
          if(BodySubTopicName == "")
              {
                  return res.status(400).json(ConstSubTopics["NoSubtopic"])
              }
          const SubTopicFound = await this.SubTopicRepository.findOneBy({SubTopicName: BodySubTopicName});
          return res.status(200).json(SubTopicFound); 
      } 
  
      catch (error) 
      {
           return res.status(500).json(ConstSubTopics["GenericError"] + error);    
      }
    }

    CreateSubtopic = async( req:Request, res: Response) => {
        try 
        {
            const BodySubTopicName = req.body.SubTopicName;
            const BodyTopicId = req.body.TopicId;
            if(BodySubTopicName == "")
                {
                    return res.status(400).json(ConstSubTopics["NoSubTopicFound"])
                }
    
            if( !(await this.TopicRepository.findOneBy({Id: BodyTopicId})) )  
            {
                return res.status(404).json(ConstSubTopics["NoTopic"])
            }
    
            if( (await this.SubTopicRepository.findOneBy({SubTopicName: BodySubTopicName})) )
                {
                     return res.status(400).json(ConstSubTopics["SubTopicExists"])
                }
    
            const newSubTopic = this.SubTopicRepository.create
            ({
                SubTopicName: BodySubTopicName,
                TopicId: BodyTopicId
            }) 
    
            await this.SubTopicRepository.save(newSubTopic);
            return res.status(201).json(ConstSubTopics["SubTopicCreated"] +  newSubTopic) 
        }         
        catch (error) 
        {
             return res.status(500).json(ConstSubTopics["GenericError"] + error);    
        }
      
    }

    DeleteSubTopic = async(req:Request, res: Response) => 
    {
        try 
        {
            const BodySubTopicName = req.body.SubTopicName;
            const SubTopicFound = await this.SubTopicRepository.findOneBy({SubTopicName: BodySubTopicName});
    
            if(!SubTopicFound)
                {
                    return res.status(404).json(ConstSubTopics["NoSubTopicFound"])
                }
            
            await this.SubTopicRepository.delete(SubTopicFound?.Id);
            return res.status(200).json(ConstSubTopics["SubTopicDeleted"])
    
        } 
    
        catch (error) 
        {
            return res.status(500).json(ConstSubTopics["GenericError"] + error);     
        }
    }

    ChangeSubTopic = async(req:Request, res: Response) => 
    {
        try 
        {
            const SubTopicName = req.body.SubTopicName;
            const NewSubTopicName = req.body.NewSubTopicName;
            
            const SubTopicFound = await this.SubTopicRepository.findOneBy({SubTopicName: SubTopicName});
    
            if(!SubTopicFound)
                {
                   return res.status(404).json(ConstSubTopics["NoSubTopicFound"]) 
                }
            
            SubTopicFound.SubTopicName = NewSubTopicName;
            await this.SubTopicRepository.save(SubTopicFound) 
            return res.status(200).json(ConstSubTopics["SubTopicUpdated"] + SubTopicFound )
        } 
    
        catch (error) 
        {
            return res.status(500).json(ConstSubTopics["GenericError"]+ error);     
        }
    }


}

export default subTopicController;