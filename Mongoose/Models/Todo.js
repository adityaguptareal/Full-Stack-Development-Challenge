import mongoose from "mongoose"
const ToDoSchema=new mongoose.Schema({
    title:String,
    desc:String,
    isDone:Boolean,
    days:Number
});
export const Todo=mongoose.model("Todo",ToDoSchema);