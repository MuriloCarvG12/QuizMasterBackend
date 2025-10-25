import { Router, Request , Response } from "express";

import AppDataSource from "../data_source";

import { Topic } from "../entities/Topic";
import { Subtopic } from "../entities/SubTopic";

import subTopicController from "../controllers/subtopicController";

const SubTopicController = new subTopicController()

const TopicRepository = AppDataSource.getRepository(Topic)
const SubTopicRepository = AppDataSource.getRepository(Subtopic)

const subtopicRouter = Router();

subtopicRouter.get('/GetSubTopics', SubTopicController.GetSubTopics)

subtopicRouter.get('/GetSubTopic', SubTopicController.GetSubTopic)

subtopicRouter.post('/CreateSubtopic', SubTopicController.CreateSubtopic)

subtopicRouter.delete('/DeleteSubTopic', SubTopicController.DeleteSubTopic)

subtopicRouter.put('/ChangeSubTopic', SubTopicController.ChangeSubTopic)



export default subtopicRouter;