import mongoose from "mongoose";

 const dbconnection=async()=>
{
    try {
        const connection= await mongoose.connect("mongodb://127.0.0.1:27017/psware");
        console.log(`database connected at ${mongoose.connection.host}`)
    } catch (error) {
          console.log("error in db");
    }
}
export default dbconnection