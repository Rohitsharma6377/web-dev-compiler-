import express from "express";
import { saveCode } from "../controllers/compileController";

export const compileRouter = express.Router()


compileRouter.post("/save",saveCode);