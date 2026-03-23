import { Router, Request , Response } from "express";

import subTopicController from "../controllers/subtopicController.js";

const SubTopicController = new subTopicController()

const subtopicRouter = Router();

subtopicRouter.get('/GetSubTopics', SubTopicController.GetSubTopics)

subtopicRouter.get('/GetSubTopic', SubTopicController.GetSubTopic)

subtopicRouter.post('/CreateSubtopic', SubTopicController.CreateSubtopic)

subtopicRouter.delete('/DeleteSubTopic', SubTopicController.DeleteSubTopic)

subtopicRouter.put('/ChangeSubTopic', SubTopicController.ChangeSubTopic)



export default subtopicRouter;