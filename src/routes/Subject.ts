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
      return res.status(200).json(Subjects)
    } 
    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);   
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
            return res.status(404).json("Couldn't find a subject with that name!")   
        }
      return res.status(200).json(Subject)
    } 
    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);   
    }
})

subjectRouter.post('/CreateSubject', async(req:Request, res: Response) => 
{
    const BodySubjectName = req.body.SubjectName;
    try 
    {
      if(BodySubjectName == '')
      {
        return res.status(400).json("A Subject Name must be provided!");
      } 

      const Subject  = await SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});  
      if(Subject == null)
      {
        const new_subject =  SubjectRepository.create({
        SubjectName: BodySubjectName,  
      }) 

      await SubjectRepository.save(new_subject)
            
      return res.status(201).json(new_subject)

      }
      return res.status(200).json(Subject)
    } 
    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);   
    }
})

subjectRouter.delete('/DeleteSubject', async(req:Request, res: Response) => 
{
  const BodySubjectName = req.body.SubjectName; 
  try 
  {
      if(BodySubjectName == '')
      {
        return res.status(400).json("A Subject Name must be provided!");
      } 
     
      const Subject  = await SubjectRepository.findOneBy({SubjectName: BodySubjectName});  
      if(Subject == null)
      {
        return res.status(404).json("Coudlnt find a subject with this name!");
      }
      const subject_id = Subject?.Id;

      if(subject_id == null)
      {
         return res.status(500).json("Couldnt fetch the subject's id!");
      }
      await SubjectRepository.delete(subject_id);
      return res.status(200).json({ message: "User deleted successfully" })


  } 
  catch (error) 
  {
      return res.status(500).json("An error occured while acessing this route! " + error);   
  }
})

subjectRouter.put('/UpdateSubject', async(req:Request, res: Response) => 
{
  const BodySubjectName = req.body.SubjectName; 
  const BodyNewSubjectName = req.body.NewSubjectName; 
  try 
  {
    if(BodySubjectName == '')
    {
      return res.status(400).json("A Subject Name must be provided!");
    } 
    const Subject  = await SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});
    if(Subject == null)
      {
        return res.status(404).json("Coudnlt find a subject with this name!");
      }
    Subject.SubjectName = BodyNewSubjectName;
    await SubjectRepository.save(Subject) 
    return res.status(200).json({ message: "Subject updated successfully", Subject })
  } 

  catch (error) 
  {
    console.error(error)
    return res.status(500).json({ message: "Error updating subject ", error })
  }

})

export default subjectRouter;