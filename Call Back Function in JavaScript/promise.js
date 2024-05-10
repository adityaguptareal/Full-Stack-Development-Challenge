console.log('This is Promises');

// Promise => Promise is ab object in javascript. It's used for functions that take time to finish, like fetching data from the internet.  The Promise lets you know when the result is ready and what to do with it (success) or if there's an error (failure).



let promise1= new Promise((resolve, reject)=>{
    let rand=Math.random();
    if (rand<0.5){
        reject("No Random Number was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am Done")
            resolve("Aditya")
        },1000);
    }
})

let promise2= new Promise((resolve, reject)=>{
    let rand=Math.random();
    if (rand<0.5){
        reject("No Random Number was not supporting you 2")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am Done 2")
            resolve("Aditya 2")
        },1000);
    }
})

// .then method is used to handle what to do if the function is resolved successfully.
// .catch method is used to handle the error or basically when the funtion get rejected.
// .finally is used to perform general clean up For Example - Close Files 

let promise3=Promise.all([promise1,promise2])
promise3.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err)
})

// Promises Chaning => We can chain the promises and make them to pass to resolve values to another like this

// Attaching Multiple Handlers => We can attach multiple handlers to one promise. They don't pass the result to each other, instead they process it independently.

// Promise API Method
// Promise.all will wait for all the promises to resolve and returns the array of their results. But if any of the promises get rejectes then it becomes an error and all other promises get ignored.


// Promise.allsettled waits fro all the promises to settle(may be resolve or reject( and return their result as an array of thier object with status amd value.

// Promise.race waits for the first promise to settle and its result /error becomes the outcome.

// Promise.any waits for the first time to fulfill (& not rejected) and its result becomes the outcomes. Throws Aggregate Error if all the promises are rejected.

// Promise.reject(value) Makes a Rejected Promise with the given error
// Promise.resolve(value) Makes a Resolved Promise with the given value