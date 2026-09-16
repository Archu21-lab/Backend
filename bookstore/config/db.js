import mongoose from "mongoose";
//1 database db.js mein connect krte hain
export const connectDB = async ()=>{
    try{
      await  mongoose.connect("mongodb://localhost:27017/bookstore");
      console.log("database connected successfully !")
    }catch(err){
        console.log('database connection failed : ERROR -' + err.message)
    }
}

// db connect -> db structure -> db model ->controller -> routes -> server 
