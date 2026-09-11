import http from http;
import path from path;
import fs  from "fs";
import { fileURLToPath } from "url";

const filepath = fileURLToPath(import.meta.url)
const dirname = path.dirname(filepath)

const homepath = 



const fileName = path.basename(import.meta.url)
console.log(fileName);

const serverHandler = (req,res)=>{
    if (req.url == "/") {
        
    }else if (req.url == "/about") {
        
    }else{
       res.writeHead(404, {"content-type":"plain/text"})
        res.end("404 Page Not Found !")
    }
};

const server = http.createserver(serverHandler);

server.listen(4000,()=>{
    console.log("server started succesfully !")
})