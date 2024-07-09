    import mongoose from "mongoose";
    import express from "express"
    import { Todo } from "./Models/Todo.js"; 
import { todo } from "node:test";
import { title } from "node:process";
    await mongoose.connect("mongodb://localhost:27017/todo")
    const app=express()
    const port=3000
    app.get("/",(req,res)=>{
        const todo=new Todo({title:"Blog",desc:"Writing a blog",isDone:true,days:7})
        todo.save()
        res.send("Hello World")
    })
    app.get("/find",async(req,res)=>{
        let todo=await Todo.findOne({})
        console.log(todo);
        res.json({title:todo.title,desc:todo.desc})
    })
    app.listen(port,()=>{
        console.log('I am running at',port);
        
    })
