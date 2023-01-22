import  Express  from "express";
import { newUser } from './../Crontorller/UserCrontroller.js';

const router = Express.Router()

router.get("/user",newUser)


export default router