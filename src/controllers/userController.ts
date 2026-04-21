import ConstUsers from "../consts/ConstUser.ts";
import AppDataSource from "../data_source.js";
import { Request , Response } from "express";
import { User } from "../entities/user.ts";

class UserController {
   private UsersRepository;

  constructor() {
    this.UsersRepository = AppDataSource.getRepository(User)
   
  }

  fetchUsers = async (req:Request, res: Response) => 
  {
    try 
    {
        const UsersFound = await this.UsersRepository.find();
        return res.status(200).json(UsersFound); 
    } 
    catch (error) 
    {
        return res.status(500).json("An error occured while acessing this route! " + error);     
    }
  }

  createUser = async (req:Request, res: Response) => {
      try 
      {
        const ReqBodyName = req.body.Name;
        const ReqBodyEmail = req.body.Email ;
        const ReqBodyPassword = req.body.Password;

        if(ReqBodyName == "")
        {
            return res.status(400).json(ConstUsers["NoTopicName"]);    
        }

        if(ReqBodyEmail == "")
        {
            return res.status(400).json(ConstUsers["NoTopicName"]);    
        }

        if(ReqBodyPassword == "")
        {
            return res.status(400).json(ConstUsers["NoTopicName"]);    
        }

        const UserFound = await this.UsersRepository.findOneBy({Email: ReqBodyEmail});

        if(!UserFound)
            {
                const newUser = this.UsersRepository.create
                ({
                        Name: ReqBodyName,
                        Email: ReqBodyEmail,
                        Password: ReqBodyPassword,
                        QuestionsCompleted: 0,
                        ExamsCompleted: 0
                }) 

                await this.UsersRepository.save(newUser)
                res.status(201).json(newUser)
            }
            else
                {
                    res.status(400).json(ConstUsers["UserAlreadyExists"])
                }
      } 
      catch (error) 
      {
          return res.status(500).json("An error occured while acessing this route! " + error);      
      }
  }

  getUserById = async (req:Request, res: Response) => 
    {
     
        const { id } = req.params;
        try 
        {
        const Subject  = await this.UsersRepository.findOneBy({Id: Number(id)});  
        if(Subject == null)
            {
               return  res.status(404).json(ConstUsers["UserNotFound"]);   
            }
            return  res.status(200).json(Subject)
        } 
        catch (error) 
        {
            return  res.status(500).json(ConstUsers["GenericError"] + error);   
        }
    }

  getUserByEmail = async (req:Request, res: Response) => 
    {
     
       const BodyEmail = req.body.Email;
        try 
        {
        const Subject  = await this.UsersRepository.findOneBy({Email: String(BodyEmail)});  
        if(Subject == null)
            {
               return  res.status(404).json(ConstUsers["UserNotFound"]);   
            }
            return  res.status(200).json(Subject)
        } 
        catch (error) 
        {
            return  res.status(500).json(ConstUsers["GenericError"] + error);   
        }
    }
    

  updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { Name, Email, Password } = req.body;

        const user = await this.UsersRepository.findOne({ where: { Id: Number(id) } });
        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado." });
            return;
        }

        if (Name) user.Name = Name;
        if (Email) user.Email = Email;
        if (Password) user.Password = Password;

        await this.UsersRepository.save(user);
        res.status(200).json({ message: "Usuário atualizado com sucesso.", user });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar usuário.", error });
    }
}

    updateUserQuestionsCompleted = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const user = await this.UsersRepository.findOne({ where: { Id: Number(id) } });
            if (!user) {
                res.status(404).json({ message: "Usuário não encontrado." });
                return;
            }

            user.QuestionsCompleted += 1;

            await this.UsersRepository.save(user);
            res.status(200).json({ message: "Questões completadas atualizado.", user });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar questões completadas.", error });
        }
    }

    updateUserExamsCompleted = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const user = await this.UsersRepository.findOne({ where: { Id: Number(id) } });
            if (!user) {
                res.status(404).json({ message: "Usuário não encontrado." });
                return;
            }

            user.ExamsCompleted += 1;

            await this.UsersRepository.save(user);
            res.status(200).json({ message: "Exames completados atualizado.", user });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar exames completados.", error });
        }
    }
}

export default UserController;