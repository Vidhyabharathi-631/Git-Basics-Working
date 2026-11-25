let a =5.0
console.log(typeof a);
if(a>10){
    console.log("a is greater than 10");
}else{
    console.log("a is less than 10");
}

function  greet() {
    const name = "vidhya";
    console.log(`Hello, ${name}!`);
}

greet();

setTimeout(() => {
   console.log("Executing immediately");
}, 500);

const userDetails = {
    name: "vidhya",
    age: 25,
    isActive: true
};
console.log(userDetails);

console.log("10" == 10);

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
greetUser("Gowtham");

let greetuser = function(name) {
    console.log(`Hello, ${name}!`);
}
greetuser("Vidhya");

let greetUserArrow = (name) => {
    console.log(`Hello, ${name}!`);
}
greetUserArrow("GV");

function addition(a, b){
    return a + b;
}
console.log("Addition : " + addition(5, 7));

let subtraction = function(a, b) {
    return a-b;
}
console.log("Subtraction : " + subtraction(10, 5));

let multiply = (a, b) => {
    return a*b;
}
console.log("Multiplication : " + multiply(10, 7));

let division = (a, b) =>{
    return a/b;
}
console.log("Division : "+ division(10, addition(3, subtraction(5, 3))));

const displayUser = (userDetails) => {
    console.log("Name : "+ userDetails.name);
}
displayUser(userDetails);

let arr = [21, 25, 29, 24, 28];
console.log(arr);

const double = arr.map((num) => {
    return num * 2;
});
console.log("Double: " + double);

let arr2 = [...arr.map((num) => num ** 2)];
console.log("Double (using spread): " + arr2);

let arr3 = [...arr.filter((num) => num > 25)];
console.log("Filtered (greater than 25): " + arr3);

let arr4 = [...arr.reduce((acc, num) => {
    acc.push(num * 3);
    return acc;
}, [])];
console.log("Reduced (tripled): " + arr4);

let newArr = [...arr, arr2, arr3, arr4];
console.log("New Array: " + newArr);

console.log("1. Logging");
setTimeout(() => {
    console.log("2. Logging");
}, 2000);
console.log("3. Logging");