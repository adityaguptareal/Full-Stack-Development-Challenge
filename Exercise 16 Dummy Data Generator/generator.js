import express from "express";
import mongoose from "mongoose";
import Employee from "./models/Employee.js";
const connectedDb = mongoose.connect("mongodb://localhost:27017/Company")

const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/file", (req, res) => {
    res.render('index')
})
app.get("/generate", async (req, res) => {
    // Generate data 10 
    await Employee.deleteMany({})
    const data = []
    const Employe_Name = [
        "Alice Johnson",
        "Michael Smith",
        "Emma Brown",
        "James Williams",
        "Olivia Jones",
        "Liam Davis",
        "Sophia Wilson",
        "Benjamin Garcia",
        "Isabella Martinez",
        "Ethan Anderson"
    ]
    const city=[
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose"
      ];
      
      function getRandom(array) {
        let random_number=Math.floor(Math.random()*(array.length-0))+0
        return array[random_number]

      }

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            "Name": getRandom(Employe_Name),
            "Salary": Math.floor(Math.random()*(20000000-10000))+10000,
            "isManager": Math.random()>0.7 ? true:false,
            "City": getRandom(city)
        })

        e.save()

        data.push(e)
        console.log(data);

    }
    res.send(data)
})
app.listen(port, () => {
    console.log('I am running at port', port);

})