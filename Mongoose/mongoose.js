import express from "express"
import mongoose from "mongoose"
import { Tracker } from "./Models/Todo.js"
import fetch from "node-fetch"
let db = mongoose.connect("mongodb://localhost:27017/status")
const app = express()
const port = 3000
app.get("/", (req, res) => {
    res.send("Hello Adii")
})
app.get("/station", async (req, res) => {
    var date_time = new Date();
    try {
        const track_url = await fetch("https://api.ipify.org?format=json")
        const response = await track_url.json()
        const clientIp = response.ip
        res.send(`You're Ip is tracked ${clientIp}`)
        let tracked_details = new Tracker({ Date: date_time, Ip: clientIp })
        tracked_details.save()
        console.log(date_time);
    }
    catch (error) {
        console.log("Facing an error", error);
        res.status(500).send("An error occurred");
    }




})
app.listen(port, () => {
    console.log('I am running at port', port);


})