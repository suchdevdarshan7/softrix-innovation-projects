// let student = "name";

// let x = 10;
// let y = 20;

// let student_name = "Rahul";
// // 
// let studentName = "Sasi";

// let number1 = 10;
// let number2 = 20;

// ! Arthimetic operators:

// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);


//! Assignment operators

// let number = 10;

// number  +=  10;

// number = number + 10;
// number-=10;
// number*=10;
// number%=10;
// number/=2;


// Comparision operators

// ==
// ===
// !=
// !==
// !===

// let first_number = 2;
// let second_number = "2";

// == checks only the values are equal or not
// console.log(first_number == second_number);
// console.log(first_number == second_number);

// === checks value and datatype

// console.log(first_number === second_number);


// console.log(first_number != second_number)
// console.log(first_number !== second_number)// strict operator


//! Typeof operator

// let student_name = "GoodName";
// let student_age = 25;
// let isTopper = false;
// let student_skills = ['cricket','basketball','boxing'];
// let student_percentage = 68.5;


// console.log(typeof(student_name))
// console.log(typeof(student_age))
// console.log(typeof(isTopper))
// console.log(typeof(student_skills))
// console.log(typeof(student_percentage))


// let phone_number = document.querySelector("#phone_tag");
// let button = document.querySelector('#button')


// button.addEventListener('click',(e)=>{

//     e.preventDefault()
//     let convertToNumber = parseInt(phone_number);

//     if(convertToNumber === NaN){
//         console.log(convertToNumber);
//         alert("This is not valid!")
//     }
//     else{
//         console.log(convertToNumber);
//         alert("Validated!")
//     }
// })


// condition ? "True block" : "False block"

let number = parseInt(prompt('Enter a number'));

let checkIsEven = number%2==0 ? "Even" : "Odd";

console.log(checkIsEven);

console.log(number%2==0 ? "Even" : "Odd")