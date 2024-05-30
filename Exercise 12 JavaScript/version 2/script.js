let squares=document.getElementsByClassName("box")
let arr_squares=Array.from(squares)
function random_color(){
    let value1=parseInt(Math.random()*250)
    let value2=parseInt(Math.random()*250)
    let value3=parseInt(Math.random()*250)
    return `rgb(${value1},${value2},${value3})`
}
arr_squares.forEach(boxes=>{
   boxes.style.backgroundColor=random_color();
   boxes.style.Color=random_color()
});

