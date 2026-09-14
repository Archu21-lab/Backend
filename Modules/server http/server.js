import { json } from "stream/consumers";
import http from http; //we import http to create and start server
import path ,{dirname} from path; // we import path to create  a paths 
import fs  from "fs"; // to handle (write and read) files
import { fileURLToPath } from "url"; //filepath -> normal path convert krta hain 

const filepath = fileURLToPath(import.meta.url) //filepath -> normal path 
const dirname = path.dirname(filepath)/// 

const homepath = path.join(dirname,"home","index.html")
const aboutpath = path.join(dirname,"about","index.html")



const fileName = path.basename(import.meta.url)
console.log(fileName);

const serverHandler = (req,res)=>{
    if (req.url == "/") {
      fs.readFile(homepath,(err,data)=>{
        if(err){
            res.writeHead(500,{"context-type":"text/plain"})
            res.end(err.message)
            return;
        }
        res.writeHead(200,{"context-type" : "text/html"})
        res.end(data.toString());
      })  
    }else if (req.url == "/about") {
        fs.writeHead(aboutpath,(err,data)=>{
            if(err){
                res.writeHead(500,{"context-type":"text/plain"});
                res.end(err.message);
                return;
            }
            res.writeHead(200,{"context-type":"text/html"})
            res.end(data.toString());
        })

    }else if(req.url == "/method" && req.method == "GET"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({
            id:1,
            name: "om",
            std:12,
        }))
        
    }else if(req.url == "/method" && req.method == "POST"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end("POST Request Received !")
        
    }
    
    
    else{
       res.writeHead(404, {"content-type":"text/plain"})
        res.end("404 Page Not Found !")
    }
};

const server = http.createserver(serverHandler);

server.listen(4000,()=>{
    console.log("server started succesfully !")
})