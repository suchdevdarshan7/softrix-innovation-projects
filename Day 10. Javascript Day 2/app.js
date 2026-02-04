// ! Arithmetic operator: 

// a = 10 ;
// b = 20 ;

// //  decimal numbers are 0 - 9 
// // floating number has points for example 10.5 20.5

// console.log(a+b)
// console.log(a-b)
// console.log(a*b) // * for multiplication
// console.log(a/b) // / for quotient in divison
// console.log(a%b) // % for remainder in divison

// console.log(10/2)
// console.log(10%3)

// ! Assignment operators


// a = 10 ;
// a = a + 10;

// a+=10 ;
// a-=10;
// a*=10;
// a/=10;
// a%=10;

// ! Relational operators

// a = 10;
// b = 20;
// c = '10'; // ten inside a string


// console.log(a==b)  // ! if equal return true, if not equal returns false
// console.log(a!=b) // !  if equal returns false if not equal return true
// console.log(a==c)
// console.log(a===c);
// console.log(a!==b);
// console.log(a!=b);


// Number,String , Symbols, null, undefined, Array

// ! Comparision operators

// < > <= >=

// a = 10 ;
// b = 10 ; 


// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);

// ! Logical operators

//  And or not


// monday=1;
// tuesday=1;

// console.log(monday&&tuesday);


// ! Give me a number which is divisble by both 5 and 3

// a = parseInt(prompt("Enter a number"))

// if(a%5==0 && a%3==0){
//     console.log("The number is divisible by  5 and 3")
// }
// else{
//     console.log("The number is not divisble by 5 and 3")
// }

// ! Give me a number which is divisble by 5 or 3 and 7 or 2

// a = parseInt(prompt("Enter a number"))

// if((a%5==0 || a%3==0) && (a%7==0 || a%2==0)){
//     console.log("The number is divisble by 5 or 3 and 7 or 2")
// }else{

//     console.log("The number is not divisble by 3 or 5")
// }

// ! Not operator

// console.log(!true)
// console.log(!0)

// ! ternary operator

// age = parseInt(prompt("Enter the age of the canditate"));
// isThePersonEligibleToVote = age < 18 ? "This person cannot vote" : "This person can vote";
// console.log(isThePersonEligibleToVote)

// ! typeof()

// number = [1,2,3]

// console.log(typeof(number))


//! () ?  true : false;

// if (condition){
//     true;
// }
// else{
//     false;
// }

// ! odd or even

// a = parseInt(prompt("Enter a number"))

// if(a%2==0){
//     console.log("The number is even")
// }
// else{
//     console.log("The number is odd")
// }



// ! check whether a number is positive negative or zero

// a = parseInt(prompt("Enter a number"))

// if(a>0){
//     console.log("positive")
// }
// else if(a<0){
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }
// ! Scary production code

// if(){
//     if(){
//         if(){

//         }
//     }
// }

a = 10;
switch (a) {
   case 1 :
    console.log('The number is 1')
    break;
   case 2 :
    console.log('The number is 2')
    break;
   case 3 :
    console.log('The number is 3')
    break;
   case 4 :
    console.log('The number is 4')
    break;
   case 5 :
    console.log('The number is 5')
    break;
   default:
        console.log("The number is not in the range 1 to 5")
}
