// Strings and its functions in JavaScript
let a='Nishu';
console.log(a[0])
// console.log(a[0]) is used to access the first letter of the strings

console.log(a.length)
// a.length function is used to get the number of characters in the strings

// String Interpolation is a technique in which we insert a variable direclty in template literal with the help of ${}

// tamplate literals is used when we need to use or show both single and doubble quotes in our . To use template literals we use (``)
let name_friend="Nishu"
let sentence =(`Hey ${name_friend} What are you doing ?`)
console.log(sentence)

// Escape Sequence Character are Special type of character which is used to perform some special action in our program

// Example \n is used to add next line
// \t is used to to add tab in 

// Syntax difference b/w funtion and Properties b.length ->Properties, b.toUpperCase() -> Function


// .toLowerCase() is used to convert the string into LowerCase
// .toUpperCase() is used to convert the string into Uppercase 

console.log(name_friend.toUpperCase())
console.log(name_friend.toLowerCase())

// Slicing is a method in the programming which is used to access the elements from the defined position

// .slice(start-pos,end-pos) is used to do slicing in the string
    // By Default it starts from 0 postion and exclude from the 1 one end position

// .replace(to replace text, from replace text) is used to replace the text in the strinig
// .concat(variable-name,"anystring(optional)") is used to contcatenate two variables
// .indexOf("substring") is used to find the first occurence of substring in the main string


// Strings are immutable -> means the value can't be change

console.log(name_friend.slice(0,3))

let author="Aditya Kumar Gupta"
console.log(author.replace("Kumar","Gupta"))
console.log(author.indexOf("Kumar"))
console.log(author.charAt(0))