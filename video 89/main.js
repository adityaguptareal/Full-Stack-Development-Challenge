const expres=require("express")
const app=expres()
const port=3000
app.use(expres.static("public"))
app.get("/",(req,res)=>{
    res.send("Hello Aditya")
})
app.get("/blog",(req,res)=>{
res.send("Simple Get Request")
})

app.post("/blog",(req,res)=>{
    res.send("Post request")
    console.log('Its Post request');
    
})
app.listen(port,()=>{
    console.log('Listening Port');
})