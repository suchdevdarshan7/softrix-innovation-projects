// number1 = 10;
// number2 = 20;


// sum=number1 + number2;

// console.log(sum)

// DRY==> Do not repeat yourself



// sum = number3 + number4;


// ! named functions

// function Sum(number1,number2){
//     sum = number1+number2;
//     console.log(sum)
// }


// Sum(10,20);
// Sum(500,300);

// username="admin";
// password="password123"



// document.querySelector('button').addEventListener('click',validation)

// function validation(){
//     username = document.querySelector(`input[type="text"]`).value;
//     password = document.querySelector(`input[type="password"]`).value
//     ;
//     if(username==="" || password===""){
//         alert("Username and password should be entered!");
//     }
//     else if(password.length<8){
//         alert("Password is too small")
//     }
//     else if(!username.includes('@') && !username.includes('.com')){
//         alert("Enter a valid username");
//     }
//     else{
//         window.open("https://en.wikipedia.org/wiki/April_Fools%27_Day")
//     }

// }


// ! named functions

function Sum(number1,number2){
    sum = number1+number2;
    console.log(sum)
    // has its own this keyword!
}

// function idenfier(parameters){
  //block of code
// }


// ! Arrow functions

// a = () => {
//     console.log("Hello world!")
//     // does not have this keyword
// } 
 

//! function with express


// b = function (){

//     console.log("Hello this is new function")
// }
// b()

// IIFE ==> immediately invoked function expression

// (function(){
//     console.log("This is a iife function")
// })()


// ! Anonymous function

// function(){

// }

// ! High order function 

// function High(cb){
//     console.log("Hello world")
//     cb()
// }

// ! The function which accepts or returns a function is called as higher order function
//! Callback functions

// function simpleRandom(){
//     console.log("Hello I am a callback function")
// }

// ! The function which is getting passed as a value in invocation is called as call back function
// High(simpleRandom);



// function Idontknowwhattoname(){
//     console.log(arguments)
// }

// whattoName = ()=>{
//     console.log(arguments)
// }


// Idontknowwhattoname(10,20,30,40,50)
// whattoName(10,20,30,40)


// function DoSomething(){
//     return ["apple","orange"]
// }

// console.log(DoSomething())


// ! named function have their own arguments keyword but arrow functions do not have

// ! one liner arrow functions without {} will automatically  return 
// ! once {} added we need to add return explicitly

// a = (el) => el%10 
// a()

// a= ()=> {
//     return [
//         "Orange",
//         "Apple"
//     ]
// }

// console.log(a())