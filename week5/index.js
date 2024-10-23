// console.log("hello world")
//alert('Hello, world!');
//window.document.write('<p>Welcome to CSEN60!</p>');

//document.append('<p>This should come after the h1</p>')

/*
  Function to calculate the sum of two numbers.
  Inputs: a, b - numbers to be added.
  Output: returns the sum of a and b.
*/

//TODO fix this 
/** 
 * 
 * @description this adds two numbers
 */
function add(a, b) {
    return a + b;
}

let x = 100;
//let x -> declaration
//x = 200 -> initialization
if (true) {
    var x = 200; // Same variable!
}
console.log(x);//outputs 200

let y 
y = null
let z = 0
console.log(y,z)

let greeting = "Hello, world!";
let response = `The time is ${new Date().getHours()}`;

conscole.log(response) 

const age = 20

if(age>18){
    console.log("You are of age")
} else{
    console.log(`You aren't of age. Please wait ${18-age} year(s)`)
}
let isAvailable = true;
let isOVerAge = (age>18);

console.log("/n", isOverAge)

let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person["age"])

console.log(typeof("hello world"))