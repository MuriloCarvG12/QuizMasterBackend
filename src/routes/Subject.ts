import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Subject } from "../entities/Subject";



const SubjectRepository = AppDataSource.getRepository(Subject)



const subjectRouter = Router();



subjectRouter.get('/teste', async( req:Request, res: Response) => 
{

    res.status(200).json("Test")

})

subjectRouter.get('/GetSubjects', async( req:Request, res: Response) => 
{
    try 
    {
      const Subjects  = await SubjectRepository.find();  
      res.status(200).json(Subjects)
    } 
    catch (error) 
    {
        res.status(400).json("An error occured while acessing this route! " + error);   
    }
})

subjectRouter.get('/GetSubject', async( req:Request, res: Response) => 
{
    const BodySubjectName = req.body.SubjectName;
    try 
    {
      const Subject  = await SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});  
      if(Subject == null)
        {
            res.status(200).json("Couldn't find a subject with that name!")   
        }
      res.status(200).json(Subject)
    } 
    catch (error) 
    {
        res.status(400).json("An error occured while acessing this route! " + error);   
    }

})




export default subjectRouter;