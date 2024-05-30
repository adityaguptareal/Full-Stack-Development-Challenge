// Adjectives
// Crazy
// Amazing
// Fire

// Shop Name
// Engine
// Food
// Garments

// Another Word
// Bros
// Limited
// Hub
function random() {
    let random_number=parseInt(Math.random()*3)+1
return random_number;
    
}

let adj_rand=random()
let Adjectives={
    "1":"Crazy",
    "2":"Amazing",
    "3":"Fire",
}
let adj_choose=Adjectives[adj_rand]

let shop_rand=random()

let Shop_name={
"1":"Engine",
"2":"Food",
"3":"Garments",
}
let shop_choose=Shop_name[shop_rand]

let Another_word_rand=random()
let Another_word={ 
"1":"Bros",
"2":"Limited",
"3":"Hub",
}
let Another_word_choose=Another_word[Another_word_rand]

console.log(`${adj_choose} ${shop_choose} ${Another_word_choose} is perfect for your business name`)

