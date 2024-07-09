import mongoose, { mongo } from "mongoose";
const dbSchema=mongoose.Schema({
    Date:String,
    Ip:String,
})
export const Tracker=mongoose.model("IpTracked",dbSchema)