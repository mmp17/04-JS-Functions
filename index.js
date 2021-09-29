// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }
//   console.log(toCelsius(77))

// function myFunction(name) {
//   return "Hello " + name;
// }

// console.log(myFunction('Muzaffar')) //returns Hello Muzaffar

//JavaScript return Statement: The return statement stops the execution of a function and returns a value from that function.

// function myFunction(){
//   return Math.PI;
// }
// console.log(myFunction()) // returns 3.141592653589793

// function power(a,b){
//   return Math.pow(a,b);
// }
// console.log(power(4,2)) //returns 16

//JS Math built-in objectga oid masalalar

//1. Math.pow(x, y) Returns base x to the exponent power y (that is, x^y).

// function pow(a,b) {
//     console.log(a ** b)
// }
// pow(3,2) //returns 9

//2. Math.round(x) Returns the value of the number x rounded to the nearest integer.

// function round(a) {
//     console.log(parseFloat(a).toFixed(0))
// }
// round(10.99) //returns 11


//3. Math.ceil(x) Returns the smallest integer greater than or equal to x.

// var a = 4;
// var b = 3, val = 0;
// if ((a % b) != 0)
//     val = parseInt(a / b) + (a % b);
// else
//     val = parseInt(a / b);
//     console.log("The ceiling value of 4/3 is " + val);  //returns 2
     
//4. Math.floor(x) Returns the largest integer less than or equal to x.


//5. Math.abs(x) Returns the absolute value of x.

// function abs_number(number) {
//     console.log((number < 0) ? -number : number)
// }
// abs_number(-10) //returns 10

//6. Math.sqrt(x) Returns the positive square root of x.

// function sqrt(a) {
//     console.log(a ** 0.5)
// }
// sqrt(25) //returns 5

//7. Math.cbrt(x) Returns the cube root of x.

// function sqrt(a) {
//     console.log(a ** (1/3))
// }
// sqrt(27) //returns 3

//Arrow function expressions
//Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax:
// hello = () => "Hello World!";
// console.log(hello())
// Note: This works only if the function has only one statement.

//Comparing traditional functions to arrow functions:
// Traditional Anonymous Function
// function (a){
//   return a + 100;
// } // Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
// (a) => {
//   return a + 100;
// }

// 2. Remove the body braces and word "return" -- the return is implied.
// (a) => a + 100;

// 3. Remove the argument parentheses
// a => a + 100;

// hello = (val) => "Hello " + val;
// console.log(hello("World!"))

//After a function has been stored in a variable, the variable can be used as a function:
//The function above is actually an anonymous function (a function without a name). Functions stored in variables do not need function names. 
//They are always invoked (called) using the variable name.
// const lx = function (a,b) {
//     return console.log(a * b) ;
// }

// lx (3,4) //12

// Finding the largest number:
// function findMax() {
//     let max = -Infinity;
//     for(let i = 0; i < arguments.length; i++) {
//       if (arguments[i] > max) {
//         max = arguments[i];
//       }
//     }
//     return max;
//   } 

//   console.log(findMax(4, 5, 6, 100))//100

//create a function to sum all input values
// function sumAll() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return sum;
//   }

//   console.log(sumAll(4, 5, 6, 100)) //115

// function myFunction(a, b) {
//     return console.log(a * b);
//   }
//   myFunction(10, 2);           // Will return 20

// JavaScript Array Filter. The filter() method creates an array filled with all array elements that pass a test (provided by a function). Mosh

// const numbers = [1,2,3,4,5,6,7,10,15,20,25,30]

// const filtered = numbers.filter(function(value) {return value >= 10;});

// console.log(filtered)

// const  numbers = [19, 25, 27, 35, 40, 41, 42, 45, 50, 55, 60];

// const filtered = numbers.filter(value => value>=40&&value<=50);

// console.log(filtered);

// const fruits = ['Orange', 'Banana', 'Apple', 'kiwi', 'Peach'];

// fruits.map((value)=>{console.log(value);})


// let number = [10, 9, 5, 23, 12, 3, 3, 45, 6, 43, 23, 0, 2, 3];

// let sum=0;
// number.map((value) => (sum += value));
// console.log(sum); //187

// const numbers = [175, 50, 25];
// let number2 = numbers.reduce(myFunc);
// function myFunc(total, num) {
//     return total - num;
//   }

//   myFunction();

// JavaScript Higher Order Functions & Arrays
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
// filter
// map
// sort
// reduce

//(1/5)for
// let sum=0;
// for (let i=0; i <= ages.length-1; i++) {
//   sum = sum + ages[i];
// }

// console.log(sum); //460

// for (let i=0; i <= ages.length-1; i++) {
//   console.log(ages[i]); //loops from 33 up to 32 vertically
// }

// for (let i=0; i <= ages.length-1; i++) {
//   console.log('index', i, '=', ages[i]); //loops index 0 = 33
// }

// for (let i=0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// (2/5)forEach
// let sum = 0;
// ages.forEach(myFunction);
// function myFunction(item) {
//    sum += item;
// }
// console.log(sum); //460

// companies.forEach(function(company){
//   console.log(company.name, company.start);}); //Company One 1981...

// companies.forEach(function(value){
//   console.log(value.name, 'is in', value.category, 'business', 'from', value.start,'to', value.end); //Company One is in Finance business from 1981 to 2004
// });

//(3/5)filter

//get age of 18 and older

// let passport = [];
// for (let i=0; i < ages.length; i++) {
//   if (ages[i] >=18) {
//     passport.push(ages[i])};
// }

// console.log(passport) // [33, 20, 54, 21, 44, 61, 45, 25, 64, 32]

const passportAge = ages.filter(function(age) {
  if (age >= 18) {
    return true;
  }
});
console.log(passportAge) //[33, 20, 54, 21, 44, 61, 45, 25, 64, 32]