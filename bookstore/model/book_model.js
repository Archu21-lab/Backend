import mongoose from "mongoose";

// 2 schema = yani database ka structure 


const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:false},
    category:{type:String,required:true},
    thumbnail:{type:String,required:true}
},{timestamps:true})


//3 model = yani ki database ko kaam mein help krta hain
//model - actual object which help to interact with database 
//schema aur model ka kaam is file mein hota hain

export const Book = mongoose.model("bookstore",bookSchema);



