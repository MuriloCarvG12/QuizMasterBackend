import { Router, Request , Response } from "express";

import subjectController from "../controllers/subjectController";

const SubjectController = new subjectController()


const subjectRouter = Router();

subjectRouter.get('/GetSubjects', SubjectController.GetSubjects)

subjectRouter.get('/GetSubject', SubjectController.GetSubject)

subjectRouter.post('/CreateSubject', SubjectController.CreateSubject)

subjectRouter.delete('/DeleteSubject',  SubjectController.deleteSubject)

subjectRouter.put('/UpdateSubject', SubjectController.updateSubject)

export default subjectRouter;