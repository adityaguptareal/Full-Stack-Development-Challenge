// const cat="https://cat-fact.herokuapp.com/facts"



// const getFacts= async()=>{
//     console.log('getting data ...');
//     let response =await fetch(cat);
//     console.log(response);
//     let final= await response.json();
//     console.log(final)
// };
    
// .json() is an asyncronus function therefore we have to use await.


// Whatsapp Number Validator
const breed="https://dogapi.dog/api/v2/breeds"
async function dogfacts() {
    let response=await fetch(breed)
    let result=await response.json();
    console.log(result['data'][0]['attributes'])
}

dogfacts()