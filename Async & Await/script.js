// async function getData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         },1500);
//     })
// }
async function getData() {
    let api= await fetch('https://jsonplaceholder.typicode.com/todos/1',{method:'POST',
        body:JSON.stringify({title:"foo"})
    })
    let data=await api.json()

  console.log(data);
  return 455;
  
}


async function main() {
    
console.log('login module....');
console.log('testing.....');
console.log('how are you ?????');

let data= await getData()
console.log(data)
console.log('After Data.....');
console.log('Data?????');
}
main()

// Async and Await is a special type of syntax work with promises in javascript. In this we have to define async function and then under it we have to add await to wait until the function in not completed.


// Settle Means Resolve Or Reject
// Resolve mean promise has settled successfully 
// Resolve mean promise has not settled successfully 