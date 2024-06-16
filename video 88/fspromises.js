// Using the fs/prmoises module
import fs from "fs/promises"
let a= await fs.readFile("Aditya.txt")
console.log(a.toString());

