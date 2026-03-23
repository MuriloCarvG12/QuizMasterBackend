import { Router, Request , Response } from "express";

import imageController from "../controllers/imageController.ts";

const ImageController = new imageController()


const imageRouter = Router();

imageRouter.get('/GetImages', ImageController.getImages)

imageRouter.post('/GetImage', ImageController.getImage)

imageRouter.post('/GetImageQuestionId', ImageController.getImageByQuestionId)

export default imageRouter;