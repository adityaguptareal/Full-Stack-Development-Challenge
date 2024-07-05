const express=require("express")
const app=express()
const port=3000;
// Want to use ejs template engine
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    // Lesson 1 => Serving a file on Route
    let sitename="Aditya"
    let menu="Nothing"
    res.render("index",{sitename:sitename,menu:menu})
})
// app.get('/blog/:slug',(req,res)=>{
//     let blogTitle="How to Become a Millionarie"
//     let blogContent="First start earning money then used it to buy assets"
//     // res.render("index")
// })
app.listen(port,()=>{
    console.log('App is running at port number',port);
    
})
// Lesson 2 => Ejs is a template engine which is used to to insert the values in the static file that we want to serve.
// Step 1. Install the ejs template engine using npm
// Step 2. set app.set("view engine","ejs")
// Step 3. use res.render("filename",data to parse in obj form) to te view template
// Step 4. Name the view template folder "views"
// Step 5. Name all the file in view folder with extension ".ejs"
// Step 6. To pass any data (variable) to your view templates use this syntax in your .ejs file which you want to edit. Syntax => "<%=variablname>"

// View Engine is basically used to insert the value of variable in an template