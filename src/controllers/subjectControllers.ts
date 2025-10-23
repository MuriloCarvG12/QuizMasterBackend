import AppDataSource from "../data_source";
import { Request , Response } from "express";
import { Subject } from "../entities/Subject";

class subjectController {
  private SubjectRepository;

  constructor() {
    this.SubjectRepository = AppDataSource.getRepository(Subject)
  }

    GetSubjects = async (req: Request, res: Response) => 
    {
        try 
        {
            const Subjects  = await this.SubjectRepository.find();  
            res.status(200).json(Subjects)
        } 
        catch (error) 
        {
            res.status(500).json("An error occured while acessing this route! " + error);   
        }
    }

   GetSubject = async (req: Request, res: Response) => 
    {
       const BodySubjectName = req.body.SubjectName;
        try 
        {
        const Subject  = await this.SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});  
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
    }

    CreateSubject = async (req: Request, res: Response) => 
    {
        const BodySubjectName = req.body.SubjectName;
        try 
        {
            if(BodySubjectName == '')
            {
                res.status(400).json("A Subject Name must be provided!");
            } 

            const Subject  = await this.SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});  
            if(Subject == null)
            {
                const new_subject =  this.SubjectRepository.create({
                SubjectName: BodySubjectName,  
            }) 

            await this.SubjectRepository.save(new_subject)
                    
            res.status(201).json(new_subject)

            }
            res.status(200).json(Subject)
        } 
        catch (error) 
        {
            res.status(500).json("An error occured while acessing this route! " + error);   
        }
    }

    updateSubject = async (req: Request, res: Response) => 
        {
            const BodySubjectName = req.body.SubjectName; 
            const BodyNewSubjectName = req.body.NewSubjectName; 
            try 
            {
                if(BodySubjectName == '')
                {
                return res.status(400).json("A Subject Name must be provided!");
                } 
                const Subject  = await this.SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});
                if(Subject == null)
                {
                    return res.status(404).json("Coudnlt find a subject with this name!");
                }
                Subject.SubjectName = BodyNewSubjectName;
                await this.SubjectRepository.save(Subject) 
                return res.status(200).json({ message: "Subject updated successfully", Subject })
            } 

            catch (error) 
            {
                console.error(error)
                return res.status(500).json({ message: "Error updating subject ", error })
            }
        }

    deleteSubject = async (req: Request, res: Response) =>  
        {
            const BodySubjectName = req.body.SubjectName; 
            try 
            {
                if(BodySubjectName == '')
                {
                    return res.status(400).json("A Subject Name must be provided!");
                } 
                
                const Subject  = await this.SubjectRepository.findOneBy({SubjectName: BodySubjectName});  
                if(Subject == null)
                {
                    return res.status(404).json("Coudlnt find a subject with this name!");
                }
                const subject_id = Subject?.Id;

                if(subject_id == null)
                {
                    return res.status(500).json("Couldnt fetch the subject's id!");
                }
                await this.SubjectRepository.delete(subject_id);
                return res.status(200).json({ message: "User deleted successfully" })

        }
        catch (error) 
        {
            return res.status(500).json("An error occured while acessing this route! " + error);   
        }
}}

export default subjectController;