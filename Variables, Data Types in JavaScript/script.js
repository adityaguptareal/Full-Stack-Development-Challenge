console.log("Hello World")
var a=5;
// var a=5; is used to define a variable in javascript
// by default javascript store the values in its original datatype
var b=6;
var c='3';
console.log(typeof c)
// console.log(typeof c) is used to determine the datatype of variable c

var aditya='gupta'
var aditya45='gupta'
var _aditya45='gupta'
// var 34_aditya45='gupta' not allowed because varible name can't start with number

let x=2;
let y='adity'
let z=3.22;
let p=true;
let q=undefined;
let d=null;
console.log(x,y,z,p,q,d)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof d)


let o={
    "Name":"harry",
    "Class":"XII",
    "Job Role": "Developer"
}
console.log(o)
o.salary="1000crore"
// o.salary="1000crore" is used to add another item in the object
console.log(o["Job Role"])