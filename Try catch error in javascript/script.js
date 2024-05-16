let a=prompt("Enter Your First Number: ")
let b=prompt("Enter Your Second Number: ")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This character is not allowed")
    // throw is used to display a custom error which we can generate
}

let sum=parseInt(a)+parseInt(b)
function main() {
    
    let x=1
    
    try{
        console.log("Your Sum is", sum*x)
        return true
        
    }catch(error){
        alert("Sorry Something Wen't Wrong")
        return false
    }
    
    finally{
        console.log("Files are being closed")
    }
}

main()
// Use of finaaly => Jab bhi kisi function ke andar return statement hoti hai toh return ke niche ka code execute nhi hota and agar ham aisa karna chahte hain toh ham finally ka use karte hain