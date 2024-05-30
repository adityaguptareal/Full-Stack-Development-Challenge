// An Event is a signal that has happend

let button=document.getElementById("btn")

// Event Performing on button play
// button.addEventListener("event_name",Call back function())

// Some Important Events
// click - when user click on anything
// dblclick - when user dbl click 
// mousedown - Fired when a pointing device button is pressed on an element
// contextmenu - When user right click
// keydown - When user key down any keys in keyboard 

// button.addEventListener("click",()=>{
//     document.querySelector(".box").textContent="You're clicked"
// })

// button.addEventListener("contextmenu",()=>{
//     alert("Don't try to copy our content")
// })
// document.addEventListener("keydown",(e)=>{
//     console.log(e.key);
// })
// button.removeEventListener("contextmenu",(e)=>{
//     alert("Context Menu Has Been Removed You can check ")
// })
document.addEventListener("keydown",(e)=>{
console.log(e.key)
})