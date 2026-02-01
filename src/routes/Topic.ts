import { Router, Request , Response } from "express";

import AppDataSource from "../data_source.js";

import { Topic } from "../entities/Topic.js";
import {Subject} from "../entities/Subject.js";
import topicController from "../controllers/topicController.js";


const TopicController = new topicController()

const topicRouter = Router();

topicRouter.get('/GetTopics', TopicController.GetTopics)

topicRouter.get('/getTopic', TopicController.getTopic)

topicRouter.post('/createTopic', TopicController.createTopic)

topicRouter.delete('/deleteTopic', TopicController.deleteTopic)

topicRouter.put('/updateTopic', TopicController.updateTopic)

export default topicRouter;