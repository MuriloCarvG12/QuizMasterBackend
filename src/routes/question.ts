import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Topic } from "../entities/Topic";
import {Subject} from "../entities/Subject";
import { Subtopic } from "../entities/SubTopic";
import { Question } from "../entities/Question";


const QuestionRepository = AppDataSource.getRepository(Question)
const TopicRepository = AppDataSource.getRepository(Topic)
const SubTopicRepository = AppDataSource.getRepository(Subtopic)
const SubjectRepository = AppDataSource.getRepository(Subject)

const questionRouter = Router();

questionRouter.get('/getQuestions' ,async(req:Request, res:Response) => {
    try 
    {

        const QuestionsFound = await QuestionRepository.find();
        return res.status(200).json(QuestionsFound)
        
    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);   
    }
})

questionRouter.get('/getQuestion', async (req:Request, res: Response) => {
    try 
    {
        const QuestionId = req.body.QuestionId;

        if(QuestionId == "") 
            {
                return res.status(400).json("No Question has been specified")
            }
        
        const QuestionFound = await QuestionRepository.findOneBy({Id: QuestionId})

        if(!QuestionFound)
            {
                return res.status(404).json("Couldn't find the specified question!")
            }

        return res.status(200).json(QuestionFound)
    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);      
    }
})

questionRouter.post('/createQuestion', async (req:Request, res: Response) => {
    try 
    {
        const SubjectId = req.body.SubjectId;
        const TopicId = req.body.TopicId;
        const SubTopicId = req.body.SubTopicId;
        const QuestionPrompt = req.body.QuestionPrompt;
        const QuestionText = req.body.QuestionText;
        const ImageUrl = req.body.ImageUrl;
        const QuestionAltA = req.body.QuestionAltA;
        const QuestionAltB = req.body.QuestionAltB;
        const QuestionAltC = req.body.QuestionAltC;
        const QuestionAltD = req.body.QuestionAltD;
        const QuestionAltE = req.body.QuestionAltE;
        const CorrectAlternative = req.body.CorrectAlternative;
        const QuestionDifficulty = req.body.QuestionDifficulty;

         if(SubjectId == '')
            {
               return res.status(400).json("No Subject has been specified") 
            }
            
        if(TopicId == '')
            {
               return res.status(400).json("No Topic has been specified") 
            }
            
        if(SubTopicId == '')
            {
               return res.status(400).json("No SubTopic has been specified") 
            }
            
        if(QuestionPrompt == '')
            {
               return res.status(400).json("No Question Prompt has been specified") 
            }
            
         if(QuestionText == '')
            {
               return res.status(400).json("No Question Text has been specified") 
            }

         if(QuestionAltA == '')
            {
               return res.status(400).json("No Alternative A has been specified") 
            }

         if(QuestionAltB == '')
            {
               return res.status(400).json("No Alternative B has been specified") 
            }

         if(QuestionAltC == '')
            {
               return res.status(400).json("No Alternative C has been specified") 
            }


         if(QuestionAltD == '')
            {
               return res.status(400).json("No Alternative D has been specified") 
            } 

         if(CorrectAlternative == '')
            {
               return res.status(400).json("No Correct Alternative has been specified") 
            } 

        if(!(await SubjectRepository.findOneBy({Id: SubjectId})))
            {
                return res.status(404).json("Couldn't find the specified subject!")
            }
        
        if(!(await TopicRepository.findOneBy({Id: TopicId})))
            {
              return res.status(404).json("Couldn't find the specified Topic!")  
            }
            
        if(!(await SubTopicRepository.findOneBy({Id: SubTopicId})))
            {
              return res.status(404).json("Couldn't find the specified SubTopic!")  
            }

        const NewQuestion = await QuestionRepository.create
        ({
            ImageUrl: ImageUrl,
            SubjectId: SubjectId, 
            TopicId: TopicId,
            SubTopicId: SubTopicId,
            QuestionText:   QuestionText,
            QuestionPrompt:  QuestionPrompt,
            QuestionAltA: QuestionAltA,
            QuestionAltB:  QuestionAltB,
            QuestionAltC: QuestionAltC,
            QuestionAltD: QuestionAltD,
            QuestionAltE: QuestionAltE,
            CorrectAlternative: CorrectAlternative,
            QuestionDifficulty: QuestionDifficulty
        })

        await QuestionRepository.save(NewQuestion)
            
        return res.status(201).json(NewQuestion)
             
    } 
    catch (error) 
    {
      return res.status(500).json("An error occured while acessing this route! " + error);       
    }
})

