import express from "express";
import { connectDB } from "./config/db.js";
import book_routes from "./routes/book_routes.js";

const app = express();
app.use(express.json());
connectDB();


app.use("/api/book",book_routes);

app.listen(4000, ()=>{
    console.log("server started successfully !")
})