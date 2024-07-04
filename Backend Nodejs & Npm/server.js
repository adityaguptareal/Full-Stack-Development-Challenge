const http=require('node:http')
const hostname='127.0.0.1';
const port=3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("content-type",'Text/plain')
    res.end("Hello World")
})
server.listen(port,hostname,()=>{
    console.log(`Server is running at ${hostname} and ${port}`);
    
})