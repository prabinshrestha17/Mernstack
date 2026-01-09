import { Router } from "express";
import { uploadFileController } from "../controller/file.controller.js";
import { upload } from "../utils/multer.js";

export const fileRouter = Router();

fileRouter.post("/upload", upload.single("file"), uploadFileController);
