// Asynchronous Function are those action which we initate now and they finish later. eg. setTimeOut()

// Synchronous Function are those action which we initiate an finish on by one

// Callback Function is a function which is passed into another function as an argument, which is then invoked inside the outer function to complete an action
const fn=()=>{
    console.log("Nothing")
}

let Callback=(names,fn)=>{
    console.log(names)
    fn()
}
const script=(src,Callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=Callback("Aditya",fn);
    document.head.append(sc);
}
script("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",Callback)

// Pyramid Of DOOM => When we have callback function inside the call back function then it is difficult to manage them. It is called Pyramid of DOOM.

