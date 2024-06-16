const express=require("express")
const app=express()
const port=3000
const fs=require("fs")
app.use(express.static("public"))

app.use((req,res,next)=>{
    fs.appendFileSync("info.txt",`Some is requested at ${Date.now()}\n`)
    console.log(req.headers);
    
    console.log(`Some is requested at ${Date.now()} `);
    next()
})

app.use((req,res,next)=>{
    console.log('Hi Aditya');
    next()
})

app.get("/",(req,res)=>{
    res.send("Hello Aditya")
})




app.listen(port,()=>{
    console.log(`Youre Port Number is ${port}`);
    
})
