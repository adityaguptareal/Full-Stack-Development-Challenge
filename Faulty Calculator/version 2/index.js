let rand_number=Math.random();
console.log(rand_number)
let a =prompt("Enter your first Number")
let b =prompt("Enter Your Operation")
let c =prompt("Enter Your 2nd Number")

let Operation={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (rand_number>0.1){
    let Result=(`Your Result is ${eval(`${a}${b}${c}`)}`)
    alert(Result)
}
else{
b=Operation[b]
let Result=(`Your Result is ${eval(`${a}${b}${c}`)}`)
    alert(Result)
}


