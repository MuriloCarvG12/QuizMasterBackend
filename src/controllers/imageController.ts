import AppDataSource from "../data_source.js";
import { Request , Response } from "express";

import { Question } from "../entities/Question.js";
import { Image } from "../entities/Images.ts";


class imageController {
  private ImageRepository;
  private QuestionRepository;


  constructor() {
    this.ImageRepository = AppDataSource.getRepository(Image)
    this.QuestionRepository = AppDataSource.getRepository(Question)
  }

  
  getImages = async(req:Request, res:Response) => {
      try 
      {
  
          const ImagesFound = await this.ImageRepository.find();
          return res.status(200).json(ImagesFound)
          
      } 
  
      catch (error) 
      {
          return res.status(500).json("An error occured while acessing this route! " + error);   
      }
  }

  
  getImageByQuestionId = async (req:Request, res: Response) => {
      try 
      {
        const QuestionId = req.body.QuestionId;

        if(QuestionId == "" || !QuestionId) 
            {
                return res.status(400).json("No QuestionId has been specified")
            }

          
        const QuestionFound = await this.QuestionRepository.find({
        where: {
            Id:QuestionId
        },
        });

        if(!QuestionFound)
            {
                return res.status(404).json("Couldn't find the specified question!")
            }

        const ImageFound = await this.ImageRepository.find({
        where: {
            QuestionId: QuestionId
        },
        });     

        if(ImageFound) 
        {
             return res.status(200).json(ImageFound);
        }
         
      } 
  
      catch (error) 
      {
          return res.status(500).json("An error occured while acessing this route! " + error);      
      }
  }

  getImage = async (req:Request, res: Response) => {
      try 
      {
          const ImageId = req.body.ImageId;
  
          if(ImageId == "") 
              {
                  return res.status(400).json("No Image has been specified")
              }
          
          const ImageFound = await this.ImageRepository.findBy({Id: ImageId})
  
          if(!ImageFound)
              {
                  return res.status(404).json("Couldn't find the specified question!")
              }
  
          return res.status(200).json(ImageFound)
      } 
  
      catch (error) 
      {
          return res.status(500).json("An error occured while acessing this route! " + error);      
      }
  }
}

export default imageController;