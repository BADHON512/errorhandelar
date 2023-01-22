import  mongoose  from 'mongoose';

const schema = mongoose.Schema({
    name:{
        type:"String",
        required:[true, "Please Enter your name"]
    },
    email:{
        type:"String",
        required:[true, "Please Enter your name"],
        unique:true,  
    }
})

 
const bUser= new mongoose.model("User", schema)

export default bUser

