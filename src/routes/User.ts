import { Router, Request , Response } from "express";

import UserController from "../controllers/userController.js";


const userController = new UserController()

const userRouter = Router();

userRouter.get('/fetchUsers',userController.fetchUsers)
userRouter.get('/getUserById/:id', userController.getUserById)
userRouter.post('/CreateUser', userController.createUser)
userRouter.post('/GetUserByEmail', userController.getUserByEmail)
userRouter.put('/UpdateUser/:id', userController.updateUser)
userRouter.put('/UpdateUserExamsCompleted/:id', userController.updateUserExamsCompleted)
userRouter.put('/UpdateUserQuestionsCompleted/:id', userController.updateUserQuestionsCompleted)


export default userRouter;