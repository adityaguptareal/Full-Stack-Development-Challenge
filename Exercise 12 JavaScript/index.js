function randomlly(min, max) {
  return parseInt(Math.random() * (max - 1) + min);
  console.log(randomlly)
}
let color = {
  1: "red",
  2: "blue",
  3: "green",
  4: "black",
  5: "grey",
  6: "pink",
  7: "orange",
  8: "purple",
  9: "Beige",
  10: "Aqua",
  11: "white",
}
function random_color() {
  // Choosing random Background Color
  let random_color = randomlly(1, Object.keys(color).length)
  let choosen_color = color[random_color]
  return choosen_color
  console.log("Choosen Color is " + choosen_color)
}

// Choosing Random Box
function random_box() {
  let boxes = document.getElementsByClassName("box")
  let random_box = randomlly(0, boxes.length - 1)
  let choosen_box = boxes[random_box]
  return choosen_box
  console.log(choosen_box)


}

// changing Box Background Color
let choosen_color=random_color()
let choosen_box=random_box()
let Choosen_text_color=random_color()
choosen_box.style.backgroundColor = choosen_color;
choosen_box.style.color =Choosen_text_color;

let display_background_color=document.getElementById("box_color")
display_background_color.textContent=choosen_color;

let display_text_color=document.getElementById("box_text_color")
display_text_color.textContent=Choosen_text_color;

