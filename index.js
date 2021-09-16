// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }
//   console.log(toCelsius(77))

// function myFunction(name) {
//   return "Hello " + name;
// }

// console.log(myFunction('Muzaffar')) //returns Hello Muzaffar

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