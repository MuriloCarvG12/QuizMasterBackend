import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Subject } from "../entities/Subject";
import subjectController from "../controllers/subjectControllers";



const SubjectRepository = AppDataSource.getRepository(Subject)

const SubjectController = new subjectController()


const subjectRouter = Router();

subjectRouter.get('/GetSubjects', SubjectController.GetSubjects)

subjectRouter.get('/GetSubject', SubjectController.GetSubject)

subjectRouter.post('/CreateSubject', SubjectController.CreateSubject)

subjectRouter.delete('/DeleteSubject',  SubjectController.deleteSubject)

subjectRouter.put('/UpdateSubject', SubjectController.updateSubject)

export default subjectRouter;