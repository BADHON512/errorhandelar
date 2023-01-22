

export const catchasyncError= (passedF)=>(req,res,next)=>{
Promise.resolve(passedF(req,res,next)).catch(next)

}