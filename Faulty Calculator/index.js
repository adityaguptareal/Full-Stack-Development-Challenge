// Making Faulty Calculator

const PromptSync = require("prompt-sync");
const { questionNewPassword } = require("readline-sync");

// Importing and Using Prompt-Sync Module 
function Calculator() {
    const prompt = require("prompt-sync")();
    // Displaying operation
    console.log("Enter 1 for Addition");
    console.log("Enter 2 for substraction");
    console.log("Enter 3 for Multiplication");
    console.log("Enter 4 for Division");
    var operation = prompt("Choose Your Operation: ")

    // Making Function for operation
    function Addition(number1, number2) {
        var num1 = parseFloat(number1)
        var num2 = parseFloat(number2)
        var additon_result = num1 + num2;
        return additon_result
    }
    function substraction(number1, number2) {
        var num1 = parseFloat(number1)
        var num2 = parseFloat(number2)
        var sub_result = num1 - num2;
        return sub_result
    }
    function Multiplication(number1, number2) {
        const num1 = parseFloat(number1)
        const num2 = parseFloat(number2)
        const mul_result = num1 * num2;
        return mul_result
    }
    function Division(number1, number2) {
        const num1 = parseFloat(number1)
        const num2 = parseFloat(number2)
        const div_result = num1 / num2;
        return div_result
    }
    function Exponent(number1, number2) {
        const num1 = parseFloat(number1)
        const num2 = parseFloat(number2)
        const exp_result = num1 ** num2;
        return exp_result
    }
    function faulty_calculator() {
        if (operation==1){
            operation=2;
        }
        else if(operation==3){
            operation=1;
        }
        else if(operation==2){
            operation=4;
        }
        else if(operation==4){
            operation=5;
        }
    }
// Faulty Functionality
var faulty_option=Math.random();
// var faulty_option=(Math.random());
// have to remove it
console.log(faulty_option)
if (faulty_option<0.1){
    console.log("Calculator will work as faulty")
    faulty_calculator()
}
else{
    console.log("Calculator will work normally")
}

    // Condtion for operation input
    if (operation == 1) {
        const number1 = prompt("Enter Your First Number: ")
        const number2 = prompt("Enter Your Second Number: ")
        var result = Addition(number1, number2)
        console.log("You're result is " + result)
    }

    else if (operation == 2) {
        const number1 = prompt("Enter Your First Number: ")
        const number2 = prompt("Enter Your Second Number: ")
        var result = substraction(number1, number2)
        console.log("You're result is " + result)
    }
    else if (operation == 3) {
        const number1 = prompt("Enter Your First Number: ")
        const number2 = prompt("Enter Your Second Number: ")
        var result = Multiplication(number1, number2)
        console.log("You're result is " + result)
    }
    else if (operation == 4) {
        const number1 = prompt("Enter Your First Number: ")
        const number2 = prompt("Enter Your Second Number: ")
        var result = Division(number1, number2)
        console.log("You're result is " + result)
    }
    else if (operation == 5) {
        const number1 = prompt("Enter Your First Number: ")
        const number2 = prompt("Enter Your Second Number: ")
        var result = Exponent(number1, number2)
        console.log("You're result is " + result)
    }
    else {
        console.log("You Entered Wrong Choice")
    }
// Programm Closing Function
    console.log("To run the programm again enter 1: ")
    console.log("To exit the programm again enter 2: ")
    const action = prompt("Choose the Options: ")
    if (action == 1) {
            Calculator()
        }
        else{
            
        }
        
    }
Calculator()





