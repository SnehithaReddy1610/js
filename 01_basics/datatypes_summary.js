// # Premitive datattypes

// 7 types : String ,Number,Boolean, null, undefined, Symbol
// BugInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmial;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 12345675467887654



// Reference Type (Non Primitive)

// Array , Objects, Functions
const heros = ["shaktiman","naagraj","dooga","naagraj"]
let myObj = {
    name: "hello",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
    
}
// console.log(typeof bigNumber);




//************************************************************* */

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutTubename = "ammureddydotcom"

let anotherName = myYoutTubename
anotherName = "helloworldName"

console.log(myYoutTubename);
console.log(anotherName);


let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "name@microsoft.com"

console.log(userOne.email);
console.log(userTwo.email);

