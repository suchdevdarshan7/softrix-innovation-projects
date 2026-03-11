
// // Functions
// function printSomething(){
//     console.log("Hello!")
//     console.log(arguments)
// }
// //keyword identifier (arguments);
// //named function have this keyword and arguments keyword

// // Arrow functions
// // Arrow function does not have this keyword and arguments keyword

// let a = () =>  {
//     console.log("This is a arrow function")
// }


// // printSomething(10,20,30,40,50)


// // IIFE 
// //Immediately invoked function expression

// (function(){
//      console.log("Hello world!")
// })();


// // Highlevel function 


// // function HLF(cb){
// //     console.log("I am a high level function");
// //     cb()
// // }

// function CallbackFunction(){
//     console.log("I am a callback function")
// }


// HLF(CallbackFunction)


function Addition(number1,number2){ console.log(number1+number2)
}

// Addition(10,20)



const birthyear = 2024;

function FindThisYear(){
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear;
}


function CheckVotingStatus(birthyear){
    let thisNewYear= FindThisYear();
    console.log(thisNewYear - birthyear)
    console.log(thisNewYear - birthyear < 18 ? "Not eligible": "Eligible")  
}

CheckVotingStatus(birthyear)
