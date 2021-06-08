import express from "express";
import { edit, remove } from "../controllers/usercontroller";

const userRouter = express.Router();


userRouter.get("/edit", edit);
userRouter.get("/removie", remove);

export default userRouter;