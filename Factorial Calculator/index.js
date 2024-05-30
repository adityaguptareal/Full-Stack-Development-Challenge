// let factorial_number=prompt("Enter Your Number: ");
// let array=[]
// for (let i=factorial_number;i>0;i--){
//     array.push(i)
// }
// let result=(array.reduce(multiply=(a,b)=>{
//     return a*b
// }));
// let display=alert(`Factorial of ${factorial_number} is ${result}`)

// Approcach 2

let initial_val = 4;
function Factorial(Number) {
    // Use to create an array 
    let arr = Array.from(Array(Number + 1).keys())
    let new_arr = arr.slice(1,).reduce((a, b) => {
        return a * b;
    })
    console.log(new_arr)
    return new_arr;

}
Factorial(5)