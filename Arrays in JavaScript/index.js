//  Array are variables in javascript which is used to store mutiple and different type of value in it 

let arr=[1,2,3,4,5,6,7]
console.log(arr.length)
// console.log(arr.length) is used to get the length of an array
// array are mutable datatypes
arr['2']=34;
// arr['2']=34; is used to change the number 2 to 34 in the array
arr[2]=3;
// arr[2]=3; is used to change the elemnt on the postional index 2

console.log(arr)
console.log(arr[0])
// console.log(arr[0]) is used to access the element through slicing





// Array Methods

// toString() is used to convert an array into strin
console.log(arr.toString())

let for_join=(1,2,4,5,6,7)
console.log(arr.join(" hello "))
// .join("string") is used to join the string with a particular name

let arr2=[2,3,4,5343,32,24]
console.log(arr2.pop())
// .pop is used to remove the last element from the array 

arr2.push(43)
// .push is used to add any element in the array
arr2.shift()
// .shift() is used to remove the first element from the array
arr2.unshift(453)
// .unshift() is used to add the Element in the beginning of the Array
// arr2.delete[1]
// .delete[postional index] is used to delete an Element from the Array it
let friend_name=["Nishu","Nikunj","Akshay"]
let friend2_name=["Suraj","Hemant","Prem"]
let friend3_name=["Sagar","Vikki","Aditi"]
let joined=arr2.concat(friend_name,friend2_name,friend3_name)
// .concat(variable to concatenate) method is used to concatenate the arrays. It does not change the existing arrays.

let numberss=[5,4,2,543,21]
console.log(numberss.sort())
// .sort() method is used to sort the array in the asscending order.

console.log(numberss.splice(0,2))
// .splice(start-index-position,end-index-position) method is used to delete the element from the list.

    
