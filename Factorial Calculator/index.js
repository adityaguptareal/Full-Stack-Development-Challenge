let factorial_number=prompt("Enter Your Number: ");
let array=[]
for (let i=factorial_number;i>0;i--){
    array.push(i)
}
let result=(array.reduce(multiply=(a,b)=>{
    return a*b
}));
let display=alert(`Factorial of ${factorial_number} is ${result}`)

