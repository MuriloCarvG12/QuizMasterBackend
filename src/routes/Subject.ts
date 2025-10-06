import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Subject } from "../entities/Subject";



const SubjectRepository = AppDataSource.getRepository(Subject)



const subjectRouter = Router();

subjectRouter.get('/GetSubjects', async( req:Request, res: Response) => 
{
    try 
    {
      const Subjects  = await SubjectRepository.find();  
      res.status(200).json(Subjects)
    } 
    catch (error) 
    {
        res.status(500).json("An error occured while acessing this route! " + error);   
    }
})

subjectRouter.get('/GetSubject', async(req:Request, res: Response) => 
{
    const BodySubjectName = req.body.SubjectName;
    try 
    {
      const Subject  = await SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});  
      if(Subject == null)
        {
            res.status(404).json("Couldn't find a subject with that name!")   
        }
      res.status(200).json(Subject)
    } 
    catch (error) 
    {
        res.status(500).json("An error occured while acessing this route! " + error);   
    }
})

subjectRouter.post('/CreateSubject', async(req:Request, res: Response) => 
{
    const BodySubjectName = req.body.SubjectName;
    try 
    {
      if(BodySubjectName == '')
      {
        res.status(400).json("A Subject Name must be provided!");
      } 

      const Subject  = await SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});  
      if(Subject == null)
      {
        const new_subject =  SubjectRepository.create({
        SubjectName: BodySubjectName,  
      }) 

      await SubjectRepository.save(new_subject)
            
      res.status(201).json(new_subject)

      }
      res.status(200).json(Subject)
    } 
    catch (error) 
    {
        res.status(500).json("An error occured while acessing this route! " + error);   
    }
})

export default subjectRouter;