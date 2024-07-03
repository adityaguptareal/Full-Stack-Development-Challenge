<<<<<<< HEAD
// Express Hello World Programm
const express=require('express')
const app=express()
const port=3000

app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.send("You are on the home page fixes")
})
app.get('/contact',(req,res)=>{
    res.send("You are on the contact page")
})
app.get('/blog/:slug',(req,res)=>{
    res.send(`You are on the blog and ${req.params.slug} page`)
    // Getting Slug
    console.log(req.params);
    // Gettingf Query
    console.log(req.query);
    
})
app.get('/services',(req,res)=>{
    res.send("You are on the services page")
})
app.listen(port,()=>{
    console.log(`You are listening on the port number ${port}`)
=======
>>>>>>> 7e213d4a913378c5056b4bdeef2ff05f52c4a9ff
