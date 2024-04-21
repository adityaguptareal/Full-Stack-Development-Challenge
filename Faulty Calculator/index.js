// Making Faulty Calculator
// Importing and Using Prompt-Sync Module 
function Calculator() {
    const prompt=require("prompt-sync")();
    // Displaying operation
    console.log("Enter 1 for Addition");
    console.log("Enter 2 for substraction");
    console.log("Enter 3 for Multiplication");
    console.log("Enter 4 for Division");
    var operation=prompt("Choose Your Operation: ")
    
    // Making Function for operation
    function Addition(number1, number2) {
        var num1=parseFloat(number1)
        var num2=parseFloat(number2)
        var additon_result=num1+num2;
        return additon_result 
    }
    function substraction(number1, number2) {
        var num1=parseFloat(number1)
        var num2=parseFloat(number2)
        var sub_result=num1-num2;
        return sub_result 
    }
    function Multiplication(number1, number2) {
        const num1=parseFloat(number1)
        const num2=parseFloat(number2)
        const mul_result=num1*num2;
        return mul_result 
    }
    function Division(number1, number2) {
        const num1=parseFloat(number1)
        const num2=parseFloat(number2)
        const div_result=num1/num2;
        return div_result 
    }
    
    
    
    // Condtion for operation input
    if (operation==1){
        const number1=prompt("Enter Your First Number: ")
        const number2=prompt("Enter Your Second Number: ")
        var result=Addition(number1,number2)
        console.log("You're result is "+ result)
    }
    
    else if(operation==2){
        const number1=prompt("Enter Your First Number: ")
        const number2=prompt("Enter Your Second Number: ")
        var result=substraction(number1,number2)
        console.log("You're result is "+ result)
    }
    else if(operation==3){
        const number1=prompt("Enter Your First Number: ")
        const number2=prompt("Enter Your Second Number: ")
        var result=Multiplication(number1,number2)
        console.log("You're result is "+ result)
    }
    else if(operation==4){
        const number1=prompt("Enter Your First Number: ")
        const number2=prompt("Enter Your Second Number: ")
        var result=Division(number1,number2)
        console.log("You're result is "+ result)
    }
    else{
        console.log("You Entered Wrong Choice")
    }

    //  Just Doin For some test
    
}



i=2;
while (i<3) {
    Calculator()
}

