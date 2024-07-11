import mongoose from "mongoose";
let Company_schema=new mongoose.Schema({
    Name:String,
    Salary:Number,
    isManager:Boolean,
    City:String
})

const Employee = mongoose.model("Employee",Company_schema)
export default Employee;