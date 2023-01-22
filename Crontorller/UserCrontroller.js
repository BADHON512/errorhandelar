
import ErrorHandelar from './../Utilis/ErrorHandelar.js';
import  bUser  from './../Model/UserModel.js';
import { catchasyncError } from './../MiddleWares/CatchAsyncError.js';


export const newUser= catchasyncError((req,res,next)=>{
  
    const userExist= bUser.findOne({email:"badhon@gmail.com"})
    if(userExist){
        return  next(new ErrorHandelar("User already Exist " ,400)) 
    }
    
    bUser.create({
        name:"badhon vai",email:"badhon@gmail.com"
    })
    
    res.status(201).json({
        success:true,
        message:"User Created successfully"
    })
  
})

