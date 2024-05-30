
const fs=require("fs")


//  Writing File in Nodejs Asynchronously
// fs.writeFile("Aditya.txt","Hi Adity You will be become a millionarie in",()=>{
//     console.log("File Writing is Completed")
// })

// Used to read file in Node js
fs.readFile("Aditya.txt",(error,data)=>{
    console.log(data.toString());
    
})

// Used to append file in the Nodejs
fs.appendFile("Aditya.txt","\nFuture",()=>{
    console.log('File Appended');
    
})
