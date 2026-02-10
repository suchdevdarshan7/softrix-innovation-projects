// a = 10 ;
// b = 20 ;
// var let const


// ! Global scoped variable

// var a = 10;

// {
//     console.log(a)
// }


// {
//     var b = 20;
// }

// console.log(b);
//! Declaration

// var a;
// console.log(a)
// ! Initialization
// a = 10;
// console.log(a)
//! Initialize and declare in same line
// var c = 20;
// console.log(c)

//! Redeclare 
// var a;
// console.log(a)

//! Reintiliaze 
// a = 20;
// console.log(a)

//! Redeclare and reinitialize in the same line
// var a = 200;
// console.log(a)

//! Hoisting

// ! when we try to access an variable before declaring or before intiliazing using var keyword we will get undefined


// console.log(number)
// var number = 1002;



// -----> 


//! Declaration

// let x;
// console.log(x)
// ! Initialization
// a = 10;
// console.log(a)
// //! Initialize and declare in same line
// let y = 20;
// console.log(y)

//! Redeclare 
// let x; Uncaught SyntaxError: Identifier 'x' has already been declared
// console.log(x)

//! Reintiliaze 
// x = 300;
// console.log(x)

//! Redeclare and reinitialize in the same line
// let x = 200;


// --->

//! Declaration

//const x; // Uncaught SyntaxError: Missing initializer in const declaration
// console.log(x)
// ! Initialization
// x = 10;
// console.log(a)
//! Initialize and declare in same line
// let y = 20;
// console.log(y)
const y = 300;
console.log(y)

//! Redeclare 
// let x; Uncaught SyntaxError: Identifier 'x' has already been declared
// console.log(x)

// const y ;

//! Reintiliaze 
// x = 300;
// console.log(x)

// y = 30000;  // Uncaught TypeError: Assignment to constant variable.
// console.log(y)

//! Redeclare and reinitialize in the same line
// let x = 200;

// const y = 1500;
// console.log(y)