questionRouter.delete('/deleteQuestion', async (req:Request, res: Response) => {
    try 
    {
        const QuestionId = req.body.questionId;
        if(QuestionId == '')
            {
                res.status(400).json("The Question id supplied is empty!")
            }

        const QuestionFound = await QuestionRepository.findOneBy({Id: QuestionId});

        if(!QuestionFound)   
            {
                return res.status(404).json("Couldn't find the specified question!")
            }

        await QuestionRepository.delete(QuestionFound?.Id);
        return res.status(200).json({ message: "Question deleted successfully" })
    } 
    catch (error) 
    {
      return res.status(500).json("An error occured while acessing this route! " + error);       
    }
})

questionRouter.put('/changeQuestion', async (req:Request, res: Response) => {
    try 
    {
        const QuestionId = req.body.questionId;
        const NewTopicId = req.body.TopicId;
        const NewSubTopicId = req.body.SubTopicId;
        const NewQuestionText = req.body.NewQuestionText;
        const NewQuestionPrompt = req.body.NewQuestionPrompt;
        const NewQuestionAltA = req.body.NewQuestionAltA;
        const NewQuestionAltB = req.body.NewQuestionAltB;
        const NewQuestionAltC = req.body.NewQuestionAltC;
        const NewQuestionAltD = req.body.NewQuestionAltD;
        const NewQuestionAltE = req.body.NewQuestionAltE;
        const NewCorrectAlternative = req.body.NewCorrectAlternative;

        const QuestionFound  = await QuestionRepository.findOneBy({Id: QuestionId})
        if(!QuestionFound)
        {
            return res.status(404).json("Question Not Found!")
        }
      

        if(!await TopicRepository.findOneBy({Id: NewTopicId}))
        {
            return res.status(404).json("Topic Not Found!")
        }

        if(!await SubTopicRepository.findOneBy({Id: NewSubTopicId}))
        {
            return res.status(404).json("SubTopic Not Found!")
        }

        QuestionFound.TopicId = NewTopicId;
        QuestionFound.SubTopicId = NewSubTopicId;

        if((typeof NewQuestionText) == "string")
            {
                if(NewQuestionText != "")
                    {
                       QuestionFound.QuestionText = NewQuestionText; 
                    }
            }
        else
            {
                 return res.status(400).json("Question Text must be a string!")
            }

        if((typeof NewQuestionPrompt) == "string")
            {
                if(NewQuestionPrompt != "")
                    {
                       QuestionFound.QuestionPrompt = NewQuestionPrompt;
                    }
            }
        else
            {
                 return res.status(400).json("Question Prompt must be a string!")
            }


        if((typeof NewQuestionAltA) == "string")
            {
                if(NewQuestionAltA != "")
                    {
                       QuestionFound.QuestionAltA = NewQuestionAltA;
                    }       
            }
        else
            {
                 return res.status(400).json("Alt A Text must be a string!")
            }
            
        if((typeof NewQuestionAltB) == "string")
            {
                if(NewQuestionAltB != "")
                    {
                       QuestionFound.QuestionAltB = NewQuestionAltB;
                    } 
            }
        else
            {
                 return res.status(400).json("Alt B  Text must be a string!")
            }
            
        if((typeof NewQuestionAltC) == "string")
            {
                if(NewQuestionAltC != "")
                    {
                       QuestionFound.QuestionAltC = NewQuestionAltC;
                    } 
            }
        else
            {
                 return res.status(400).json("Alt C Text must be a string!")
            }
            
        if((typeof NewQuestionAltD) == "string")
            {
                if(NewQuestionAltD != "")
                    {
                       QuestionFound.QuestionAltD = NewQuestionAltD;
                    } 
            }
        else
            {
                 return res.status(400).json("Alt D Text must be a string!")
            }
            
        if((typeof NewQuestionAltE) == "string")
            {
                if(NewQuestionAltE != "")
                    {
                       QuestionFound.QuestionAltD = NewQuestionAltD;
                    } 
            }
        else
            {
                 return res.status(400).json("Alt E Text must be a string!")
            }

                
        if((typeof NewCorrectAlternative) == "string")
            {
                if((NewCorrectAlternative.length) == 1 && (["A", "B", "C", "D", "E"].includes(NewCorrectAlternative)))
                    {
                        if(NewCorrectAlternative != "")
                        {
                            QuestionFound.CorrectAlternative = NewCorrectAlternative;
                        } 
                    }
                else
                    {
                        return res.status(400).json("The Correct Alternative must be either A, B , C , D  or if present E")
                    }
                    
            }
        await QuestionRepository.save(QuestionFound);
        return res.status(200).json({ message: "Updated Question ", QuestionFound });
      
    } 

    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);    
    }
})

export default questionRouter;