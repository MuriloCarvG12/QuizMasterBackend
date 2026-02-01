import AppDataSource from "../data_source.js";
import { Request , Response } from "express";
import { Subject } from "../entities/Subject.js";
import ConstSubjects from "../consts/ConstSubject.js";



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
            res.status(500).json(ConstSubjects["GenericError"] + error);   
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
                res.status(404).json(ConstSubjects["NoName"]);   
            }
            res.status(200).json(Subject)
        } 
        catch (error) 
        {
            res.status(500).json(ConstSubjects["GenericError"] + error);   
        } 
    }

    CreateSubject = async (req: Request, res: Response) => 
    {
        const BodySubjectName = req.body.SubjectName;
        try 
        {
            if(BodySubjectName == '')
            {
                res.status(400).json(ConstSubjects["NoName"]);
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
            res.status(500).json(ConstSubjects["GenericError"] + error);   
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
                return res.status(400).json(ConstSubjects["NoName"]);
                } 
                const Subject  = await this.SubjectRepository.findOneBy({SubjectName: String(BodySubjectName)});
                if(Subject == null)
                {
                    return res.status(404).json(ConstSubjects["NoName"]);
                }
                Subject.SubjectName = BodyNewSubjectName;
                await this.SubjectRepository.save(Subject) 
                return res.status(200).json({ message: ConstSubjects["SubjectUpdated"], Subject })
            } 

            catch (error) 
            {
                console.error(error)
                return res.status(500).json( ConstSubjects["GenericError"] +  error )
            }
        }

    deleteSubject = async (req: Request, res: Response) =>  
        {
            const BodySubjectName = req.body.SubjectName; 
            try 
            {
                if(BodySubjectName == '')
                {
                    return res.status(400).json(ConstSubjects["NoName"]);
                } 
                
                const Subject  = await this.SubjectRepository.findOneBy({SubjectName: BodySubjectName});  
                if(Subject == null)
                {
                    return res.status(404).json(ConstSubjects["NoSubject"]);
                }
                const subject_id = Subject?.Id;

                if(subject_id == null)
                {
                    return res.status(500).json(ConstSubjects["NoId"]);
                }
                await this.SubjectRepository.delete(subject_id);
                return res.status(200).json({ message: ConstSubjects["SubjectDeleted"] })

        }
        catch (error) 
        {
            return res.status(500).json(ConstSubjects["GenericError"] + error);   
        }
}}

export default subjectController;