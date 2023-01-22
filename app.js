import  Express  from "express";
import router from './Routes/User.js';
import { errorMiddleware } from './MiddleWares/Error.js';
import { ConnectionDB } from "./Config/Database.js";

const app =Express()

app.use("/new",router)


ConnectionDB()

const port = 5000;
const localhost= "localhost"
app.listen(port,localhost,()=>{console.log(`Server is working right now ${localhost}:${port}`)})
app.use(errorMiddleware)