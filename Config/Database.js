import mongoose from "mongoose"

export const  ConnectionDB=async()=>{
 try {
    mongoose.set('strictQuery', true)
    const {connection}= await mongoose.connect("mongodb://127.0.0.1:27017/ErrorCheck")
    console.log(`connection with ${(connection.host)}`);
 } catch (error) {
    console.log(error);
 }
}